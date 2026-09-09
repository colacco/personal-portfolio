import { useEffect, useState } from 'react'

function computePerView(width: number): number {
  return width >= 1040 ? 3 : width >= 720 ? 2 : 1
}

export const CARD_GAP = 22

export interface ProjectsCarouselState {
  perView: number
  slide: number
  maxSlide: number
  next: () => void
  prev: () => void
}

export function useProjectsCarousel(total: number): ProjectsCarouselState {
  const [perView, setPerView] = useState(() =>
    typeof window === 'undefined' ? 3 : computePerView(window.innerWidth),
  )

  const [rawSlide, setRawSlide] = useState(0)
  const maxSlide = Math.max(0, total - perView)
  const slide = Math.min(rawSlide, maxSlide)

  useEffect(() => {
    const onResize = () => setPerView(computePerView(window.innerWidth))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return {
    perView,
    slide,
    maxSlide,
    next: () => setRawSlide((s) => Math.min(maxSlide, s + 1)),
    prev: () => setRawSlide((s) => Math.max(0, s - 1)),
  }
}
