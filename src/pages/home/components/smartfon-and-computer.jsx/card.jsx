import React from "react";

export const Card = ({ img, title, price, oldprice }) => {
  return (
    <div className="flex p-4 gap-4 h-[160px]">
      <div className="w-[40%]">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <h2 className="text-[18px] font-medium">{title}</h2>
        <div>
          <p className="text-[18px] font-bold">{price} Сум </p>
          <span className="line-through">{oldprice} Сум</span>
        </div>
      </div>
    </div>
  );
};
