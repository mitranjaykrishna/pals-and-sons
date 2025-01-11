import React from "react";

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-center min-h-screen pt-[118px]  bg-hero-background bg-fixed bg-center bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center gap-8 ">
        <p className="flex flex-col items-center justify-center gap-6 text-[#222222]">
          <span className="text-6xl font-bold ">Pal's And Sons</span>
          <span className="text-5xl font-extralight">PVT. Limited</span>
        </p>
        <hr className="bg-black h-0.5 w-[50px]" />
        <p className="w-2/5 text-[22px] text-center font-light text-[#c1c1c1]">
          We create beautiful animations and mock ups. Make sure to check out
          our portfolio and get in touch if you want to work together.
        </p>
      </div>
      <div className="absolute bottom-[-185px] left-[-.8%] w-[110%] h-[250px] content-[''] bg-[#f8f8f8] shadow-[0_-44px_30px_0_rgba(0,0,0,.1)] transform rotate-[5deg] transition-transform duration-500"></div>
    </div>
  );
}
