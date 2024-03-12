import React from "react";
import { loadState } from "../../config/storage";
import { Trash } from "../home/components/icons/trash";
import { LikeCart } from "../home/components/icons/like-cart";

export const ShoppingCart = () => {
  const data = loadState("product");
  console.log();
  return (
    <div className="container">
      <h2 className="font-medium text-[24px]">Корзина</h2>
      <div>
        {data?.products ? (
          <div className="flex justify-between">
            <div>
              {data.products.map((product) => {
                return (
                  <div
                    key={product.id}
                    className="flex gap-4 border p-3 justify-between"
                  >
                    <div className="flex gap-4 items-center">
                      <img className="" src={product.img} alt="" />
                      <div className="pt-4">
                        <h2 className="font-medium text-[24px] mb-3">
                          {product.title}
                        </h2>
                        <div className="flex gap-3">
                          <button className="flex items-center text-[#999]">
                            <LikeCart /> В избранное
                          </button>
                          <button className="flex items-center text-[#999]">
                            <Trash /> Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 flex flex-col justify-center">
                      <h2 className="font-medium text-[24px] mb-3">
                        {product.newPrice} $
                      </h2>
                      <div className="flex bg-slate-100 w-[100px] justify-evenly items-center">
                        <button className="flex items-center text-[#999] bg-white px-2">
                          -
                        </button>
                        <p className="text-center text-[24px]">
                          {product.userCount}
                        </p>
                        <button className="flex items-center text-[#999] bg-white px-2">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>12</div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
