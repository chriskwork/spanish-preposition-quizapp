import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom'

const MainBtn = ({ btnText }) => {
  return (
    // <Link to='start-quiz' smooth={true} duration={500}><Button>퀴즈 시작하기</Button></Link>
    <Link to='/start-quiz'><Button>{btnText}</Button></Link>
  )
}

const Button = styled.button`
  width: 200px;
  height: 48px;
  background-color: #F3CD50;
  color: #101010;
  cursor: pointer;
  border: none;
  border-radius: 50px;

  &:hover {
    background-color: #e6bf3f;
  }
`

export default MainBtn
