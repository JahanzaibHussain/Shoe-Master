import React from 'react'
import blue from '../../assets/imgs/blue.png'



function ProductSection() {
    return (
        <div className="container mx-auto flex md:flex-row flex-col justify-center items-center" >
             <div class="mt-32 mb-16">
                <div class="text-4xl text-center text-primary ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit?
                </div>
            </div>
            <div className="card m-2">
                <div className="imgBx"><img src={blue} alt="" /></div>
                <div className="contentBx">
                    <h2>Nike Shoes</h2>
                    <div className="size">
                        <h3>Size :</h3>
                        <span> 7 </span>
                        <span> 8 </span>
                        <span> 9 </span>
                        <span> 10 </span>
                    </div>
                    <div className="color">
                        <h3>Color :</h3>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <a href="/shop" className="add-btn mt-32 border-primary border-2 bg-primary text-secondry text-lg px-4 py-2 rounded">Show</a>
                </div>
            </div>
        </div>
    )
}

export default ProductSection
