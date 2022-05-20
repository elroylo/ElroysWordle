import React, { useEffect, useState } from 'react'
import useWordle from '../hooks/elroyDle'
import Boxes from './Boxes'
import Keyboard from './Keyboard'
import Answer from './Answer'

export default function Wordle({ rightAnswer }) {
  const { chosenNow, choices, attempt, right, usedChoices, handleKeyup } = useWordle(rightAnswer)

  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {

    window.addEventListener('keyup', handleKeyup)

    if (right) {
      setTimeout(() => setShowAnswer(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    if (attempt > 5) {
      setTimeout(() => setShowAnswer(true), 2000)
      window.removeEventListener('keyup', handleKeyup)
    }

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup, right, attempt])

// display for Boxes, keyboard, and right/wrong/rightAnswer
  return (
    <div>

      <Boxes choices={choices} chosenNow={chosenNow} attempt={attempt} />

      <Keyboard usedChoices={usedChoices} />

      {showAnswer && <Answer right={right} attempt={attempt} rightAnswer={rightAnswer} />}
    </div>
  )
}
