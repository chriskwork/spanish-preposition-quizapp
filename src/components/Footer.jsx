import React from 'react'
import styled from 'styled-components'

const Footer = () => {

  return (
    <FooterStyle>
      <div className='max-width-container footer-content'>
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

const FooterStyle = styled.footer`
    width: 100%;
    height: 140px;
    background-color: #101010;
    color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;

    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

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

    
    @media (max-width: 959px) {
      .footer-content {
        justify-content: center;
        flex-direction: column;
        width: 100%;
      }

      .social-media {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 1rem;
      }

      .social-media a {
        margin-left: 0;
        width: 33.3%;
        text-align: center;
      }
    }
  `

export default Footer
