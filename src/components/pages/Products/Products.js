import React from "react";
import { HeroSection } from "../../HeroSection";
import { homeObjOne, homeObjThree } from "./Data";

const Products = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
};

export default Products;
