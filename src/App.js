import { useEffect, useState } from 'react'
import Wordle from './components/Wordle'

function App() {
  const [rightAnswer, setsolution] = useState(null)

  useEffect(() => {
    // where to see right Answer server
    fetch('http://localhost:3001/solutions')
      .then(res => res.json())
      .then(json => {
        // grabs us a random right answer when choosing a number
        const randomrightAnswer = json[Math.floor(Math.random()*json.length)]
        // sets the random right answer
        setsolution(randomrightAnswer.word)
      })
  }, [setsolution])

  // the wordle display
  return (
    <div className="App">
      <h1>Wordle</h1>
      {rightAnswer && <Wordle rightAnswer={rightAnswer} />}
    </div>
  )
}

export default App
