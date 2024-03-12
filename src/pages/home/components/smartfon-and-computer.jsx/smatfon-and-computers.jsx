import React from "react";
import { Smartfons } from "./smartfons";
import { Computers } from "./computers";

export const SmatfonAndComputers = () => {
  return (
    <div className="flex justify-between mb-6">
      <div className="w-[417px]">
        <h2 className="py-4 text-[24px] border-b-2 ">Смартфоны и планшеты</h2>
        <Smartfons />
      </div>
      <div className="w-[417px]">
        <h2 className="py-4 text-[24px] border-b-2 ">
          Ноутбуки, планшеты и компьютеры
        </h2>
        <Computers />
      </div>
      <div className="w-[417px]">
        <h2 className="py-4 text-[24px] border-b-2 ">Смартфоны и планшеты</h2>
        <Smartfons />
      </div>
    </div>
  );
};
