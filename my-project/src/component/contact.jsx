import React from "react";

export const Contact = () => {
  const socialArray = [
    {
      id: 1,
      icon: "./assets/sendIcon.png",
      title: "Send an email",
      details: "contact@ecohavenrealty.com",
    },
    {
      id: 2,
      icon: "./assets/callIcon.png",
      title: "Give us a call",
      details: "+2349051218127",
    },
    {
      id: 3,
      icon: "./assets/locationIcon.png",
      title: "Office address",
      details: "11, Odo-Olowu, Ijeshatedo B/Stop, Surulere",
    },
    {
      id: 4,
      icon: "./assets/clock.png",
      title: "Working hours",
      details: "Mon-Sat:10am-4pm",
    },
  ];
  return (
    <div className="relative top-96 px-20 py-16 bg-[#E4E5DF] gap-10 flex">
      <div className="w-2/3 bg-white px-10 rounded-2xl py-10">
        <div className="flex w-full relative gap-4">
          <div className="mb-4 w-full flex-col flex">
            <label
              className="font-semibold text-sm text-[#313131] mb-2"
              htmlFor="full name"
            >
              Full name <span className="text-[#FF4D4F]">*</span>
            </label>
            <input
              type="text"
              name="full name"
              className="bg-[#F1F1F1] text-[#000] placeholder-[#000] px-4 rounded-xl py-4 text-sm outline-none"
              id=""
              placeholder="Enter your full name"
            />
          </div>

          <div className="w-full flex-col flex">
            <label
              className="font-semibold text-sm text-[#313131] mb-2"
              htmlFor="phone number"
            >
              Phone number <span className="text-[#FF4D4F]">*</span>
            </label>
            <input
              type="text"
              className="bg-[#F1F1F1] text-[#000] placeholder-[#000] px-4 rounded-xl py-4 text-sm outline-none"
              name="phone number"
              id=""
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label
            className="font-semibold text-sm text-[#313131] mb-2"
            htmlFor="email"
          >
            Email <span className="text-[#FF4D4F]">*</span>
          </label>
          <input
            type="email"
            name="email"
            id=""
            className="bg-[#F1F1F1] text-[#000] placeholder-[#000] text-sm outline-none px-4 rounded-xl py-4 w-full"
            placeholder="Enter your email"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label
            className="font-semibold text-sm text-[#313131] mb-2"
            htmlFor="enquiry"
          >
            What is your enquiry about?{" "}
            <span className="text-[#FF4D4F]">*</span>
          </label>
          <select
            name="enquiry"
            id=""
            className="bg-[#F1F1F1] text-[#000] placeholder-[#000] px-4 rounded-xl py-4 w-full outline-none text-sm"
          >
            <option value="">Select one</option>
            <option value="">For sale</option>
            <option value="">For rent</option>
            <option value="">For lease</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label
            className="font-semibold text-sm text-[#313131] mb-2"
            htmlFor="message"
          >
            Additional information <span className="text-[#FF4D4F]">*</span>
          </label>
          <textarea
            name=""
            className="bg-[#F1F1F1] outline-none text-[#000] placeholder-[#000] px-4 rounded-xl py-4 w-full mb-10"
            id=""
            rows="5"
          ></textarea>
        </div>

        <button className="bg-[#27563A] text-white px-6 rounded-full py-3 font-semibold text-sm">
          Send Message
        </button>
      </div>

      <div className="mt-2">
        <h1 className="font-bold mb-4 text-3xl">
          Get in touch to schedule a visit to your new house.
        </h1>
        <p className="text-base font-medium pb-4 border-[#CBCBCB] border-b-2">
          Kindly fill this form with your details about your inquiries and we
          would respond to your inquiries shortly
        </p>

        <div className="pt-2">
          {socialArray.map((item) => {
            return (
              <div key={item.id}>
                <div className="flex items-center gap-4 mb-4">
                  <img src={item.icon} alt="" />
                  <div>
                    <h4 className="font-bold text-[#08110C] text-xl">
                      {item.title}
                    </h4>
                    <p className="font-semibold text-base text-[#27563A]">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
