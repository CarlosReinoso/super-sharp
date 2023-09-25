import Header from "@/components/Header";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Box, CssBaseline } from "@mui/material";
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
      <ThemeRegistry>
        <Box
          component={"body"}
          className={inter.className}
          // sx={{ overflow: "hidden" }}
        >
          <Header sx={{ mt: "10px" }} />
          {children}
        </Box>
      </ThemeRegistry>
    </html>
  );
}
