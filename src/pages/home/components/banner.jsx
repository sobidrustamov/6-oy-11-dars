import React from "react";
import { useGetBanners } from "../service/query/useGetBanners";
import CustomArrows from "./slider";

export const Banner = () => {
  const { data } = useGetBanners();
  return (
    <div>
      <CustomArrows arr={data} />
    </div>
  );
};
