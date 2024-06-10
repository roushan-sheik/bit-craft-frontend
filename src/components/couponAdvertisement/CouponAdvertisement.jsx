import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "swiper/modules";
import { axiosSecure } from "../../hooks/useAxiosSecure";
import MySpinner from "../loadingSpinner/Spinner";
import Title from "../title/Title";
function CouponAdvertisement() {
  const { data: coupons, isLoading } = useQuery({
    queryKey: ["my-coupons"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/coupons`);
      return data;
    },
  });
  if (isLoading) return <MySpinner />;
  console.log(coupons);
  return (
    <div>
      <Title
        title={"Get Hot Discount Offer"}
        description={
          "Don't miss out on our limited-time hot discount offer! Enjoy amazing savings on top products. Shop now and get unbeatable deals before they're gone!"
        }
      />
      <div className="flex">
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
          {coupons?.map((item) => {
            const { _id, description, code, discountAmount, expiryDate } = item;
            return (
              <SwiperSlide key={item._id}>
                <div className="space-y-2 border-2 p-4 bg-blue-gray-100 rounded-lg shadow-sm">
                  <div className="flex  justify-center">
                    <div className="overflow-hidden w-[200px] h-[200px] ">
                      <div className="mb-4">
                        <span className="text-2xl font-bold">
                          Get {discountAmount}% Discount
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="mt-8"> Coupon Code: </span>
                        <span className="cursor-text text_brand_pri">
                          {code}
                        </span>
                      </div>
                      <p className="mt-2">Expire: {expiryDate}</p>
                    </div>
                  </div>
                  <h2 className="font-medium text-slate-800 text-center text-lg dark:text-white/90">
                    {description}
                  </h2>
                  {/* rating  */}
                  <div className="flex gap-1  justify-center">
                    <div className="flex gap-2  items-center text_third"></div>
                  </div>
                </div>
                {/* Price and action button */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default CouponAdvertisement;
