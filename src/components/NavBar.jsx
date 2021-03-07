import React, { useContext, useState } from 'react'
import LOGO from '../imgs/logoCup.png'
import { Sun, Moon, Menu, X } from 'react-feather'
import styled from 'styled-components'
import { ThemeContext, ThemeSwitch } from '../themeStyles/ThemeContainer'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
  const currentTheme = useContext(ThemeContext)
  const themeSwitch = useContext(ThemeSwitch)
  const [ barMenu, setBarMenu ] = useState(false)

  const handleHamburgerMenu = () => {
    setBarMenu(!barMenu)
  }

  const mobileNavLinkClick = () => {
    setBarMenu(false)
  }

  return (
    // Navigation bar
    <NavStyle id='top'>
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

        {/* hamburger menu */}
        <div className='mobile-menu' onClick={handleHamburgerMenu}>
          { barMenu ? <X color={'#fff'} /> : <Menu color={'#fff'} /> }
        </div>

        {/* mobile menu popup */}
        <div className={ `nav-links-mobile ${barMenu ? 'nav-links-mobile-show' : ''}` }>
          <NavLink to='/basic-prepositions' 
            activeClassName='active' 
            className='mobile-link' 
            onClick={mobileNavLinkClick}>
            전치사 기초
          </NavLink>
          <NavLink to='/intermediate-prepositions'
            activeClassName='active' 
            className='mobile-link' 
            onClick={mobileNavLinkClick}>
            동사+전치사
          </NavLink>
          <NavLink to='/start-quiz' 
          activeClassName='active' 
          className='mobile-link'
          onClick={mobileNavLinkClick}>
            퀴즈
          </NavLink>
          <NavLink to='/donation' 
          activeClassName='active' 
          className='mobile-link'
          onClick={mobileNavLinkClick}>
            기부
          </NavLink>
          {
            currentTheme.theme === 'light' ? 
            <div className='mobile-link-theme'><Moon onClick={themeSwitch} /></div> :
            <div className='mobile-link-theme'><Sun onClick={themeSwitch} /></div>
          }
        </div>


      </div>
        
    </NavStyle>
  )
}

const NavStyle = styled.nav`
  background-color: ${props => props.theme.nav};
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  img {
    width: 70px;
    height: 70px;

    @media (max-width: 479px) {
      width: 60px;
      height: 60px;
    }
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

  .mobile-menu {
    width: 24px;
    height: 24px;
    display: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .nav-links-mobile {
    display: none;
  }

  @media (max-width: 959px) {

    .nav-links {
      display: none;
    }

    .mobile-menu {
      display: flex;

    }

    .nav-links-mobile {
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background-color: ${props => props.theme.background};
      z-index: 999;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
      opacity: 0;
      pointer-events: none;
      transition: opacity 250ms;

      &.nav-links-mobile-show {
        opacity: 1;
        pointer-events: visible;
      }

      .mobile-link, .mobile-link-theme {
        width: 100%;
        text-align: center;
        padding: 2.5rem 0;
        color: ${props => props.theme.text};
        border-bottom: 1px solid ${props => props.theme.navBorder};

        &:hover {
          /* color: #F3CD50; */
          background-color: ${props => props.theme.navBorderHover};
        }
      }

      .mobile-link-theme {
        cursor: pointer;
        color: ${props => props.theme.text};
      }

      svg {
        width: 100%;
        
      }
    }
}

`

export default NavBar
