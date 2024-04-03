import React, { useState,useEffect } from "react";

export const FAQ = () => {
  const faqArray = [
    {
      id: 1,
      title: "What makes EcoHaven Realty different from other real estate agencies?",
      description:
        "At EcoHaven Realty, we are committed to promoting sustainability in the real estate industry. We prioritize eco-friendly practices, such as green building techniques and energy-efficient systems, in all of our transactions. We believe that promoting environmental responsibility is not only the right thing to do, but it also benefits our clients by providing long-term cost savings and a healthier living environment.",
    },
    {
      id: 2,
      title: "Do you only work with eco-friendly properties?",
      description:
        "While we specialize in promoting and selling eco-friendly properties, we work with all types of properties. Our focus is on promoting sustainable practices and educating our clients on how they can make their properties more eco-friendly.",
    },
    {
      id: 3,
      title: "Can you help me find an eco-friendly property?",
      description:
        "Absolutely! We have a database of eco-friendly properties and can work with you to find a property that aligns with your sustainability goals. Additionally, we can provide guidance on how to make any property more eco-friendly.",
    },
    {
      id: 4,
      title: "What is your process for ensuring a property is eco-friendly?",
      description:
        "We work with builders and contractors who specialise in eco-friendly building practices. We also conduct assessments of a property's energy and water usage, as well as its overall sustainability features, to ensure that it aligns with our eco-friendly standards.",
    },
    {
      id: 5,
      title: "Are eco-friendly properties more expensive?",
      description:
        "Not necessarily. While some eco-friendly features may require an initial investment, such as solar panels or energy-efficient systems, they can ultimately lead to long-term cost savings on utility bills. Additionally, there are often government incentives and tax breaks available for eco-friendly properties and features.",
    },
  ];

  const [faq, setFaq] = useState({});

  useEffect(() => {
    const initialFaqState = {};
    faqArray.forEach((item) => {
      initialFaqState[item.id] = true; // Open by default
    });
    setFaq(initialFaqState);
  }, []);

  const toggleFaq = (id) => {
    setFaq((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <>
      <div className="mb-5 relative top-96 px-20 py-10 gap-16">
        <div className="w-1/2">
          <div className="flex mb-4 flex-row items-center gap-5">
            <img src="./assets/line.png" alt="" />
            <p className="font-sans font-semibold text-sm text-[#27563A]">
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div>
        </div>

        <div className="flex ">
          <div className="">
            <h1 className="text-[#08110C] w-4/5 text-3xl font-bold mb-4">
              Common questions asked about our eco-friendly homes.
            </h1>
            <p className="w-4/5 text-base text-[#313131] font-medium mb-4">
              Here are some important questions that are frequently asked and
              the answers to the questions.
            </p>
            <p className="font-bold text-xl mb-4">Have a different question?</p>
            <button className="bg-[#27563A] flex text-white items-center gap-2 px-4 py-2 rounded-full">
              Contact Us <img src="./assets/arrowLink.png" alt="" />
            </button>
          </div>

          <div className="w-2/3">
            {faqArray.map((item) => {
              return (
                <>
                  <div key={item.id}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <img
                        src="./assets/arrowDown.png"
                        className={`cursor-pointer ${
                          faq[item.id] ? "rotate-270" : "rotate-180"
                        }`}
                        onClick={() => toggleFaq(item.id)}
                        alt=""
                      />
                    </div>

                    <div>
                      {faq[item.id] ? (
                        <>
                          <p className="text-sm font-medium mb-4">
                            {item.description}
                          </p>
                        </>
                      ) : null}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
