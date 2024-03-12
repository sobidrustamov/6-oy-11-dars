import React from "react";
import { Card } from "./shop-card";
import { useGetProducts } from "../service/query/useGetProducts";

export const Computers = () => {
  const { data } = useGetProducts('computers');
  return (
    <div className="container mt-[40px]">
      <h2 className="mb-3 py-2 text-[24px] font-medium">
        Ноутбуки, планшеты и компьютеры
      </h2>
      <div className=" flex justify-between">
        {data?.slice(0, 6).map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
