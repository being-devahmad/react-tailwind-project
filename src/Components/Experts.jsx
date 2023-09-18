import React from "react";
import laptop from "../assets/laptop.jpg";

const Experts = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-10 p-2 md:grid grid-cols-2">
      <div className=" col-span-1 md:w-[80%] text-center">
        <img src={laptop} alt="" className="inline" />
      </div>
      <div className=" col-span-1 flex flex-col justify-center ">
        <h1 className="text-[#00df9a] font-bold my-2">LEARN FROM EXPERTS</h1>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis beatae
          dolores distinctio incidunt non quaerat, iusto corrupti optio
          architecto nesciunt libero fugit accusantium officiis dolorum harum
          voluptas dolor consequuntur quas illo voluptatibus sit. Sit asperiores
          nemo quae autem cum, ad, nostrum repellat aspernatur ipsa veritatis
          minus itaque aut consectetur ducimus!
        </p>
        <button className="bg-black w-[30%] text-white p-3 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Experts;
