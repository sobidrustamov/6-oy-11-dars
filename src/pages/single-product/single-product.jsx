import React from "react";
import { useGetProducts } from "../home/service/query/useGetProducts";
import { useParams } from "react-router-dom";

export const SingleProduct = () => {
  const { data } = useGetProducts("all");
  const { id } = useParams();

  const product = data?.find((item) => item.id == id);
  console.log(product);
  return <div>SingleProduct</div>;
};
