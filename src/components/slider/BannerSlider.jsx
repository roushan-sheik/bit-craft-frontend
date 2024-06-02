import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./banner.css";
import "./style.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Button } from "@material-tailwind/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function BannerSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Slider start =============================================== */}
        <SwiperSlide>
          <div className=" banner1 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0  flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold   text-white text-center">
                The Art of Cinematography: Exploring Visual Storytelling
              </h2>
              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Delve into the captivating world of cinematography and its role
                in shaping cinematic narratives.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Button color="blue">Explore Now</Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner2 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0  flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold   text-white text-center">
                {"The Art of Cinematography: Exploring Visual Storytelling"}
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Revisit the timeless classic Casablanca and discover why it
                remains a beloved masterpiece.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Button color="blue">Explore Now</Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner3 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold  text-white text-center">
                Behind the Scenes: The Making of a Blockbuster
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Go behind the scenes of a blockbuster film and discover the
                magic of filmmaking.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Button color="blue">Explore Now</Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner4 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0  flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold  text-white text-center">
                Exploring Genre: The Evolution of Science Fiction Cinema
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Journey through the evolution of science fiction cinema and its
                impact on popular culture.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Button color="blue">Explore Now</Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner5 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                Iconic Movie Soundtracks: A Symphony of Emotion
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Celebrate the power of iconic movie soundtracks and their
                ability to evoke emotion.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Button color="blue">Explore Now</Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner6 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                Exploring Diversity in Cinema: Representation Matters
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Explore the importance of diversity and representation in
                shaping cinematic narratives.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Button color="blue">Explore Now</Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner7 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                The Rise of Streaming Services: Reshaping the Movie Industry
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Examine the impact of streaming services on the traditional
                movie industry.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Button color="blue">Explore Now</Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner8 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                "The Art of Adaptation: From Page to Screen
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Discover the challenges and triumphs of adapting literature for
                the silver screen.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Button color="blue">Explore Now</Button>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slider ends ====================================== */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
