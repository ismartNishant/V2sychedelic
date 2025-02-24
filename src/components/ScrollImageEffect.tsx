"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageEffect = () => {
  return (
    <section className="transition-colors duration-500 overflow-x-hidden relative w-full h-full">
      {/* Main Slide Section */}
      <div className="slide-1 h-[100dvh] overflow-hidden px-4 pt-4 md:px-5 md:pt-5 relative bg-black">

        {/* Dotted Background Image */}
        <Image
          src="/img/bgs/dottedbg.svg"
          alt="bg1"
          width={800}
          height={800}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 z-0"
        />

        {/* Top Header Section */}
        <div className="w-full flex justify-between items-center text-white pb-4 md:pb-5 xl:hidden relative z-10">
          <h1 className="text-2xl sm:text-3xl font-Psychedelic">Sychedelic</h1>
          <Image
            src="/img/logoicon.svg"
            alt="logoicon"
            width={100}
            height={100}
            className="h-7 w-7 md:w-10 md:h-10"
          />
          <button className="font-Psychedelic text-xs md:text-lg rounded-full bg-white text-black px-4 py-2 group relative z-10">
            <span className="relative inline-flex overflow-hidden">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                Access exclusive club
              </div>
              <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Access exclusive club
              </div>
            </span>
          </button>
        </div>

        {/* 85% Height Image Section */}
        <div className="h-[85%] relative block w-full rounded-2xl overflow-hidden z-10">
          <Image
            src="/img/bgs/bg1.png"
            alt="bg1"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover"
            priority
          />
        </div>

        {/* Floating Beyond Image */}
        <Image
          src="/img/beyond.svg"
          alt="beyond"
          width={100}
          height={100}
          className="w-full max-w-80 sm:max-w-xl lg:max-w-3xl absolute top-[20%] lg:top-[10%] left-1/2 -translate-x-1/2 transition-opacity duration-500 z-10"
        />

        {/* Human Image */}
        <Image
          alt="human1"
          src="/img/human1.png"
          width={1000}
          height={1000}
          className="w-[250px] left-1/2 translate-x-[-60%] sm:left-1/2 sm:translate-x-[-60%] md:w-[420px] 2xl:w-[550px] absolute -bottom-0 z-20"
          priority
        />

        {/* Human Background */}
        <Image
          src="/img/bgs/humanbg1.png"
          alt="bg-2"
          width={1000}
          height={1000}
          className="w-full max-w-80 md:max-w-xl absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
        />

        {/* 15% Height Content Section */}
        <div className="text-white w-full h-[15%] relative  justify-between items-center hidden xl:flex z-30">
          <h1 className="text-[68px] font-Psychedelic pl-4">Sychedelic</h1>
          <Image
            src="/img/logoicon.svg"
            alt="logoicon"
            width={100}
            height={100}
            className="w-12 h-12 absolute left-[48%] bottom-6 z-10"
          />
          <button className="font-Psychedelic text-3xl rounded-full bg-white text-black px-6 py-3 group relative z-10">
            <span className="relative inline-flex overflow-hidden">
              <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                Access exclusive club
              </div>
              <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                Access exclusive club
              </div>
            </span>
          </button>
        </div>
      </div>

      {/* Inner Slide 2 */}
      <div className="inner-slide-2 relative w-full h-[100dvh]">
        <button className="absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000] transition-all duration-300">
          <span className="text-content">Amplify your Life</span>
        </button>
        <Image
          alt="star1"
          src="/img/star1.svg"
          width={100}
          height={100}
          className="star1  w-12 md:w-14  left-[5%] md:left-[20%] top-[40%] absolute xl:left-[30%]"
        />
        <Image
          alt="star2"
          src="/img/star2.svg"
          width={100}
          height={100}
          className="star2 w-20 top-[20%] absolute left-[65%]"
        />
        <Image
          alt="star3"
          src="/img/star1.svg"
          width={100}
          height={100}
          className="star3 w-10 top-[65%] absolute left-[62%]"
        />
      </div>
    </section>


  );
};

export default ScrollImageEffect;
