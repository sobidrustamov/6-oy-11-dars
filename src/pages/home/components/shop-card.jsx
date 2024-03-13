import React from "react";
import { Like } from "./icons/like";
import { ShoppingBag } from "./icons/shopping-bag";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  unLikedProduct,
} from "../../../redux/reducers/product-reducer";
import { loadState } from "../../../config/storage";
import { Eye } from "./icons/eye";
import { likedProduct } from "../../../redux/reducers/product-reducer";
import { Liked } from "./icons/liked";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, price, newPrice, img, id }) => {
  const { liked } = useSelector((state) => state.product);
  const like = liked.find((item) => item.id === id);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const product = loadState("product");
  const clicked = product?.ids.includes(id);

  const addPro = () => {
    dispatch(addProduct({ title, img, newPrice, id }));
  };
  return (
    <div className="w-[214px] p-2">
      <div className="flex items-start">
        <img className="w-[165px] h-[165px]" src={img} alt="phone" />
        {like ? (
          <button
            onClick={() => {
              dispatch(unLikedProduct({ id }));
            }}
            className="mt-[50px]"
          >
            <Liked />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(likedProduct({ id }));
            }}
            className="mt-[50px]"
          >
            <Like />
          </button>
        )}
      </div>
      <div className="flex items-end justify-between">
        <div className="w-[80%]">
          <h2 className="h-[72px] font-normal leading-[150%] text-[#333]">
            {title}
          </h2>
          <p className="text-[14px] text-[#999] line-through">{price} $</p>
          <h2 className="font-bold">{newPrice} $</h2>
        </div>
        {!clicked ? (
          <button
            onClick={addPro}
            className="flex items-center justify-center w-[36px] h-[36px] bg-[#34ebeb]"
          >
            <ShoppingBag />
          </button>
        ) : (
          <button
            onClick={() => navigate("/products/cart")}
            className="flex items-center justify-center w-[36px] h-[36px] bg-[#34ebeb]"
          >
            <Eye />
          </button>
        )}
      </div>
    </div>
  );
};
