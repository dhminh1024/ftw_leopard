import { Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../components/Logo";

function BlankLayout() {
  return (
    <Stack minHeight="100vh" justifyContent="center" alignItems="center">
      <Logo sx={{ width: 70, height: 70 }} />
      <Outlet />
    </Stack>
  );
}

export default BlankLayout;
