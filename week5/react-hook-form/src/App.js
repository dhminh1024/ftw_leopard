import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, IconButton, InputAdornment, Stack } from "@mui/material";
import FormProvider from "./components/form/FormProvider";
import FTextField from "./components/form/FTextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FMultiCheckbox from "./components/form/FMultiCheckbox";
import FSwitch from "./components/form/FSwitch";
import { FSelect } from "./components/form";

const schema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
});

function App() {
  const defaultValues = {
    username: "",
    email: "",
    password: "",
    languages: [],
    isFA: false,
    city: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const methods = useForm({ resolver: yupResolver(schema), defaultValues });
  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <FSelect name="city" label="City">
            {[
              { code: "HCMC", label: "Ho Chi Minh City" },
              { code: "HN", label: "Hanoi" },
              { code: "DN", label: "Da Nang" },
            ].map((option) => (
              <option key={option.code} value={option.label}>
                {option.label}
              </option>
            ))}
          </FSelect>
          <FSwitch name="isFA" label="Forever Alone?" />
          <FTextField name="username" label="Username" />
          <FTextField name="email" label="Email" />
          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FMultiCheckbox
            name="languages"
            options={["Python", "JS", "Java", "C", "C++"]}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </FormProvider>
    </>
  );
}

export default App;

// List questions
// How people learn/like to learn coding?

// User Profile
// - Name, age, gender(radio), job

// How much do you like your current job?
// Option: 0 - 10 (radio buttons)

// Salary?
// Select: low, medium, high, super high

// Do you want to switch the job?
// Switch

// Select a coding school you have heard?
// MultiCheckbox: CoderSchool, NordicCoder, MindX, FPT, NAB
