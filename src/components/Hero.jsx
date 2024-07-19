import React from "react";

export const Hero = ({ scrollToSection }) => {
  return (
    <div className="hero w-full bg-gradient-to-b from-[#0E0939] to-[#2B20A0]">
      <div className="content md:flex lg:justify-between w-[85%] mx-auto font-poppins">
        <div className="main-title md:w-[40%]">
          <h1 className="w-1/2 pt-24 md:pt-32 text-[15vw] leading-[5rem] md:text-[10vw] text-white font-poppins font-extrabold md:leading-[6rem] lg:leading-[8rem]">
            Yair <span className="text-[#5C51D6]">Ken</span>
          </h1>
          <div className="md:hidden introduction border-black">
            <p className="text-white text-[24px] md:text-right pt-8">
            I am a skilled developer with expertise in development, deployment, and maintenance of websites. I thrive in collaborative environments and am eager to join a dynamic team.
            </p>
          </div>
          <button
            onClick={() => scrollToSection("Projects")}
            className="my-8 transition border-2 font-normal rounded-full text-white text-[20px] px-6 py-1 md:my-14 hover:bg-[#5C51D6]"
          >
            My Work
          </button>
        </div>
        <div className="hidden md:block introduction w-[55%]">
          <p className="text-white mt-64 text-[24px] text-right">
          I am a skilled developer with expertise in development, deployment, and maintenance of websites. I thrive in collaborative environments and am eager to join a dynamic team.
          </p>
        </div>
      </div>
      <div className="seperator"></div>
    </div>
  );
};