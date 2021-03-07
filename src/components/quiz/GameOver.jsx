import React from 'react'
import MainBtn from '../../components/MainBtn'
import styled from 'styled-components'

const GameOver = () => {
  return (
    <GameOverStyle>
      <p>고생하셨습니다! <span>🎉</span></p>
      <MainBtn btnText='퀴즈 시작화면으로' />
    </GameOverStyle>
  )
}

const GameOverStyle = styled.div`
  text-align: center;

  p {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.title};
    margin-bottom: 3rem;

    @media (max-width: 479px) {
      font-size: 1.5rem;
    }
  }
`

export default GameOver
