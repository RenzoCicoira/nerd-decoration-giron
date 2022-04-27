import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logoAlienND.jpg'
import { ImGithub } from 'react-icons/im'

const Footer = () => {
  return (
    <footer className="flex bg-nav p-2 justify-between items-center">
      <Link to="/"><img src={logo} alt="logo" className="w-14"/></Link>
      <p className='text-white text-base pt-2'>Powered by Renzo Cicoira</p>
      <div className='text-white text-xl'>
        <a target="_blank" rel="noopener noreferrer" className='text-white text-4xl' href='https://github.com/RenzoCicoira'>
          <ImGithub />
        </a>
      </div>
    </footer>
  )
}

export default Footer