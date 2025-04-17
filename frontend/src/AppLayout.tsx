import { Box, BoxProps } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function AppLayout({ children, ...props }: BoxProps) {
  return (
    <Box p={3} flexGrow={1} overflow="hidden">
      <Box padding={4} width="100%" maxWidth={1280} margin="auto">
        <Header />;
      </Box>
      <Outlet />
      <Footer />
    </Box>
  );
}
