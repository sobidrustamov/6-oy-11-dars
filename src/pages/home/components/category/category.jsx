import React from "react";
import { SliderCategory } from "./slider-category";
import { useGetProducts } from "../../service/query/useGetProducts";

export const Category = () => {
  const { data } = useGetProducts('category');
  return (
    <div className="container">
      <SliderCategory arr={data} />
    </div>
  );
};
