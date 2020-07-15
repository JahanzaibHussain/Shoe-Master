import React from 'react'

import img1 from '../assets/imgs/black.png'
import img2 from '../assets/imgs/red.png'
import img3 from '../assets/imgs/green.png'
import img4 from '../assets/imgs/blue.png'
import img5 from '../assets/imgs/orange.png'
import img6 from '../assets/imgs/pro1.png'
import img7 from '../assets/imgs/pro2.jpg'
import img8 from '../assets/imgs/pro3.jpg'
import img9 from '../assets/imgs/prop4.jpg'


function Product() {
    return (
        <div className="grid  grid-cols-3 gap-4 my-4 mx-4 ">
              <div class="col-span-1">
                    <img src={img1} alt="Product 1"/>
              </div>
              <div class="col-span-2 p-4 bg-secondary-200 rounded text-white">
                <h2 className="text-primary text-2xl border-primary border-b-2">Air Max</h2>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, atque pariatur, libero sed labore velit doloribus rerum voluptas odio amet, aut nam obcaecati explicabo est numquam iste dolor sunt aliquid.
                </p>

                <button className="mt-2  transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-lg px-4 py-2 rounded  hover:border-2 hover:bg-secondary-100 hover:text-primary">
                  Add to Cart <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
                <button className="mt-2  transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-lg px-4 py-2 rounded  hover:border-2 hover:bg-secondary-100 hover:text-primary">
                  <i className="fa fa-chevron-left" aria-hidden="true"></i> Back 
                </button>
              </div>
        </div> 
    )
}

export default Product
