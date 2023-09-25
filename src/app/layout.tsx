import BeforeAndAfter from "@/components/BeforeAndAfter";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Box } from "@mui/material";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Sharp",
  description: "Sharpern",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <ThemeRegistry>
        <Box component={"body"} className={inter.className}>
          <Header sx={{ mt: "10px" }} />
          <BeforeAndAfter sx={{ p: "40px 40px" }} />
          <Carousel />
        </Box>
      </ThemeRegistry> */}
      test
    </html>
  );
}
