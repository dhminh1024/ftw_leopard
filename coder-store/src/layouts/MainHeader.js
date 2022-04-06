import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Logo from "../components/Logo";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import useAuth from "../hooks/useAuth";

function MainHeader() {
  const { isAuthenticated, user } = useAuth();
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Logo />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CoderStore
          </Typography>
          {isAuthenticated ? (
            <Typography>{user?.username}</Typography>
          ) : (
            <Link to="/login" component={RouterLink} sx={{ color: "white" }}>
              Login
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainHeader;
