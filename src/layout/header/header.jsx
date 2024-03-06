import React from "react";
import { Logo } from "./img/logo";
import { Tell } from "./icons/tell";
import { MenuBar } from "./icons/menu-bar";
import { Search } from "./icons/search";
import { User } from "./icons/user";
import { Like } from "./icons/like";
import { ShoppingBag } from "./icons/shopping-bag";

export const Header = () => {
  return (
    <header className="container">
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
          <Logo />
          <button className="flex gap-3 p-3 border border-[#ffef00] bg-[#FFEF00] pr-[45px]">
            <MenuBar /> Каталог
          </button>
          <form className="flex items-center p-3  border w-[673px]">
            <input
              type="text"
              id="search"
              placeholder="Поиск"
              className="w-[620px] outline-none"
            />
            <label htmlFor="search">
              <Search />
            </label>
          </form>
        </div>
        <ul className="flex gap-[32px]">
          <li>
            <button className="flex flex-col items-center">
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
            <button className="flex flex-col items-center">
              <ShoppingBag />
              Корзина
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};
