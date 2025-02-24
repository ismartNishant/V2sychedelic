"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ScrollImageEffect = () => {
  const maincontainerRef = useRef<HTMLDivElement>(null);
  

  const bg1Ref = useRef(null);
  const dottedBgRef = useRef(null);
  const beyondRef = useRef(null);
  const humanBgRef = useRef(null);
  const humanRef = useRef(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);
  const s2img1Ref = useRef<HTMLDivElement>(null);
  const s2img2Ref = useRef<HTMLDivElement>(null);
  const s2img3Ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    gsap.set(
      [
        humanBgRef.current,
        dottedBgRef.current,
        buttonRef.current,
        ".star-slide",
        ".goal-slide",
        ".Thoughts-slide",
        ".star1",
        ".amplify-btn",
        ".Goal-btn",
        ".Thoughts-btn",
        ".star2",
        ".star3",
      ],
      { opacity: 0, autoAlpha: 0 }
    );

    gsap.set([img1Ref.current, img2Ref.current, img3Ref.current,s2img1Ref.current, s2img3Ref.current, s2img2Ref.current], {
      opacity: 0,
      scale: 0.5,
      z: "-300dvh",
    });

    // 🌍 **Global Timeline**
    const globalTl = gsap.timeline({
      scrollTrigger: {
        trigger: maincontainerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 3,
        pin: true,
      },
    });

  
    globalTl.to([bg1Ref.current, ".mobile-top-header", ".desktop-bottom-header", beyondRef.current], {
      opacity: 0,
      duration: 0.2,
    }, "-=0.3");

    globalTl.fromTo(
      humanRef.current,
      { y: 0 },
      {
        scale: 0.9,
        y: "6%",
        duration: 0.4,
        stagger: 0.3,
        ease: "power2.inOut",
      },
      "<"
    )

    globalTl.to(".slide-1", {
      backgroundColor: "white"
    }, "-=0.3"); 

    globalTl.to([dottedBgRef.current, humanBgRef.current], { opacity: 1, duration: 0.5, autoAlpha: 1 }, "-=0.5");

   
    const startSlideTl = gsap.timeline();

    startSlideTl
      .fromTo(".amplify-btn", {
        opacity: 0,
        scale: 0.5,
        autoAlpha: 0
      }, {
        opacity: 1,
        scale: 1,
        autoAlpha: 1,
        duration
          : 0.3
      })
      .to(".star-slide", { opacity: 1, duration: 0.3, autoAlpha: 1 }) 
      .to(".amplify-btn", { opacity: 0, duration: 0.3, autoAlpha: 0 }) 

      .to(".star-slide", { opacity: 0, duration: 0.3, autoAlpha: 0 }) 



    globalTl.add(startSlideTl); 


    globalTl.to(".goal-slide", { opacity: 1, duration: 0.3, autoAlpha: 1 }, "-=0.3"); 



    
    const mainTl = gsap.timeline();

    mainTl.fromTo(".Goal-btn",
      { opacity: 0, scale: 0.5, autoAlpha: 0 },
      { opacity: 1, scale: 1, autoAlpha: 1, duration: 0.3 }
    );

    [img1Ref, img2Ref, img3Ref].forEach((ref,) => {
      mainTl.to(
        ref.current,
        {
          opacity: 1,
          duration: 1,
          onUpdate: function () {
            const progress = mainTl.progress();
            const newZ = -100 + 350 * progress;
            ref.current!.style.transform = `translate3d(0px, 0px, ${newZ}vh) scale(${0.5 + 0.5 * progress})`;
            ref.current!.style.zIndex = progress > 0 && progress < 1 ? "60" : "40";
          },
        },
        0
      );
    });

   
    mainTl.to(".Goal-btn", { opacity: 0, duration: 0.3, autoAlpha: 0 }, "+=0.3");

    globalTl.add(mainTl); 

     globalTl.to(".Goal-slide", { opacity: 0, duration: 0.3, autoAlpha: 0 }, "-=0.3"); 

     globalTl.to(".Thoughts-slide", { opacity: 1, duration: 0.3, autoAlpha: 1 }, "-=0.3"); 


    
    const secTl = gsap.timeline();

    mainTl.fromTo(".Thoughts-btn",
      { opacity: 0, scale: 0.5, autoAlpha: 0 },
      { opacity: 1, scale: 1, autoAlpha: 1, duration: 0.3 }
    );

    [s2img1Ref, s2img2Ref, s2img3Ref].forEach((ref,) => {
      secTl.to(
        ref.current,
        {
          opacity: 1,
          duration: 1,
          onUpdate: function () {
            const progress = secTl.progress();
            const newZ = -100 + 300 * progress;
            ref.current!.style.transform = `translate3d(0px, 0px, ${newZ}vh) scale(${0.5 + 0.5 * progress})`;
            ref.current!.style.zIndex = progress > 0 && progress < 1 ? "60" : "40";
          },
        },
        0
      );
    });

   
    secTl.to(".Thoughts-btn", { opacity: 0, duration: 0.3, autoAlpha: 0 }, "+=0.3");

    globalTl.add(secTl); 

    


  }, []);



  return (

    <section ref={maincontainerRef} className="transition-colors duration-500 overflow-x-hidden relative w-full h-full">
  
      <div className="slide-1 h-screen overflow-hidden px-4 pt-4 md:px-5 md:pt-5 relative bg-black">
        {/* Dotted Background Image */}
        <Image
          ref={dottedBgRef}
          src="/img/bgs/dottedbg.svg"
          alt="bg1"
          width={800}
          height={800}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 z-0"
        />

        {/* Top Header Section */}
        <div className="w-full flex justify-between items-center text-white pb-4 md:pb-5 xl:hidden relative z-10 mobile-top-header">
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
        <div ref={bg1Ref} className="h-[85%] relative block w-full rounded-2xl overflow-hidden z-10 desktop-bottom-header">
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
          ref={beyondRef}
          src="/img/beyond.svg"
          alt="beyond"
          width={100}
          height={100}
          className="w-full max-w-80 sm:max-w-xl lg:max-w-3xl absolute top-[20%] lg:top-[10%] left-1/2 -translate-x-1/2  z-10"
        />

        {/* Human Image */}
        <Image
          ref={humanRef}
          alt="human1"
          src="/img/human1.png"
          width={1000}
          height={1000}
          className="w-[250px] left-1/2 translate-x-[-60%] sm:left-1/2 sm:translate-x-[-60%] md:w-[420px] 2xl:w-[550px] absolute -bottom-0 z-20"
          priority
        />

        {/* Human Background */}
        <Image
          ref={humanBgRef}
          src="/img/bgs/humanbg1.png"
          alt="bg-2"
          width={1000}
          height={1000}
          className="w-full max-w-80 md:max-w-xl absolute bottom-0 left-1/2 -translate-x-1/2 z-10"
        />

        {/* 15% Height Content Section */}
        <div className="text-white w-full h-[15%] relative  justify-between items-center hidden xl:flex z-30 desktop-bottom-header">
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

 
      <div className="star-slide overflow-hidden absolute top-0 left-0 w-full h-[100dvh]">
        <button className=" amplify-btn absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000] transition-all duration-300">
          <span className="text-content">Amplify your Life</span>
        </button>
        <Image
          alt="star1"
          src="/img/star1.svg"
          width={100}
          height={100}
          className="  w-12 md:w-14  left-[5%] md:left-[20%] top-[40%] absolute xl:left-[30%]"
        />
        <Image
          alt="star2"
          src="/img/star2.svg"
          width={100}
          height={100}
          className="w-20 top-[20%] absolute left-[65%]"
        />
        <Image
          alt="star3"
          src="/img/star1.svg"
          width={100}
          height={100}
          className=" w-10 top-[65%] absolute left-[62%]"
        />
      </div>

      <div className="goal-slide w-full h-[100dvh] bg-white absolute top-0"  style={{ perspective: "100dvh" }}>
        <button

          className="Goal-btn absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000]"
        >
          <span className="text-content">Amplify your Goal</span>
        </button>
        <div ref={img1Ref} className=" slide3img1 absolute overflow-hidden rounded-xl w-[300px] h-96 left-[15%] top-20 z-10  hidden lg:block">
          <Image
            src="/img/slide1/1.png"
            fill
            alt="1"
            priority
            className="w-full object-cover rounded-lg"
          />
          <h1 className="z-20 text-2xl absolute top-4 font-bold left-4 text-white">
            Goals
          </h1>
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/10"></div>
        </div>

    
        <div ref={img2Ref} className="absolute slide3img2 overflow-hidden rounded-xl w-[250px] h-36 left-[60%] top-36 hidden lg:block">
          <Image
            src="/img/slide1/2.png"
            alt="1"
            fill
            priority
            className="object-cover "
          />
        </div>
       
        <div ref={img3Ref} className="absolute slide3img3 overflow-hidden rounded-xl w-28 h-40 left-[32%] top-[50%] hidden lg:block">
          <Image src="/img/slide1/3.png" alt="Image 3" fill priority className="object-cover" />
        </div>
      </div>
      <div className=" Thoughts-slide w-full h-screen overflow-hidden  absolute top-0" style={{ perspective: "100dvh" }}>
        <button className="Thoughts-btn absolute font-Satoshi text-white font-bold top-[44%] left-[50%] translate-x-[-50%] translate-y-[-40%] px-6 py-2 text-sm md:text-xl rounded-full bg-gradient-to-r from-[#FF7676] via-[#2C4CFF] to-[#FF4000]">
          <span className="text-content">Amplify your Thoughts</span>
        </button>

        <div ref={s2img1Ref} className="absolute  overflow-hidden rounded-xl w-[350px] h-48 left-[65%] top-20 hidden lg:block" >
          <Image
            src="/img/slide1/2.png"
            fill
            alt="2"
            priority
            className="w-full object-cover rounded-lg"
          />
          <h1 className="z-20 text-2xl absolute top-4 font-bold left-4 text-white">Thoughts</h1>
          <div className="absolute top-0 left-0 w-full h-full z-10 bg-black/10"></div>
        </div>
        <div  ref={s2img2Ref} className="rounded-lg  absolute overflow-hidden w-[160px] h-56 left-[25%] top-72 hidden lg:block">
          <Image
            src="/img/slide1/4.png"
            fill
            alt="2"
            priority
            className=" object-cover "
          />
        </div>
        <div ref={s2img3Ref} className="w-28 h-20 rounded-lg overflow-hidden absolute top-96 left-[55%] hidden lg:block">
          <Image
            src="/img/slide1/5.png"
            fill
            alt="3"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>


  );
};

export default ScrollImageEffect;
