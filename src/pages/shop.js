import React from 'react'
import mainImg from '../assets/imgs/shoe1.png'
import img1 from '../assets/imgs/black.png'
import img2 from '../assets/imgs/red.png'
import img3 from '../assets/imgs/green.png'
import img4 from '../assets/imgs/blue.png'
import img5 from '../assets/imgs/orange.png'
import img6 from '../assets/imgs/pro1.png'
import img7 from '../assets/imgs/pro2.jpg'
import img8 from '../assets/imgs/pro3.jpg'
import img9 from '../assets/imgs/prop4.jpg'

function Shop() {
    return (
        <>
            <h2 className="text-primary text-center text-4xl ">Products</h2>
            <div class="mx-2 mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">
                    <div class="rounded overflow-hidden">
                        <img class="shop-img w-full" src={mainImg} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">
                    <div class="rounded overflow-hidden">
                        <img class="shop-img w-full" src={img4} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">
                    <div class="rounded overflow-hidden">
                        <img class="shop-img w-full" src={img5} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">  
                    <div class="max-w-sm rounded overflow-hidden">
                        <img class="shop-img w-full" src={img1} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">
                    <div class="max-w-sm rounded overflow-hidden">
                        <img class="shop-img w-full" src={img2} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">
                    <div class="max-w-sm rounded overflow-hidden">
                        <img class="shop-img w-full" src={img3} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">
                    <div class="max-w-sm rounded overflow-hidden">
                        <img class="shop-img w-full" src={img8} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">
                    <div class="max-w-sm rounded overflow-hidden">
                        <img class="shop-img w-full" src={img7} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">
                    <div class="max-w-sm rounded overflow-hidden">
                        <img class="shop-img w-full" src={img7} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="shoe-card bg-secondary-200 rounded mx-2 my-2">
                    <div class="max-w-sm rounded overflow-hidden">
                        <img class="shop-img w-full" src={img6} alt="Sunset in the mountains" />
                        <div class="px-6 py-4 text-primary text-center">
                            <div class="font-bold  text-2xl mb-2">Air Max</div>
                            <p class="text-white text-base">
                                Rs 2300.0
                            </p>
                        </div>
                        <div class="flex pb-4 justify-center">
                            <button className="transition duration-500 border-primary border-2 bg-primary text-secondary-100 text-sm px-8 py-1 rounded hover:border-2 hover:bg-secondary-100 hover:text-primary">
                                Buy 
                            </button>
                        </div>
                    </div>
                </div> 

            </div>
        </>
    )
}

export default Shop
