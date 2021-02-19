import React from 'react'
import TopDownloadBar from '../TopDownloadBar'

import { basicDataA } from '../data/basic'

const Basic = () => {
  return (
    <div>
      <TopDownloadBar enlace='https://drive.google.com/file/d/1J5AQrSrptI0w3D9gjOqdqooNFEKGWvUZ/view?usp=sharing' />
      <PrepositionTag />
      <div className='max-width-container container-padding'>
        <h2>A</h2>
        {
          basicDataA.map(data => {
            return (<div>
              <h4>{data.title}</h4>
              <p>{data.means}</p>
              {data.example.map(ex => {
                return(<div>
                  <p>{ex.ex}</p>
                  <p>{ex.exMean}</p>
                </div>)
              })}
              <p>{data.example.ex}</p>
              <p>{data.example.exMean}</p>
              <p>{data.tip ? data.tip.split('\n').map(str => <p>{str}</p>) : ''}</p>
            </div>)
          })
        }
      </div>
    </div>
  )
}

const PrepositionTag = () => {
  return(
    <div>
      prep tags
    </div>
  )
}

export default Basic
