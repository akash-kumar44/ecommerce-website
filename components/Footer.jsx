import React from 'react'
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2022 Supherb All rights reserved</p>
      <p className="icons logo">
        <a href="https://www.instagram.com/akash_daanav_/"><AiFillInstagram /></a>
        <a href="https://twitter.com/akash_bhumbak"><AiOutlineTwitter/></a>
      </p>
    </div>

  )
}

export default Footer