import React from 'react'

import '../Styles/Header.css'




function Header() {
  return (
    <nav className='nav'>
        <div className='logo'>
            <img className='img-logo' src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456' alt="" />
            <img className='logo2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/564px-Netflix_2015_N_logo.svg.png" alt=''></img>
        </div>
    </nav>
  )
}

export default Header