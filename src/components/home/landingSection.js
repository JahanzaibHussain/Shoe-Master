import React from 'react'
import mainImg from '../../assets/imgs/shoe1.png'
import '../../assets/app.css'

function LandingSection() {
    return (
        <header className="relative h-screen w-full">
            <div className="absolute w-full h-screen">
                <svg
                    className="w-full h-screen"
                    viewBox="0 0 1727.272 1029.494"
                    preserveAspectRatio="none"
                >
                    <defs>
                    <linearGradient
                        id="a"
                        x1="1.031"
                        y1="1.62"
                        x2="0.075"
                        y2="0.119"
                        gradientUnits="objectBoundingBox"
                    >
                        <stop offset="0" stopColor="#212121" />
                        <stop offset="1" stopColor="#df9210" />
                    </linearGradient>
                    </defs>
                    <path
                    className="a"
                    d="M3989,1265V2294.494s481.415-206.14,902.373-93.676,824.9,0,824.9,0V1265Z"
                    transform="translate(-3989 -1265)"
                    />
                </svg>
            </div>

            <div className="w-full h-full flex lg:flex-row flex-col justify-center items-center">
                <div className="w-6/12 flex flex-col justify-center">
                    <h1
                    className="p-4 w-full px-4 lg:text-5xl text-xl text-gray-200 font-bold mt-6 ml-4 z-10"
                    >
                    Life is short, your heels shouldn't be!          
                    </h1>
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Button
                    </button>
                </div>
                <div className="w-6/12 flex flex-col justify-center">
                    <img
                    src={mainImg}
                    width="90%"
                    alt=""
                    style={{transform: "rotate(-20deg)"}}
                    />
                </div>
            </div>
    </header>
    )
}

export default LandingSection
