import React, { useState } from 'react'

import { 
  interDataDe,
  interDataA,
  interDataCon,
  interDataEn,
  interDataPor,
  interDataEtc
} from '../data/intermediate'

import { PrepTag, ContentContainer } from '../basic/BasicPrepositionTag'


// preposition tag button
const InterPrepositionTag = () => {
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
          setTag('POR')
          e.target.classList.add('tag-active')
        }} className='tagBtn'>POR</p>
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


const ShowContent = ({ tag }) => {
  let prepData;
  
  if(tag === 'A') prepData = interDataA
  if(tag === 'CON') prepData = interDataCon
  if(tag === 'DE') prepData = interDataDe
  if(tag === 'EN') prepData = interDataEn
  if(tag === 'POR') prepData = interDataPor
  if(tag === 'ETC') prepData = interDataEtc
  
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

export default InterPrepositionTag