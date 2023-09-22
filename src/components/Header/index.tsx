import { Box, SxProps } from "@mui/material";
import Image from "next/image";

export default function Header({ sx }: { sx: SxProps }) {
  return (
    <Box
      sx={{
        ...sx,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image src="/logo.png" width={50} height={50} alt="logo" />
    </Box>
  );
}
