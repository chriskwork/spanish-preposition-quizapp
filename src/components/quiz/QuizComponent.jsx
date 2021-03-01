import React, { useState } from 'react'
import styled from 'styled-components'
import { CheckCircle, XCircle } from 'react-feather'
import { basicQuizData, interQuizData } from './data/quiz-data'
import GameOver from './GameOver'

const QuizComponent = () => {
  const [ question, setQuestion ] = useState(0)
  const [ correctAnswer, setCorrectAnswer ] = useState(false)
  const [ wrongAnswer, setWrongAnswer ] = useState(false)
  const [ showCircle, setShowCircle ] = useState(null)
  const [ gameOver, setGameOver ] = useState(false)
  
  let quizDataOfCurrentLevel;

  if(window.location.pathname === '/basic-quiz') {
    quizDataOfCurrentLevel = basicQuizData
  }else {
    quizDataOfCurrentLevel = interQuizData
  }

  let { qFront, qBack, answers, answer } = quizDataOfCurrentLevel[question]
  console.log(wrongAnswer, '이걸 보시는 분이 계실까요? 😁')
  
  const nextQuestion = () => {
    
    if(question <= 18) {
      setQuestion(prev => prev + 1)
    }else if(question === 19) {
      setGameOver(true)
    }
    
    setCorrectAnswer(false)
    setWrongAnswer(false)
    setShowCircle(null)
     
  }

  const checkAnswer = e => {
    if(e.target.textContent === answer) {
      setWrongAnswer(false)
      setCorrectAnswer(true)
      setShowCircle(() => <CheckCircle size={56} color={'#00cf00'} /> )
    } else {
      setWrongAnswer(true)
      setCorrectAnswer(false)
      setShowCircle(() => <XCircle size={56} color={'#e94444'} /> )
    }
  }
  
  // 20개 객관식으로
  return (
    
      <Quiz className='max-width-container container-padding'>

        { gameOver ? 
          <GameOver /> : 
          <>
            <div className='circle'>
              { showCircle }
            </div>
            <div className='question'>
              <div className='front-text'>
                {qFront} &nbsp;
                <div className='answer-box'>
                  { correctAnswer && answer }
                </div>
                &nbsp; 
              </div>
              <div className='back-text'>
                {qBack}
              </div>
            </div>
            <div className='answers'>
              <div className='answer' onClick={checkAnswer}>{answers[0]}</div>
              <div className='answer' onClick={checkAnswer}>{answers[1]}</div>
              <div className='answer' onClick={checkAnswer}>{answers[2]}</div>
              <div className='answer' onClick={checkAnswer}>{answers[3]}</div>
            </div>
            <div className='countdown'>{question + 1}/20</div>
            <button onClick={nextQuestion}>다음</button>
            
          </>
        }

      </Quiz> 
  )
}

const Quiz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 210px);
  color: ${props => props.theme.text};
  
  .question {
    font-size: 1.6rem;
    margin-bottom: 3rem;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    width: 100%;

    .front-text {
      display: flex;
      justify-content: center;
      align-items: center; 
    }

    .answer-box {
      display: inline-block;
      text-align: center;
      align-items: center;
      border: 1px solid #ccc;
      width: 100px;
      height: 40px;
      margin: 0 8px;
      color: ${props => props.theme.title};
    }
  }

  .answers {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .answer {
    margin: 0 1rem 5rem 1rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid #ccc;

    &:hover {
      color: #F3CD50;
      border-color: #F3CD50;
    }
    
  }

  .circle {
    width: 60px;
    height: 60px;
    margin-bottom: 3rem;  
  }

  .countdown {
    margin: 8px 0;
    font-size: 0.85rem;
  }

  button {
    border: none;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
    background-color: #5CBDE8;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;

    &:hover {
      background-color: #126A91;
    }
  }

`


export default QuizComponent
