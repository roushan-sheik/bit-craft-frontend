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
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Btn from "../button/Btn";

export default function BannerSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="z-0">
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
                The best crypto tools in 2024
              </h2>
              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                A Web3 AI tech for CeFi, DeFi, and NFT markets via
                conversational AI. AI deal execution interface Automated AI
                trading In-depth market analysis (off-chain/on-chain) AI trading
                signals AI arbitrage Portfolio and NFT management
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Btn color="blue">Explore Now</Btn>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner2 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0  flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold   text-white text-center">
                {"    The best file storage and sharing in 2024."}
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                The best file storage and sharing in 2024. File storage apps
                provide secure cloud storage for managing and accessing files
                from anywhere.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Btn color="blue">Explore Now</Btn>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner3 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold  text-white text-center">
                The best ai coding assistants in 2024
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                AI coding assistants use artificial intelligence to assist
                developers with their coding tasks. These assistants analyze
                code, provide suggestions, offer auto-completion, and help catch
                errors or bugs
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Btn color="blue">Explore Now</Btn>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner4 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0  flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold  text-white text-center">
                The best data visualization tools in 2024
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Open-source data pipeline tool for transforming and integrating
                data. The modern replacement for Airflow. - Integrate and
                synchronize data from 3rd party sources - Build real-time and
                batch pipelines to transform data using Python, SQL, and R -
                Run, monitor, and orchestrate thousands of pipelines without
                losing sleep
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Btn color="blue">Explore Now</Btn>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner5 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                The best web hosting services in 2024
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Web hosting platforms provide the infrastructure and services
                needed to make your website accessible on the internet. These
                platforms offer various hosting plans and features to
                accommodate different types of websites and online projects.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Btn color="blue">Explore Now</Btn>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner6 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                The best 3d & animation in 2024
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Cascadeur is a standalone 3D software that lets you create
                keyframe animation, as well as clean up and edit any imported
                ones.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Btn color="blue">Explore Now</Btn>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner7 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                The best crypto wallets in 2024
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                A crypto wallet is a digital wallet for storing, sending, and
                receiving cryptocurrencies. It's like a virtual bank account for
                your digital currencies. There are different types of wallets,
                including software, hardware, and online wallets.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Btn color="blue">Explore Now</Btn>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" banner8 banner_common z-0  relative h-[600px]  ">
            <div className="absolute top-0 p-10 left-0 flex justify-center items-center flex-col h-full">
              <h2 className="md:text-6xl text-3xl md:font-bold font-semibold text-white text-center">
                The best virtual office platforms in 2024
              </h2>

              <p className="text-base text-white mt-6 md:w-[60%] w-full mx-auto">
                Focusmate changes the way you work by partnering you with an
                accountability partner for a live, virtual coworking session
                that will keep you on task.
              </p>
              <div className="inline-flex justify-center flex-col mt-8">
                <a href="#recent_blog">
                  <Btn color="blue">Explore Now</Btn>
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
