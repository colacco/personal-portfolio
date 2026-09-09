import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

export type TypedPhase = 'name' | 'sub' | 'done'

interface TypedHero {
  name: string
  sub: string
  phase: TypedPhase
}

export function useTypedHero(name: string, sub: string): TypedHero {
  const reduced = useReducedMotion()
  const resetKey = `${name} ${sub} ${reduced}`

  const [typed, setTyped] = useState<{ name: string; sub: string } | null>(
    reduced ? null : { name: '', sub: '' },
  )
  const [phase, setPhase] = useState<TypedPhase>(reduced ? 'done' : 'name')

  const [prevResetKey, setPrevResetKey] = useState(resetKey)
  if (resetKey !== prevResetKey) {
    setPrevResetKey(resetKey)
    setTyped(reduced ? null : { name: '', sub: '' })
    setPhase(reduced ? 'done' : 'name')
  }

  const timers = useRef<number[]>([])

  useEffect(() => {
    timers.current.forEach(clearTimeout)
    timers.current = []

    if (reduced) return

    let delay = 320
    const steps: Array<[field: 'name' | 'sub', text: string, speed: number]> = [
      ['name', name, 82],
      ['sub', sub, 15],
    ]

    steps.forEach(([field, text, speed], stepIndex) => {
      for (let i = 1; i <= text.length; i++) {
        delay += speed * (0.6 + Math.random() * 0.9)
        const value = text.slice(0, i)
        timers.current.push(
          window.setTimeout(() => {
            setTyped((prev) => ({ ...(prev ?? { name: '', sub: '' }), [field]: value }))
            setPhase(field)
          }, delay),
        )
      }
      delay += stepIndex === 0 ? 480 : 200
      if (stepIndex === 1) {
        timers.current.push(window.setTimeout(() => setPhase('done'), delay))
      }
    })

    return () => timers.current.forEach(clearTimeout)
  }, [name, sub, reduced])

  return {
    name: typed ? typed.name : name,
    sub: typed ? typed.sub : sub,
    phase,
  }
}
