import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-[1240px] mx-auto text-center font-bold my-[100px]">
        <div className="text-xl md:text-3xl md:p-[24px]">Learn with Us</div>
        <h2 className="text-white text-3xl md:text-[80px] md:p-[24px]">
          Grow with us
        </h2>
        <div className="text-[20px] md:text-[50px] text-white ">
          Learn
          <Typed
            className="pl-3"
            strings={[
              "Web Development",
              "Digital Marketing",
              "Graphic Designing",
            ]}
            typeSpeed={100}
            backSpeed={50}
            loop
          ></Typed>
        </div>
        <button className="bg-black text-white p-3 rounded">Get Started</button>
      </div>
    </div>
  );
};

export default Banner;
