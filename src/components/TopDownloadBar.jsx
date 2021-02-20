import React from 'react'
import pdf from '../imgs/pdf-small.png'
import MainBtn from './MainBtn'
import styled from 'styled-components'

const TopDownloadBar = ({ extraDesc, enlace }) => {
  return (
    <TopBar>
      <div className='max-width-container flex-between'>
        <div className='topbar-content flex-align-c'>
          <p>이 문서를 PDF 파일로 다운로드</p>&nbsp;&nbsp;&nbsp;
          <span>{extraDesc}</span>
          &nbsp;&nbsp;&nbsp;
          <a href={enlace} target='_blank' rel='noreferrer'><img src={pdf} alt='' /></a>
        </div>
        <MainBtn />
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
    color: #126A91;
  }

  span {
    font-size: 0.85rem;
  }

  img {
    width: 40px;
    height: 40px;

    &:hover {
      transform: scale(1.1);
    }
  }

`

export default TopDownloadBar
