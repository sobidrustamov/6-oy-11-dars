import React from "react";
import { useGetProducts } from "../service/query/useGetProducts";

export const Brand = () => {
  const { data } = useGetProducts("brand");
  return (
    <div className="container my-[40px]">
      <h2 className="mb-6 py-2 text-[24px] font-medium">Популярные бренды</h2>
      <div className="grid grid-cols-7 gap-6">
        {data?.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[181px] h-[90px] border bg-[#fffdfd] flex items-center justify-center p-3"
            >
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
