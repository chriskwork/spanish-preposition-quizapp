import React from 'react'
import TopDownloadBar from '../TopDownloadBar'
import BasicPrepositionTag from './BasicPrepositionTag'


// render page
const Basic = () => {

  return (
    <div>
      <TopDownloadBar extraDesc='PDF 파일에는 관련된 표현들이 추가로 더 포함되어 있습니다.' enlace='https://drive.google.com/file/d/1J5AQrSrptI0w3D9gjOqdqooNFEKGWvUZ/view?usp=sharing' />

      <BasicPrepositionTag />     
    </div>
  )
}


export default Basic
