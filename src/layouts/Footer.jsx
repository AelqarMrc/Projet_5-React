import React from 'react'
import KasaFooter from '../Kasa-Footer.png'
import KasaFooter2 from '../FooterMobile.png'

export default function Footer() {
  return (
    <footer>
      <img src={KasaFooter} alt="Footer" />
      <img className='footer-mobile' src={KasaFooter2} alt="Footer" />
    </footer>
  )
}
