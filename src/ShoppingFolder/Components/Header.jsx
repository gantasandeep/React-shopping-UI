import React from 'react'

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
            <div className="title">
                <h2>Shopping Mall</h2>
            </div>
        </div>
        <div className="center">
            <ul>
                <li><a href=''>Women</a></li>
                <li><a href="">Men</a></li>
                <li><a href="">Children</a></li>
                <li><a href="">Beauty</a></li>
            </ul>
        </div>
        <div className="search">
            <input type="text" placeholder='search' />
        </div>
        <div className="right">
            <div className="signin">
                <a href=''>Signin/Signup</a>
            </div>
            
            <div className="cart">
                <a href=''>Cart</a>
            </div>
        </div>
      
    </div>
  )
}

export default Header
