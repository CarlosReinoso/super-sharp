"use client";
import { Box, Grid, SxProps } from "@mui/material";
import Image from "next/image";

export default function BeforeAndAfter({ sx }: { sx: SxProps }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 10 }}
      sx={{ ...sx, justifyContent: "center" }}
    >
      <Grid item xs={12} sm={6} md={4}>
        <Box
          component="img"
          src="/header/knife-before.jpeg"
          sx={{
            maxWidth: "100%",
            height: "auto",
          }}
          alt="knife before"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box
          component="img"
          src="/header/knife-after.jpeg"
          sx={{
            maxWidth: "100%",
            height: "auto",
          }}
          alt="knife after"
        />
      </Grid>
    </Grid>
  );
}
