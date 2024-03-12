import React from "react";
import { useGetProducts } from "../service/query/useGetProducts";

export const Discount = () => {
  const { data } = useGetProducts("discount");
  return (
    <div className="container py-[30px]">
      <h2 className="mb-4 text-[24px] font-medium">Акции</h2>
      <div className=" flex gap-6 ">
        {data?.map((item) => {
          return <img key={item.id} src={item.img} alt="" />;
        })}
      </div>
    </div>
  );
};
