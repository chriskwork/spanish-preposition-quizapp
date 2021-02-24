import React from 'react'
import styled from 'styled-components'

const Donation = () => {
  return (
    <DonationStyle className='max-width-container container-padding'>

      <div className='donation-header'>
        <p className='donate-heading'>Invítame a un café! <span>☕</span></p>
        <br />
        <p>
          스페인어를 배우시려는 분들, 독학하시는 분들에게 도움이 되고 싶습니다.<br />
          계속해서 좋은 자료를 공유해 나갈 수 있도록 도와주세요.
        </p>
      </div>

      <div className='donate-method'>
        <div>
          <p>페이팔</p>
          {/* paypar donate button */}
          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="Q87U3M65FZ2N6" />
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="페이팔로 기부" alt="Donate with PayPal button" />
            <img alt="" border="0" src="https://www.paypal.com/en_ES/i/scr/pixel.gif" width="1" height="1" />
          </form>
          {/* paypar donate button ends */}
        </div>
      </div>

    </DonationStyle>
  )
}

const DonationStyle = styled.div`
  text-align: center;
  * > p {
    color: ${props => props.theme.text};
  }
  
  .donation-header {
    margin-bottom: 2rem;

    span {
      font-size: 1.5rem;
    }
  }

  .donate-heading {
    font-size: 2rem;
    color: ${props => props.theme.title};
    font-weight: 700;
  }

  .donate-method {
    display: flex;
    justify-content: center;
    align-items: center;

     p { margin-bottom: 4px; }
  }
`

export default Donation
