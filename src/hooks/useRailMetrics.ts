import { useCallback, useLayoutEffect, useRef, useState } from 'react'

export interface Metrics {
  top: number
  height: number
  centers: number[]
}

export function useRailMetrics(count: number, active: number) {
  const trackRef = useRef<HTMLDivElement>(null)
  const headRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [metrics, setMetrics] = useState<Metrics>({ top: 0, height: 0, centers: [] })

  const measure = useCallback(() => {
    const track = trackRef.current
    const head = headRefs.current[active]
    if (!track || !head) return
    const tTop = track.getBoundingClientRect().top
    const centers = headRefs.current
      .slice(0, count)
      .map((el) => (el ? el.getBoundingClientRect().top - tTop + el.offsetHeight / 2 : 0))
    const top = head.getBoundingClientRect().top - tTop
    const height = head.offsetHeight
    setMetrics((prev) =>
      Math.abs(prev.top - top) < 0.5 &&
      Math.abs(prev.height - height) < 0.5 &&
      prev.centers.length === centers.length &&
      centers.every((c, i) => Math.abs(c - prev.centers[i]) < 0.5)
        ? prev
        : { top, height, centers },
    )
  }, [active, count])

  const measureRef = useRef(measure)
  useLayoutEffect(() => {
    measureRef.current = measure
  }, [measure])

  useLayoutEffect(() => {
    const onChange = () => measureRef.current()
    onChange()
    const ro = new ResizeObserver(onChange)
    if (trackRef.current) ro.observe(trackRef.current)
    headRefs.current.forEach((el) => el && ro.observe(el))
    window.addEventListener('resize', onChange)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', onChange)
    }
  }, [count])

  useLayoutEffect(() => {
    measure()
  }, [measure])

  const trackFor = useCallback(
    (ms = 520) => {
      const end = performance.now() + ms
      let raf: number
      const step = () => {
        measure()
        if (performance.now() < end) raf = requestAnimationFrame(step)
      }
      raf = requestAnimationFrame(step)
      return () => cancelAnimationFrame(raf)
    },
    [measure],
  )

  return { trackRef, headRefs, metrics, trackFor }
}
