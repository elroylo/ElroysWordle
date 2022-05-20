import React from 'react'
import Row from './Row'

// Boxes for the choices
export default function Boxes({ choices, chosenNow, attempt }) {

  return (
    <div>
      {choices.map((c, i) => {
        if (attempt === i) {
          return <Row key={i} chosenNow={chosenNow} />}

        return <Row key={i} choice={c} />
      })}
    </div>

  )
}
