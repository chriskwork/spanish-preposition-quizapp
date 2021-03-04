import React from 'react'
import styled from 'styled-components'
import { ArrowRight } from 'react-feather'
import { Link } from 'react-router-dom'

const LevelCard = () => {
  
  return (
    <LevelCardContainer>
      <Link to='/basic-quiz'><Card level='Básico' desc='a, con, de, por, para 등 전치사의 기본적인 쓰임' /></Link>
      <Link to='/intermediate-quiz'><Card level='Intermedio' desc='이 동사는 어떤 전치사랑 같이 써야 하나요?' /></Link>
  </LevelCardContainer>
  )
}

const LevelCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    @media (max-width: 959px) {
      flex-direction: column;
      gap: 1.5rem;
    }
  `

// level card COMPONENT
const Card = ({ level, desc }) => {
  
  return (
    <CardStyle>
      <h3 className='spanish-text'>{level}</h3>
      <ArrowRight size={48} />
      <p>{desc}</p>
    </CardStyle>
  )
}

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    align-items: center;
    width: 480px;
    height: 200px;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 20px;
    cursor: pointer;

    h3, svg {
      color: ${props => props.theme.title}
    }

    p {
      color: ${props => props.theme.text}
    }

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }

    &:hover svg {
      transform: translateX(10px);
    }

    @media (min-width: 960px) and (max-width: 1195px) {
      width: 360px;
    }
  `

export default LevelCard
