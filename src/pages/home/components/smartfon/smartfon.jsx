import React from "react";
import { SliderPhone } from "./slider-phone";
import { useGetProducts } from "../../service/query/useGetProducts";

export const Smartfon = () => {
  const { data } = useGetProducts('phones');
  return (
    <div>
      <h2 className="text-[24px] py-2 font-medium">Смартфоны и планшеты</h2>
      <SliderPhone />
    </div>
  );
};
