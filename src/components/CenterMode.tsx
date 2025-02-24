'use client'
import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { IoChevronBack, IoChevronForward, IoPlay } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute navbtn left-4 top-1/2 -translate-y-1/2 z-[999] bg-white/10 hover:bg-[#FE0055] text-white/50 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out"
  >
    <IoChevronBack className="text-3xl" />
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden md:block absolute navbtn  right-4 top-1/2 -translate-y-1/2 z-[999] bg-white/10 hover:bg-[#FE0055] text-white/50 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 ease-in-out"
  >
    <IoChevronForward className="text-3xl" />
  </button>
);

const CenterMode: React.FC = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "40px",
    slidesToShow: 3,
    speed: 500,
    dots: false,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "40px",
        }
      }
    ]
  };

  return (
      <div className="slider-container w-full mx-auto px-4 overflow-hidden">
        <Slider {...settings}>
          {[1, 2, 3, 4,].map((num) => (
            <VideoSlide key={num} videoSrc={`/assets/${num}.mp4`} />
          ))}
        </Slider>
      </div>
  );
};

interface VideoSlideProps {
  videoSrc: string;
}

const VideoSlide: React.FC<VideoSlideProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="px-2  mx-auto">
      <div className="relative bg-black rounded-lg w-full max-w-xs h-96 overflow-hidden mx-auto">
        {/* Video Element */}
        <video
          ref={videoRef}
          src={videoSrc}
          className="w-full h-full  object-cover"
          onClick={handlePlay}
        />

        {/* Play Button Overlay */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center hover:scale-110 transition-all duration-300 ease-in-out"
          >
            <div className="bg-black/50 p-5 rounded-full shadow-lg">
              <IoPlay className="text-white text-6xl" />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default CenterMode;
