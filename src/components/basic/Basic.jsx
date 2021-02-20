import React, { useState } from 'react'
import TopDownloadBar from '../TopDownloadBar'
import styled from 'styled-components'

import { 
  basicDataA, 
  basicDataCon, 
  basicDataDe,
  basicDataEn,
  basicDataPor,
  basicDataSegunAndSin,
  basicDataSobre,
  basicDataEtc,
  basicDataHasta,
  basicDataPara
} from '../data/basic'

// render page
const Basic = () => {

  return (
    <div>
      <TopDownloadBar extraDesc='PDF 파일에는 관련된 표현들이 추가로 더 포함되어 있습니다.' enlace='https://drive.google.com/file/d/1J5AQrSrptI0w3D9gjOqdqooNFEKGWvUZ/view?usp=sharing' />
      <PrepositionTag />
    </div>
  )
}

// preposition tag button
const PrepositionTag = () => {
  const [tag, setTag] = useState('A')
  const [active, setActive] = useState(true)

  const activateTag = () => {
    const tagList = document.querySelectorAll('.tagBtn')
    
    tagList.forEach(list => {
      list.classList.remove('tag-active')
    })

    setActive(false)
  }

  return(
    <div className='max-width-container'>
      {/* FIXME: need refactoring */}
      <PrepTag>
        <p onClick={(e) => {
          activateTag()
          setTag('A')
          e.target.classList.add('tag-active')
        }} className={`tagBtn ${active && 'tag-active'}`}>A</p>
        <p onClick={(e) => {
          activateTag()
          setTag('CON')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>CON</p>
        <p onClick={(e) => {
          activateTag()
          setTag('DE')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>DE</p>
        <p onClick={(e) => {
          activateTag()
          setTag('EN')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>EN</p>
        <p onClick={(e) => {
          activateTag()
          setTag('HASTA')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>HASTA</p>
        <p onClick={(e) => {
          activateTag()
          setTag('PARA')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>PARA</p>
        <p onClick={(e) => {
          activateTag()
          setTag('POR')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>POR</p>
        <p onClick={(e) => {
          activateTag()
          setTag('SEGUN')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>SEGUN, SIN</p>
        <p onClick={(e) => {
          activateTag()
          setTag('SOBRE')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>SOBRE</p>
        <p onClick={(e) => {
          activateTag()
          setTag('ETC')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>ETC</p>
      </PrepTag>
      
      <ShowContent tag={tag} />

    </div>
  )
}

const PrepTag = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 40px 0;

  p {
    padding: 0.5rem 1.5rem;
    background: #5CBDE8;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #126A91;
    }

    &.tag-active {
      background-color: #126A91;
    }
  }
`

// render content of selected preposition
const ShowContent = ({ tag }) => {
  let prepData;
  
  if(tag === 'A') prepData = basicDataA
  if(tag === 'CON') prepData = basicDataCon
  if(tag === 'DE') prepData = basicDataDe
  if(tag === 'EN') prepData = basicDataEn
  if(tag === 'HASTA') prepData = basicDataHasta
  if(tag === 'PARA') prepData = basicDataPara
  if(tag === 'POR') prepData = basicDataPor
  if(tag === 'SEGUN') prepData = basicDataSegunAndSin
  if(tag === 'SOBRE') prepData = basicDataSobre
  if(tag === 'ETC') prepData = basicDataEtc
  
  return(
    <ContentContainer>
        {
          prepData.map((data, index) => {
            return (
              <div className='docu-container' key={'module'+index} >
                <h4 className='docu-title' key={data.title}>{data.title}</h4>
                <div className='docu-means' key={data.means}>{data.means}</div>
                {data.example.map((ex, i) => {
                  return(<div className='docu-ex-container' key={i+'exam'}>
                    <div className='docu-ex' key={ex.ex}>{ex.ex}</div>
                    <div className='docu-ex-means' key={ex.exMean}>{ex.exMean}</div>
                  </div>)
                })}
                
                {data.tip ? <div className='docu-tip' key={data.tip}>
                  {
                    data.tip.split('\n').map(str => 
                      <p key={'tip'+str+ Math.floor(Math.random() * 10000 + 1)}>
                        {str}
                      </p>)
                  }
                </div> : null }
                
              </div>
            )
          })
        }
    </ContentContainer>
  )
}

const ContentContainer = styled.div`
  color: ${props => props.theme.text};

  .docu-container { margin-bottom: 2rem; }

  h4.docu-title {
    color: ${props => props.theme.title};
    margin-bottom: 0.5rem;
  }

  .docu-means { margin-bottom: 1rem; }

  .docu-ex-container { margin-bottom: 1rem; }

  .docu-tip {
    font-size: 0.85rem;
    background-color: ${props => props.theme.graySection};
    padding: 1rem;
  }
`

export default Basic
