import React from 'react'
import LOGO from '../imgs/logoCup.png'
import { Moon } from 'react-feather'
import { useTheme, useThemeUpdate } from '../themeStyles/ThemeContext'
import styled from 'styled-components'


const NavBar = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  console.log(darkTheme)

  return (
    <Nav>
      <img src={LOGO} alt="로고"/>
      <div>
        <p>전치사 기초</p>
        <p>동사+전치사</p>
        <p>퀴즈</p>
        <p>기부</p>
        <Moon onClick={toggleTheme} />
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: ${props => props.darkTheme ? '##303030' : '#fff'}
`

export default NavBar
