import React, { useEffect, useState } from 'react'

export default function Keyboard({ usedChoices }) {
// keyboard fetch
  const [letters, setLetters] = useState(null)
  useEffect(() => {
    fetch('http://localhost:3001/letters')
      .then(res => res.json())
      .then(json => {
        setLetters(json)
      })
  }, [])
  // keyboard display
  return (
    <div className="keyboard">
      {letters && letters.map(l => {
        const color = usedChoices[l.key]
        return (
          <div key={l.key} className={color}>{l.key}</div>
        )
      })}
    </div>
  )
}
