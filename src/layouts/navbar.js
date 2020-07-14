import React from 'react'
import '../assets/app.css'

import {Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav className="border-primary border-b-2  bg-secondary-100 w-full flex  p-2 justify-between fixed items-center z-20" >
          <div>
            <Link to="/" className="ml-3 text-4xl text-white font-bold">Shoe<span className="text-primary">Master</span></Link>
          </div>
          <div className="right-0 mx-8 text-white">
            <Link className="px-2 text-lg hover:text-primary cursor-pointer  transition duration-500" to="/">Home</Link>
            <Link className="px-2 text-lg hover:text-primary cursor-pointer  transition duration-500" to="/shop">Shop</Link>
            <Link className="px-2 text-lg hover:text-primary cursor-pointer  transition duration-500" to="/contact">Contact</Link>
          </div>
        </nav>

    )
}

export default Navbar
