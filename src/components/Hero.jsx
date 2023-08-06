import React from "react";
import Vector from "../assets/Vector.png"

const Hero = () => {
    return (
      <section className={`relative w-full h-screen mx-auto`}>
          <div className="hero-container relative leading-[20]" style={{ width: '751px', height: '472px' }}>
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-500 inline-flex flex-col items-start gap-30 justify-start">
              Imagine with <span className="block">Serendipity</span> 
            </h1>
            <div className="relative leading-[24px] text-gray-200 inline-block w-[565px] text-left  justify-end gap-[40px] text-[15px] font-h p-4 font-normal">
              <p className=" font-inter  ">
                Discover a vibrant community of creators on Serendipity! Connect with thousands of like-minded individuals 
                on Discord or the web and unleash your imagination through collaborative storytelling. From vivid worlds to unforgettable characters,
                bring your short text descriptions to life in new and exciting ways. Join Serendipity today and embark on a journey of endless creativity!
              </p>
            
            <div className="relative w-[204px] h-12 text-center top-20">
             <div className="absolute top-[0px] left-[0px] rounded-3xs [background:conic-gradient(from_180deg_at_50%_50%,_#5137ae_-40.48deg,_#6c35af_107.08deg,_#cc75db_177.49deg,_#5137ae_319.52deg,_#6c35af_467.08deg)] [filter:blur(34px)] w-[204px] h-12" />
               <div className="absolute top-[0px] left-[0px] w-[204px] h-12">
                 <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] ">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs [background:conic-gradient(from_180deg_at_50%_50%,_#5137ae_-40.48deg,_#6c35af_107.08deg,_#cc75db_177.49deg,_#5137ae_319.52deg,_#6c35af_467.08deg)] [filter:blur(34px)]" />
                    <div className="absolute cursor-pointer rounded-lg h-[95.83%] w-[98.53%] top-[2.08%] right-[0.74%] bottom-[2.08%] left-[0.74%]  [background:linear-gradient(180deg,_rgba(254,_200,_241,_0.9),_rgba(254,_200,_241,_0)_40.39%),_radial-gradient(50%_50%_at_50%_50%,_#602ea6,_#c977d6)] shadow-[0px_-1px_8px_#9375b6_inset,_0px_0px_5px_#fface4_inset,_0px_30px_30px_rgba(0,_0,_0,_0.4)] overflow-hidden flex flex-row py-3.5 px-[26px] box-border items-center justify-start gap-[10px]">
                     <img
                      className="relative w-[18px] h-[18px]"
                      alt=""
                      src={Vector}
                    />
                    
               <div className="relative leading-[23px] [text-shadow:0px_10px_20px_rgba(0,_0,_0,_0.25)] text-gray-300 ">
                Generate Story
               </div>
              </div>
             </div>
           </div>
          </div>
       </div>
    </div>
          
      </section>
    );
  };
  
  export default Hero;