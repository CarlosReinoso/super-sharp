import BeforeAndAfter from "@/components/BeforeAndAfter";
import Carousel from "@/components/Carousel";
import * as React from "react";

export default function HomePage() {
  return (
    <>
      <BeforeAndAfter sx={{ p: "40px 40px" }} />
      <Carousel />
    </>
  );
}
