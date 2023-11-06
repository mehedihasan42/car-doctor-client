import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const ServicesCard = ({ card }) => {
  const { title, img, price, description } = card;
  return (
    <div className="card w-96 bg-base-100 border-2 border-b-slate-600 hover:shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body card-side text-center justify-between">
       <div>
       <h2 className="card-title text-[#444444]">{title}</h2>
        <p className="text-start text-[#FF3811]">Price: ${price}</p>
       </div>
        <div className="card-actions justify-end">
          <button className="mt-8">
            <BsFillArrowRightCircleFill className="text-[#FF3811] text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
