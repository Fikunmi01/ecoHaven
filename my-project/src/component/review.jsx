import React from "react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// install Swiper modules

const StarRating = ({ ratingCount, starImg, unfilledStar }) => {
  const totalStars = 5;
  let stars = [];

  // Push filled stars
  for (let i = 0; i < ratingCount; i++) {
    stars.push(<img src={starImg} alt="star" key={`filled-${i}`} />);
  }

  // Push unfilled stars
  for (let i = 0; i < totalStars - ratingCount; i++) {
    stars.push(<img src={unfilledStar} alt="star" key={`unfilled-${i}`} />);
  }

  return <div className="flex items-center">{stars}</div>;
};

export const Review = () => {
  const carouselItem = [
    {
      name: "Felix Jimoh",
      rating: "4.9",
      ratingCount: 5,
      description:
        "“I had a wonderful experience working with EcoHaven Realty to find my new home. They really took the time to understand what was important to me and helped me find a home that was not only beautiful but also eco-friendly and energy-efficient. ",
      starImg: "./assets/filledStar.png",
      unfilledStar: "./assets/unfilledStar.png",
    },
    {
      name: "David T.",
      rating: "4.5",
      ratingCount: 4,
      description:
        "“EcoHaven Realty is an amazing real estate agency that truly understands the importance of sustainability and eco-friendliness. They helped me find a beautiful home that was not only environmentally conscious.”",
      starImg: "./assets/filledStar.png",
      unfilledStar: "./assets/unfilledStar.png",
    },
    {
      name: "Susan Lanre",
      rating: "4.5",
      ratingCount: 4,
      description:
        "“I recently sold my home with EcoHaven Realty, and I couldn't be happier with the experience. The team was knowledgeable, professional, and really took the time to understand what was important to me.”",
      starImg: "./assets/filledStar.png",
      unfilledStar: "./assets/unfilledStar.png",
    },
  ];

  return (
    <>
      <div className="md:top-96 top-72 relative md:px-20 md:py-10 bg-[#FFF]">
        <div className="flex items-center justify-center py-3 flex-col gap-y-2 relative mb-5">
          <h1 className="font-bold md:text-4xl md:w-2/4 text-center  text-[#08110C]">
            What our customers say?
          </h1>
          <p className="text-[#141413] text-base font-medium">
            Hear from our satisfied customers and clients.
          </p>
        </div>

        <Swiper
          slidesPerView={2.5}
          spaceBetween={20}
          navigation={false}
          pagination={{ clickable: false }}
          className="py-10"
        >
          {carouselItem.map((item, index) => (
            <SwiperSlide key={index} className="relative ">
              <div className=" relative border-[#E5E5E5] rounded-lg border-2 h-60 px-8 pt-14">
                <div className="bottom-48 absolute  ">
                  <img src="./assets/quoteIcon.png" alt="" />
                </div>
                <h2 className="text- text-xl font-semibold">{item.name}</h2>
                <div className="flex items-center gap-1">
                  <p className="font-medium text-sm">{item.rating}</p>
                  <StarRating
                    ratingCount={item.ratingCount}
                    starImg={item.starImg}
                    unfilledStar={item.unfilledStar}
                  />
                </div>
                <p className="font-medium text-sm">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
