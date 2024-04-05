import React from "react";

export const Benefit = () => {
  const perks = [
    {
      id: 1,
      title: "Low energy costs",
      description:
        "One of the most significant benefits of owning an Eco Haven Realty Home is lower energy costs. Our eco-friendly homes are designed to use less energy with our solar powered system, saving money on bills.",
      imgSrc: "./assets/perk2.png",
    },
    {
      id: 2,
      title: "Smaller carbon footprint",
      description:
        "Our eco-friendly homes also have a smaller carbon footprint. They constantly use renewable energy sources and produce less waste which means they have a lower impact on the environment.",
      imgSrc: "./assets/perk3.png",
    },
    {
      id: 3,
      title: "Indoor",
      description:
        "Our hybrid ventilation strategy includes both natural and mechanical ventilation, while our airtight wooden structure reduces risk of mold development, ensuring a healthy home.",
      imgSrc: "./assets/perk1.png",
    },
  ];
  return (
    <div className="md:top-96 top-72 relative md:px-20 md:py-10 bg-[#E4E5DF]">
      <div className="flex items-center justify-center pt-10 py-3 flex-col gap-y-2 relative mb-5">
        <h1 className="font-bold text-2xl md:text-4xl md:w-2/4 text-center  text-[#08110C]">
          Benefit of owning an eco-friendly home.
        </h1>
        <p className="text-[#141413] text-sm md:text-base font-medium">
          High-quality homes with low-carbon impact.
        </p>
      </div>

      <div className="md:grid md:gap-x-4 md:grid-cols-3 px-4 md:px-0">
        {perks.map((item, id) => {
          return (
            <div key={item.id}>
              <div className="bg-white mb-4" >
                <div className="px-4 py-10 flex flex-col gap-y-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>

                  <p className="text-sm">{item.description}</p>
                </div>

                <div>
                  <img src={item.imgSrc} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
