import { useState } from 'react'

const useWordle = (rightAnswer) => {

  const [attempt, setAttempt] = useState(0)

  const [chosenNow, setChosenNow] = useState('')

  //const [debug, setDebug] = useState('')

  const [choices, setChoices] = useState([...Array(6)])

  const [history, setHistory] = useState([])

  const [right, setRight] = useState(false)

  const [usedChoices, setusedChoices] = useState({})

  // Format my guesses into letter arrays
  // then match the letters and rightAnswer

  const formatChoice = () => {
    let solutionArray = [...rightAnswer]
    // let debug1 = [...rightAnswer]
    // let debug2 = [...solutionArray]
    let formattedChoice = [...chosenNow].map((l) => {
      return {key: l, color: 'grey'}
    })

    // scans array of letters for exactly correct placement letters
    formattedChoice.forEach((l, i) => {

      if (rightAnswer[i] === l.key) {
        formattedChoice[i].color = 'green'
        solutionArray[i] = null
      }
    })

    // scans array of letters for partially correct placement letters
    formattedChoice.forEach((l, i) => {

      if (solutionArray.includes(l.key) && l.color !== 'green') {
        formattedChoice[i].color = 'yellow'
        solutionArray[solutionArray.indexOf(l.key)] = null
      }
    })

    return formattedChoice
  }


  // now, add your choices
  // if you get it right, then it'll display you get it right
  // displays history and attempts
  // shows used and unused choices
  const addNewChoice = (formattedChoice) => {
    if (chosenNow === rightAnswer) {
      setRight(true)
    }


    setChoices(prevChoicees => {
      let newChoicees = [...prevChoicees]
      newChoicees[attempt] = formattedChoice
      return newChoicees
    })


    setHistory(prevHistory => {
      return [...prevHistory, chosenNow]
    })


    setAttempt(prevTurn => {
      return prevTurn + 1
    })


    setusedChoices(prevusedChoices => {
      formattedChoice.forEach(l => {
        const currentColor = prevusedChoices[l.key]

        if (l.color === 'green') {
          prevusedChoices[l.key] = 'green'
          return
        }
        if (l.color === 'yellow' && currentColor !== 'green') {
          prevusedChoices[l.key] = 'yellow'
          return
        }
        if (l.color === 'grey' && currentColor !== ('green' || 'yellow')) {
          prevusedChoices[l.key] = 'grey'
          return
        }
      })

      return prevusedChoices
    })
    setChosenNow('')
  }

  // I am using handle keyup from some guides
  // they allow great conditional arguments
  // and allow my program to be more controlled
  const handleKeyup = ({ key }) => {
    if (key === 'Enter') {

      // if over your attempt limit
      if (attempt > 5) {
        console.log('No more attempts')   // return
        return
      }

      // if word is duplicate
      if (history.includes(chosenNow)) {
        console.log('Duplicate Attempt')    // return
        return
      }

      // if word is 5 chars
      if (chosenNow.length !== 5) {
        console.log('Attempts can only be 5 letters long')    // return
        return
      }

      // format the choices
      const formatted = formatChoice()
      addNewChoice(formatted)
    }

    // pops last letter
    if (key === 'Backspace') {
      setChosenNow(prev => prev.slice(0, -1))
      return
    }

    // letter input
    if (/^[A-Za-z]$/.test(key)) {
      if (chosenNow.length < 5) {
        setChosenNow(prev => prev + key)
      }
    }
  }

  return {attempt, chosenNow, choices, right, usedChoices, handleKeyup}
}

export default useWordle;