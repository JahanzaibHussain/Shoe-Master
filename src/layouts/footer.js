import React from 'react'
import {Link} from 'react-router-dom'


function Footer() {
    return (
        <footer class="mt-6 border-primary border-t-2 border-b-2 pb-6">
            <div class="flex flex-col md:flex-row items-center">
                <div class="w-full px-3  text-center md:text-left" >
                <div class="">
                    <Link to="/" class="ml-3 text-4xl text-white font-bold">Shoe<span class="text-primary">Master</span></Link>
                </div>
                <p class="text-white ml-3 mt-1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </p>
                </div>
                <div class="w-full pt-6 text-center flex justify-center">
                <ul class="text-white">
                    <li> <Link class="hover:text-primary  transition duration-500 " to="/"> Home </Link> </li>
                    <li> <Link class="hover:text-primary  transition duration-500 " to="/shop">  Shop</Link> </li>
                    <li> <Link class="hover:text-primary  transition duration-500 " to="/contact">  Contact</Link> </li>
                </ul>
                </div>
                <div class="w-full pt-6 text-center md:text-right flex md:flex-row justify-center items-center">
                <ul class="text-white">
                    <li><Link class="hover:text-primary transition duration-500 " to="#">  m.jahanzaibhussain@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i></Link></li>
                    <li><Link class="hover:text-primary  transition duration-500 " to="#"> youtube <i class="fa fa-youtube-play" aria-hidden="true"></i></Link></li>
                    <li><Link class="hover:text-primary  transition duration-500 " to="#">  jahanzaibhussain <i class="fa fa-github" aria-hidden="true"></i></Link></li>
                </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
