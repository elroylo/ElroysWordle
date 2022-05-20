import React from 'react'

export default function Answer({ right, rightAnswer, attempt }) {
  return (
    <div className="Answer">
      {right && (
        <div>
          <h1>
            Correct
          </h1>
          <p className="rightAnswer">{rightAnswer}</p>
          <p>Answer found in {attempt} attempts :)</p>
        </div>
      )}
      {!right && (
        <div>
          <h1>Try Again</h1>
          <p className="rightAnswer">{rightAnswer}</p>
          <p>Wrong :)</p>
        </div>
      )}
    </div>
  )
}
