"use client";
import { Box, Grid, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import { useState } from "react";

const imagePath = [
  {
    path: "/carousel/knife-service-1.webp",
  },
  { path: "/carousel/knife-service-2.webp" },
  { path: "/carousel/knife-service-3.webp" },
];

const CarouselImages = () => {
  return (
    <>
      {imagePath.map((i) => (
        <Image
          src={i.path}
          width={500}
          height={500}
          alt="knife before"
          layout="responsive"
        />
      ))}
    </>
  );
};

export default function Carousel() {
  const [imageIndex, setImageIndex] = useState(1);

  const hasReachedMax = () => {
    imageIndex == imagePath.length
      ? setImageIndex(1)
      : setImageIndex(imageIndex + 1);
  };
  const hasReachedMin = () => {
    imageIndex == 1
      ? setImageIndex(imagePath.length)
      : setImageIndex(imageIndex - 1);
  };
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <IconButton size="large" onClick={() => hasReachedMin()}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box
          component="img"
          src={`/carousel/knife-service-${imageIndex}.webp`}
          sx={{
            maxWidth: { xs: 250, sm: 500, md: 600 },
            maxHeight: { xs: 250, sm: 500, md: 600 },
          }}
          alt="knife before"
        />
        <IconButton size="large" onClick={() => hasReachedMax()}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </>
  );
}
