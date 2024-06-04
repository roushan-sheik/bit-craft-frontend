import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../../loadingSpinner/Spinner";
import Title from "../../title/Title";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
// Import Swiper styles
import { Rating } from "@material-tailwind/react";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const ProductReviews = ({ blog_id }) => {
  const axiosSecure = useAxiosSecure();
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/reviews/${blog_id}`);
      return data;
    },
  });

  if (isLoading) return <Spinner />;
  return (
    <div>
      <Title
        title={"Honest Feedback from Our Community"}
        description={
          "Explore what our users have to say about their favorite tech products. From detailed app evaluations to insightful software critiques, our community shares their genuine experiences to help you make informed decisions. "
        }
      />
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        breakpoints={{
          // when window width is >= 640px
          100: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper grid grid-cols-1"
      >
        {reviews?.map((item) => {
          const { name, image, description, rating } = item;
          return (
            <SwiperSlide key={item._id}>
              <div className="space-y-2 border-2 p-4  rounded-lg shadow-sm">
                <div className="flex justify-center">
                  <div className="overflow-hidden w-[200px] h-[200px] ">
                    <img
                      className="w-[200px] h-[200px] rounded-full object-cover "
                      src={image}
                      alt=""
                    />
                  </div>
                </div>
                <h2 className="font-medium text-slate-800 text-center text-lg dark:text-white/90">
                  {name}
                </h2>
                {/* rating  */}
                <div className="flex gap-1  justify-center">
                  <div className="flex gap-2  items-center text_third">
                    <span>{rating}</span>
                    <Rating value={rating} />
                  </div>
                </div>
                <h2 className="  text-gray-700 text-sm text-center  dark:text-white/60">
                  {description}
                </h2>
              </div>
              {/* Price and action button */}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductReviews;
