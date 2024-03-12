import React from "react";
import { Logo } from "../header/img/logo";
import { Facebook } from "./icons/facebook";
import { Ok } from "./icons/ok";
import { Vk } from "./icons/vk";
import { Youtube } from "./icons/youtube";
import { Instagram } from "./icons/instagram";
import { Payme } from "./icons/payme";
import { Uzcard } from "./icons/uxcard";
import { Humo } from "./icons/humo";

export const Footer = () => {
  return (
    <>
      <div className="bg-slate-50 py-[40px]">
        <div className="container flex">
          <div className="flex flex-col gap-3">
            <a href="#">
              <Logo />
            </a>
            <h2 className="text-[21px] font-medium">+99 893 374-66-44</h2>
            <p>справочная служба</p>
            <h2 className="text-[21px] font-medium">+99 890 253-77-53</h2>
            <p>интернет-магазин</p>
            <p className="font-medium">Оставайтесь на связи</p>
            <ul className="list-unstyled flex gap-2">
              <li>
                <a href="#">
                  <Facebook />
                </a>
              </li>
              <li>
                <a href="#">
                  <Ok />
                </a>
              </li>
              <li>
                <a href="#">
                  <Vk />
                </a>
              </li>
              <li>
                <a href="#">
                  <Youtube />
                </a>
              </li>
              <li>
                <a href="#">
                  <Instagram />
                </a>
              </li>
            </ul>
          </div>
          <div className="flex px-[180px] justify-between w-full">
            <div>
              <ul className="flex flex-col gap-4">
                <li>
                  <p>Условия обмена и возврата</p>
                </li>
                <li>
                  <p>Каталог</p>
                </li>
                <li>
                  <p>О компании</p>
                </li>
                <li>
                  <p>Контакты</p>
                </li>
                <li>
                  <p>Контакты</p>
                </li>
                <li>
                  <p>Оплата</p>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex flex-col gap-4">
                <li>
                  <p>Клиентам</p>
                </li>
                <li>
                  <p>Личный кабинет</p>
                </li>
                <li>
                  <p>Блог</p>
                </li>
                <li>
                  <p>Обратная связь</p>
                </li>
              </ul>
            </div>

            <div>
              <ul className="flex flex-col gap-4">
                <li>
                  <p>Информация</p>
                </li>
                <li>
                  <p>Пользовательское соглашение</p>
                </li>
                <li>
                  <p>Пользовательское соглашение</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300">
        <div className="container flex justify-between py-6  ">
          <p>
            © 2022 Любое использование контента без письменного разрешения
            запрещено
          </p>
          <ul className="list-unstyled flex items-center gap-6">
            <li>
              <Payme />
            </li>
            <li>
              <Uzcard />
            </li>
            <li>
              <Humo />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
