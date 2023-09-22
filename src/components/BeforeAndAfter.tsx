"use client";
import { Grid, SxProps } from "@mui/material";
import Image from "next/image";

export default function BeforeAndAfter({ sx }: { sx: SxProps }) {
  return (
    <Grid container spacing={2} sx={{ ...sx }}>
      <Grid item xs={12} sm={6}>
        <Image
          src="/header/knife-before.jpeg"
          width={500}
          height={500}
          alt="knife before"
          layout="responsive"
        />
      </Grid>
      <Grid item xs={12} sm={6} sx={{ maxWidth: "10px" }}>
        <Image
          src="/header/knife-after.jpeg"
          width={500}
          height={500}
          alt="knife after"
          layout="responsive"
        />
      </Grid>
    </Grid>
  );
}
