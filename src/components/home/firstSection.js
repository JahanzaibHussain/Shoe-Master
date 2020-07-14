import React from 'react'
import blackImg from '../../assets/imgs/black.png'
import orangeImg from '../../assets/imgs/orange.png'

function FirstSection() {
    return (
        <div>
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <div className="w-1/2  items-center">
                        <div className="border-primary border-0 sm:pr-8 sm:border-r-2">
                        <div className="text-4xl text-center sm:text-right text-primary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit?
                        </div>
                        </div>          
                    </div>
                    <div className="w-1/2">
                        <div className="flex items-center rounded-full w-64 w-24 min-w-0 mt-12 mx-auto h-64 bg-gray-900">
                        <div className="">
                            <img className="img-bx" src={blackImg} alt="" />
                        </div> 
                        </div>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-between items-center">
                    <div className="w-1/2  items-center">
                        <div className="border-primary border-0 sm:pr-8 sm:border-r-2">
                        <div className="text-4xl text-center sm:text-right text-primary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit?
                        </div>
                        </div>          
                    </div>
                    <div className="w-1/2">
                        <div className="flex items-center rounded-full w-64 w-24 min-w-0 mt-12 mx-auto h-64 bg-orange-900">
                        <div className="">
                            <img className="img-bx" src={orangeImg} alt="" />
                        </div> 
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default FirstSection
