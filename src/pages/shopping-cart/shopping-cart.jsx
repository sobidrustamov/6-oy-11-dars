import React from "react";
import { loadState } from "../../config/storage";
import { Trash } from "../home/components/icons/trash";
import { LikeCart } from "../home/components/icons/like-cart";
import {
  likedProduct,
  remove,
  toggleAnmount,
  unLikedProduct,
} from "../../redux/reducers/product-reducer";
import { useDispatch, useSelector } from "react-redux";
import { Liked } from "../home/components/icons/liked";

const ShoppingCart = () => {
  const { products, totalCount, totalPrice, liked } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  const removePro = (id) => {
    dispatch(toggleAnmount({ type: "remove", id }));
  };
  const addPro = (id) => {
    dispatch(toggleAnmount({ type: "add", id }));
  };

  return (
    <div className="container">
      <h2 className="font-medium text-[24px]">Корзина</h2>
      <div>
        {products.length ? (
          <div className="flex gap-10  items-start">
            <div>
              {products.map((product) => {
                const like = liked?.find((item) => item.id === product.id);
                return (
                  <div
                    key={product.id}
                    className="flex gap-4 border p-3 justify-between"
                  >
                    <div className="flex gap-4 items-center">
                      <img className="w-[200px]" src={product.img} alt="" />
                      <div className="">
                        <h2 className="font-medium text-[24px] mb-3">
                          {product.title}
                        </h2>
                        <div className="flex gap-3">
                          {!like ? (
                            <button
                              onClick={() =>
                                dispatch(likedProduct({ id: product.id }))
                              }
                              className="flex items-center text-[#999] w-[120px] justify-between"
                            >
                              <LikeCart /> В избранное
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                dispatch(unLikedProduct({ id: product.id }))
                              }
                              className="flex items-center text-[#999] w-[120px] justify-between"
                            >
                              <Liked /> Избранное
                            </button>
                          )}
                          <button
                            onClick={() => dispatch(remove({ id: product.id }))}
                            className="flex items-center text-[#999]"
                          >
                            <Trash /> Удалить
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 flex flex-col justify-center">
                      <h2 className="font-medium text-[24px] mb-3">
                        {product.userPrice} $
                      </h2>
                      <div className="flex bg-slate-100 w-[100px] justify-evenly items-center">
                        <button
                          disabled={product.userCount < 2}
                          onClick={() => {
                            removePro(product.id);
                          }}
                          className="flex items-center text-[#999] bg-white px-2"
                        >
                          -
                        </button>
                        <p className="text-center text-[24px]">
                          {product.userCount}
                        </p>
                        <button
                          onClick={() => {
                            addPro(product.id);
                          }}
                          className="flex items-center text-[#999] bg-white px-2"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-[250px] flex flex-col gap-3 p-4 bg-slate-50">
              <h2 className="font-bold text-[24px]">В корзине</h2>
              <p>Товаров: {totalCount}</p>
              <h2 className="font-bold text-[24px]">{totalPrice} $</h2>
              <button className="bg-blue-500 w-full p-2 text-white">
                Оформить заказ
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h1>Kорзина пуста</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
