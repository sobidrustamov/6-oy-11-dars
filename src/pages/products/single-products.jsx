import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../home/components/shop-card";
import { useGetProducts } from "../home/service/query/useGetProducts";

export const Computers = () => {
  const id = useParams();
  const { data } = useGetProducts(id.id);

  console.log(id);

  return (
    <div className="container py-4">
      <h2 className="mb-3 py-2 text-[24px] font-medium">
        Ноутбуки, планшеты и компьютеры
      </h2>{" "}
      <div className="flex">
        <div className=" grid grid-cols-6 gap-6">
          {data?.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        {/* <div>1</div> */}
      </div>
    </div>
  );
};
