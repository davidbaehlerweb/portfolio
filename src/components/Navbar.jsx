import React from 'react'
import Logo from './Logo';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <Logo/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"><FaLinkedin/></a>
            <a href="https://github.com/davidbaehlerweb/"><FaGithub/></a>
            
        </div>
    </nav>
  )
}

export default Navbar
