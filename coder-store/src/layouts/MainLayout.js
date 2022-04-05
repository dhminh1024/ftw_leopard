import { Box, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import CartWidget from "../components/CartWidget";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />
      <CartWidget />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
