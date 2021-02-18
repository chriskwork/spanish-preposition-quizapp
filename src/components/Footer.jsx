import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  const FooterStyle = styled.footer`
    width: 100%;
    height: 140px;
    background-color: #101010;
    color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 0.95rem;
      font-weight: 700;
    }

    .social-media a {
      color: #f1f1f1;
      margin-left: 2rem;
      font-size: 0.85rem;

      &:hover {
        color: #F3CD50;
      }
    }
  `

  return (
    <FooterStyle>
      <div className='max-width-container flex-between'>
        <p>카페콘레체</p>
        <div className='social-media'>
          <a href='https://www.youtube.com/channel/UCYZ2YcGbV97dfbBA20QZwrg' target='_blank' rel='noreferrer'>YouTube</a>
          <a href='https://www.instagram.com/coffii__milk/' target='_blank' rel='noreferrer'>instagram</a>
          <a href='https://caconle.blogspot.com/' target='_blank' rel='noreferrer'>blog</a>
        </div>
      </div>
    </FooterStyle>
  )
}

export default Footer
