import React from "react"
import Vector from "../assets/Vector.png"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className="hero-container relative leading-[16]" style={{ width: '751px', height: '472px' }}>
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-500 inline-flex flex-col items-start gap-2 justify-start top-2"> {/* Adjusted top value */}
          Imagine with <span className="block">Serendipity</span>
        </h1>
        <div className="relative leading-[24px] text-gray-200 inline-block w-[565px] text-left text-[15px] font-h p-4 font-normal">
          <p className="font-inter">
            Discover a vibrant community of creators on Serendipity! Connect with thousands of like-minded individuals
            on Discord or the web and unleash your imagination through collaborative storytelling. From vivid worlds to unforgettable characters,
            bring your short text descriptions to life in new and exciting ways. Join Serendipity today and embark on a journey of endless creativity!
          </p>
        
        <div className="relative w-[204px] h-12 text-center top-10">
          <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gradient-conic from-violet-700 to-fuchsia-500 blur-[34px] w-[204px] h-12" />
          <div className="absolute top-[0px] left-[0px] w-[204px] h-12">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gradient-conic from-violet-700 to-fuchsia-500 blur-[34px]" />
              <div className="absolute cursor-pointer rounded-lg h-[95.83%] w-[98.53%] top-[2.08%] right-[0.74%] bottom-[2.08%] left-[0.74%] bg-gradient-linear-and-radial shadow-[0px_-1px_8px_#9375b6_inset,_0px_0px_5px_#fface4_inset,_0px_30px_30px_rgba(0,_0,_0,_0.4)] overflow-hidden flex flex-row py-3.5 px-[26px] box-border items-center justify-start gap-2">
                <img
                  className="relative w-[18px] h-[18px]"
                  alt=""
                  src={Vector}
                />
                <div className="relative leading-[23px] text-shadow-[0px_10px_20px_rgba(0,_0,_0,_0.25)] text-gray-300">
                  Generate Story
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
