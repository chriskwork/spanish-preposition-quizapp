import React from 'react'
import { Star, Info } from 'react-feather'
import styled from 'styled-components'
import LevelCard from './LevelCard'

// landing content COMPONENT
// Section 1
const LandingContent = () => {
  
  return (
    <div>
      <SectionOne className='max-width-container container-padding' id='start-quiz'>
        <div className='margin-bottom'>
          <h2><Star className='translateY' /> 시작하기 전에</h2>
          <p>이 앱은 스페인어를 독학하시는 초중급 분들이 전치사를 확실히 배우고 사용할 수 있게끔 디자인되었습니다.<br />
          각 전치사들의 쓰임에 대해 공부하시려면 왼쪽 카드를,
          특정 동사 뒤에 자주 따라오는 전치사에 대해 공부하시려면 오른쪽 카드를 클릭해 주세요.</p>
        </div>
      <LevelCard />
      </SectionOne>
      <SectionTwo />
    </div>
  )
}

const SectionOne = styled.section`
    color: ${props => props.theme.text};

    .margin-bottom {
      margin-bottom: 60px;
    }

    h2 {
      color: ${props => props.theme.title}
    }

    .translateY {
      transform: translateY(3px);
    }

    @media (max-width: 959px) {
      text-align: center;
    }
  `

// Section 2
const SectionTwo = () => {
  
  return(
    <Section2 className='container-padding'>
      <div className='max-width-container'>
        <h2><Info className='translateY' /> 잘못된 부분이 있나요?</h2>
          <p>피드백은 언제나 환영합니다! (기부도 언제나 환영합니다 😁)<br />
            잘못된 부분을 발견하셨거나 궁금한 점이 있으시다면 <a href='https://www.youtube.com/watch?v=TDVqeZHO04Q' target='_blank' rel='noreferrer'>'여기'</a>에 댓글로 남겨주세요!
            
          </p>
      </div>
    </Section2>
  )
}

const Section2 = styled.section`
    background-color: ${preps => preps.theme.graySection};
    color: ${props => props.theme.text};

    h2 {
      color: ${props => props.theme.title};
    }
  
    .translateY {
        transform: translateY(3px);
      }

    @media (max-width: 959px) {
      text-align: center;
    }
  `

export default LandingContent
