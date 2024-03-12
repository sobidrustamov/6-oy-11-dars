import React from "react";
import { BannerSlider } from "./slider-banner";
import { useGetProducts } from "../../service/query/useGetProducts";

export const Banner = () => {
  const { data } = useGetProducts("banner");
  return (
    <div>
      <BannerSlider arr={data} />
    </div>
  );
};
