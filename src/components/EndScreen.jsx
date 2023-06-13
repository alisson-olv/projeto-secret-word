import React from 'react'
import './EndScreen.css'

const EndScreen = ({ retry, score }) => {
  return (
    <div>
      <h1>
        Fim do Jogo!
      </h1>
      <h2>
        A sua pontuação foi : <span>{score}</span>
      </h2>
      <button onClick={retry}>Recomeçar jogo</button>
    </div>
  )
}

export default EndScreen