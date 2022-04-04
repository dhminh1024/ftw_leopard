import React from "react";
import Logo from "../components/Logo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormProvider, FTextField } from "../components/form";
import { Button, Stack, Typography } from "@mui/material";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const LoginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
});
const defaultValues = {
  username: "",
};

function LoginPage() {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(LoginSchema),
  });
  const { handleSubmit } = methods;

  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (data) => {
    auth.login(data.username, () => {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3} sx={{ width: { md: "350px", xs: "200px" } }}>
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>
        <FTextField name="username" label="Username" />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </Stack>
    </FormProvider>
  );
}

export default LoginPage;
