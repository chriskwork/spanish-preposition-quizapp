import React from 'react'
import styled from 'styled-components'
import { CheckCircle, XCircle, HelpCircle } from 'react-feather'

const BasicQuiz = () => {
  
  // 30개 객관식으로
  return (
    <Quiz className='max-width-container container-padding'>
        
        {/* <div className='circle'><CheckCircle size={56} color={'#00cf00'} /></div>
        <div className='circle'><XCircle size={56} color={'#e94444'} /></div> */}
        <div className='circle'><HelpCircle size={56} color={'#acacac'} /></div>
        <div className='question'>Lorem ipsum dolor <div className='answer-box'>&nbsp;</div> amet.?</div>
        <div className='answers'>
          <div className='answer'>answer1</div>
          <div className='answer'>answer2</div>
          <div className='answer'>answer3</div>
          <div className='answer'>answer4</div>
        </div>
        
    </Quiz>
  )
}

const Quiz = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  min-height: calc(100vh - 210px);
  color: ${props => props.theme.text};
  
  .question {
    font-size: 1.6rem;
    color: ${props => props.theme.title};
    margin-bottom: 3rem;

    .answer-box {
      display: inline-block;
      border: 1px solid #ccc;
      width: 80px;
      height: 40px;
      margin: 0 8px;
    }
  }

  .answers {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .answer {
    margin: 0 1rem;
    cursor: pointer;
    padding: 0.5rem 1rem;
    

    &:hover {
      color: #F3CD50;
    }
  }

  .circle {
    margin-bottom: 3rem;
    opacity: 1;

    
  }

`

export default BasicQuiz
