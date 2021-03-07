import React from 'react'
import pdf from '../imgs/pdf-small.png'
import MainBtn from './MainBtn'
import styled from 'styled-components'

const TopDownloadBar = ({ extraDesc, enlace }) => {
  return (
    <TopBar>
      <div className='max-width-container container-wrap tablet-size'>
        <div className='topbar-content flex-align-c'>
          <div className='download-pdf'>
            <p>이 문서를 PDF 파일로 다운로드</p>
            <span>{extraDesc}</span>
          </div>
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
  display: flex;
  justify-content: center;
  align-items: center;

  .container-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .topbar-content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .download-pdf {
    margin-right: 2rem;

    p {
      font-weight: 700;
      color: #f85050;
    }
  
    span {
      font-size: 0.85rem;
      color: ${props => props.theme.text};
    }

  }

  img {
    width: 40px;
    height: 40px;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 1195px) {
    .tablet-size {
      padding: 0 40px;
    }
  }

  @media (max-width: 479px) {
    .topbar-content {
      justify-content: space-between;
    }

    .download-pdf span {
      display: none;
    }
  }

`

export default TopDownloadBar
