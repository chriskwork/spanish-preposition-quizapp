import React from 'react'
import pdf from '../imgs/pdf-small.png'
import MainBtn from './MainBtn'
import styled from 'styled-components'

const TopDownloadBar = ({ extraDesc, enlace }) => {
  return (
    <TopBar>
      <div className='max-width-container flex-between tablet-size'>
        <div className='topbar-content flex-align-c'>
          <p>이 문서를 PDF 파일로 다운로드</p>&nbsp;&nbsp;&nbsp;
          <span>{extraDesc}</span>
          &nbsp;&nbsp;&nbsp;
          <a href={enlace} target='_blank' rel='noreferrer'><img src={pdf} alt='' /></a>
        </div>
        <MainBtn btnText='퀴즈 시작하기' />
      </div>
    </TopBar>
  )
}

const TopBar = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${props => props.theme.graySection};

  div {
    height: 100%;
  }

  p {
    font-weight: 700;
    color: #f85050;
  }

  span {
    font-size: 0.85rem;
    color: ${props => props.theme.text};
  }

  img {
    width: 40px;
    height: 40px;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 960px) and (max-width: 1195px) {
    .tablet-size {
      padding: 0 40px;
    }
  }

`

export default TopDownloadBar
