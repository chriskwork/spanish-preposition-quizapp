import React from 'react'
import TopDownloadBar from '../TopDownloadBar'

import { basicDataA } from '../data/basic'

const Basic = () => {
  return (
    <div>
      <TopDownloadBar extraDesc='PDF 파일에는 관련된 표현들이 추가로 더 포함되어 있습니다.' enlace='https://drive.google.com/file/d/1J5AQrSrptI0w3D9gjOqdqooNFEKGWvUZ/view?usp=sharing' />
      <PrepositionTag />
      <div className='max-width-container container-padding'>
        
      </div>
    </div>
  )
}

const PrepositionTag = () => {

  const showContent = prepData => {
    return(
      <div>
          {
            prepData.map(data => {
              return (<div>
                <h4>{data.title}</h4>
                <div>{data.means}</div>
                {data.example.map(ex => {
                  return(<div>
                    <div>{ex.ex}</div>
                    <div>{ex.exMean}</div>
                  </div>)
                })}
                <div>{data.example.ex}</div>
                <div>{data.example.exMean}</div>
                <div>{data.tip ? data.tip.split('\n').map(str => <p>{str}</p>) : ''}</div>
              </div>)
            })
          }
      </div>
    )
  }
  return(
    <div>
      <div>
        <p>A</p>
        <p>CON</p>
        <p>DE</p>
        <p>EN</p>
        <p>HASTA</p>
        <p>PARA</p>
        <p>POR</p>
        <p>SEGUN, SIN</p>
        <p>SOBRE</p>
        <p>ETC</p>
      </div>
      <div>
        {showContent(basicDataA)}
      </div>
    </div>
  )
}



export default Basic
