import React from 'react'
import styled from 'styled-components'
import LevelCard from '../components/landing-sections/LevelCard'

const StartQuiz = () => {
  return (
    <Section className='container-padding'>
      <div className='max-width-container'>
        <Title>레벨을 선택하세요.</Title>
        <LevelCard />
      </div>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  min-height: calc(100vh - 210px);
`

const Title = styled.p`
  text-align: center;
  color: ${preps => preps.theme.title};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 80px;
`

export default StartQuiz
