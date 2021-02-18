import React, { useContext } from 'react'
import LOGO from '../imgs/logoCup.png'
import { Sun, Moon } from 'react-feather'
import styled from 'styled-components'
import { ThemeContext, ThemeSwitch } from '../themeStyles/ThemeContainer'
import { NavLink, Link } from 'react-router-dom'


const NavBar = () => {
  const currentTheme = useContext(ThemeContext)
  const themeSwitch = useContext(ThemeSwitch)
  
  return (
    // Navigation bar
    <Nav id='top'>
      <div className='max-width-container nav-container'>
          <Link to='/'><img src={LOGO} alt="로고" /></Link>
        <div className='nav-links'>
          <NavLink to='/basic-prepositions' activeClassName='active'>전치사 기초</NavLink>
          <NavLink to='/intermediate-prepositions' activeClassName='active'>동사+전치사</NavLink>
          <NavLink to='/start-quiz' activeClassName='active'>퀴즈</NavLink>
          <NavLink to='/donation' activeClassName='active'>기부</NavLink>
          {
            currentTheme.theme === 'light' ? <Moon onClick={themeSwitch} />
            : <Sun onClick={themeSwitch} />
          }
        </div>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  background-color: ${props => props.theme.nav};
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70px;
    height: 70px;
  }

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      cursor: pointer;
      color: #f1f1f1;
      padding: 0.5rem 1.5rem;
      
      &:hover, &.active {
        color: #F3CD50;
      }

    }

    svg {
      cursor: pointer;
      color: ${props => props.theme.text};
      margin-left: 1rem;
    }
  }

`

export default NavBar
