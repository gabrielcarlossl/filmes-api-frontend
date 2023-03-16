import React from 'react'

import '../Styles/Header.css'

import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className='nav'>
      <div className='logo'>
        <Link to='/'>

          <img className='img-logo' src='https://cdn-icons-png.flaticon.com/512/9709/9709592.png' alt="" />
          <img className='logo2' src="https://cdn-icons-png.flaticon.com/512/9709/9709592.png" alt=''></img>
          
        </Link>
      </div>
      <span className='title'>Filmes em Cartaz</span>
      <div>

        <Link className='favoritos' to='/favoritos'>Meus Filmes</Link>
      </div>
    </nav>
  )
}

export default Header