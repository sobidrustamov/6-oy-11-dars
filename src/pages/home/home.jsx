import React from "react";
import { Banner } from "./components/banner/banner";
import { Category } from "./components/category/category";
import { Smartfon } from "./components/smartfon/smartfon";
import { Discount } from "./components/discount";
import { SmatfonAndComputers } from "./components/smartfon-and-computer.jsx/smatfon-and-computers";
import { Brand } from "./components/brand";
import { Computers } from "./components/computers";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-8">
        <Category />
      </div>
      <div className="container">
        <Smartfon />
      </div>
      <div className="bg-[#34ebeb] my-8">
        <Discount />
      </div>
      <div className="container">
        <SmatfonAndComputers />
      </div>
      <div className="container">
        <Smartfon />
      </div>
      <div>
        <Computers />
      </div>
      <div className="container">
        <Brand />
      </div>
    </div>
  );
};

export default Home;
