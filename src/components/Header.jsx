import React from 'react'
import styled from 'styled-components'
import mainDesk from '../imgs/main-desk-rev.svg'
import MainBtn from './MainBtn'

const Header = () => {
  return (
    <HeaderStyle>
      <div className='max-width-container header-content'>
        <Copyright>
          <p className='copyright'>스페인어 전치사<br />마스터하기</p>
          <MainBtn btnText='퀴즈 시작하기' />
        </Copyright>
        <img src={mainDesk} alt='' />
      </div>
    </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
  width: 100%;
  height: 520px;
  /* background-image: radial-gradient(circle, #2283AE 50%, #126A91 100%); */
  background-color: #126A91;
  padding: 20px 0;

  .header-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    height: 100%;

    img {
    width: 600px;
    height: 600px;
    position: absolute;
    top: 0;
    right: 0;
    }
  }

  @media (max-width: 959px) {
    height: 80vh;

    .header-content {
      flex-direction: column-reverse;
      justify-content: center;
      text-align: center;

      img {
        width: auto;
        height: 400px;
        position: relative;
        transform: translateY(-5%);
      }
    }
  }

  @media (max-width: 479px) {
    .header-content {
      img {
        height: 280px;
        min-height: 260px;
      }
    }
  }
`

const Copyright = styled.div`
  width: 100%;

  .copyright {
    font-size: 3rem;
    font-weight: 700;
    color: #f1f1f1;
    margin-bottom: 2rem;

    @media (max-width: 479px) {
      font-size: 2.5rem;
    }

    @media (max-width: 375px) {
      font-size: 2rem;
    }
  }
`

export default Header
