import React, { useEffect, useState } from "react";
import { Logo } from "./img/logo";
import { Tell } from "./icons/tell";
import { MenuBar } from "./icons/menu-bar";
import { Search } from "./icons/search";
import { User } from "./icons/user";
import { Like } from "./icons/like";
import { ShoppingBag } from "./icons/shopping-bag";
import UserModal from "./components/register-modal";
import CotologModal from "./components/cotolog-modal";
import { Link, useNavigate } from "react-router-dom";
import { useGetSearch } from "./service/useGetSearch";

export const Header = () => {
  let [openProfile, setOpenProfile] = useState(false);
  let [openCotolog, setOpenCotolog] = useState(false);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const { data } = useGetSearch(searchText);

  const profile = () => {
    setOpenProfile(true);
  };
  const cotolog = () => {
    setOpenCotolog(true);
  };

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  };

  const singleProduct = (id) => {
    navigate(`/products/single/${id}`);
    setSearchText("");
  };

  return (
    <header className="container">
      <UserModal isOpen={openProfile} setIsOpen={setOpenProfile} />
      <CotologModal isOpen={openCotolog} setIsOpen={setOpenCotolog} />
      <div className="">
        <ul className="list-unstyled flex justify-end gap-[24px] py-2">
          <li>
            <a href="#">Доставка и оплата</a>
          </li>
          <li>
            <a href="#">Пункты выдачи</a>
          </li>
          <li>
            <a href="#">Поддержка</a>
          </li>
          <li>
            <a href="#" className="flex gap-[24px]">
              <Tell /> +998 90 253 77 53
            </a>
          </li>
        </ul>
      </div>
      <div className="flex justify-between py-4">
        <div className="flex items-center gap-[32px]">
          <Link to={"/"}>
            <Logo />
          </Link>
          <button
            onClick={cotolog}
            className="flex gap-3 p-3 border border-[#34ebeb] bg-[#34ebeb] pr-[45px]"
          >
            <MenuBar /> Каталог
          </button>
          <form className="relative flex items-center p-3  border w-[673px]">
            <input
              value={searchText}
              type="text"
              id="search"
              placeholder="Поиск"
              className="w-[620px] outline-none"
              onChange={handleSearchChange}
            />
            <label htmlFor="search">
              <Search />
            </label>
            <div
              className={`${
                searchText?.length < 4 ? "hidden" : ""
              } absolute top-[100%] left-0 p-2 z-50 bg-white w-full border overflow-y-scroll max-h-[500px]`}
            >
              {data?.map((product, i) => (
                <div
                  key={i}
                  onClick={() => singleProduct(product.id)}
                  className="flex gap-4 border p-3 justify-between"
                >
                  <div className="flex gap-4 items-center">
                    <img className="w-[100px]" src={product.img} alt="" />
                    <div className="">
                      <h2 className="font-medium text-[24px] mb-3">
                        {product.title}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
        <ul className="flex gap-[32px]">
          <li>
            <button onClick={profile} className="flex flex-col items-center">
              <User />
              Войти
            </button>
          </li>
          <li>
            <button className="flex flex-col items-center">
              <Like />
              Избранное
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/products/cart");
              }}
              className="flex flex-col items-center"
            >
              <ShoppingBag />
              Корзина
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
