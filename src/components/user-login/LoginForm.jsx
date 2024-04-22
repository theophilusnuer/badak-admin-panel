import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "./errorMessage";

const baseURL = process.env.REACT_APP_URL;

// Define the login function
const login = async (email, password) => {
  const response = await fetch(`${baseURL}/api/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  console.log(response);

  if (response.ok) {
    const user = await response.json();
    return user;
  } else {
    throw new Error("Login failed");
  }
};

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const user = await login(formData.email, formData.password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError("Sorry, try again!");
    }
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        boxShadow: "3",
        margin: "auto",
        marginTop: "100px",
        padding: "20px",
      }}
    >
      <form className="flex flex-col items-center">
        <div className="w-full max-w-md">
          <div className="flex justify-center font-bold text-blue-700 text-2xl mb-8">
            <p>Login</p>
          </div>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="standard-adornment-amount">Email</InputLabel>
            <Input
              id="standard-adornment-amount"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleInputChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          {error && <ErrorMessage message={error} />}
          <Button
            style={{ marginBottom: "10px" }}
            sx={{ bgcolor: "#1d4ed8" }}
            variant="contained"
            onClick={handleLogin}
          >
            Login
          </Button>
          <div className="flex justify-center text-blue-700 mb-5">
            <p>Forgotten Password?</p>
          </div>
          <div className="flex justify-center">
            New User?
            <Link to="/signup">
              <p className="text-blue-700 ml-2">Register Here</p>
            </Link>
          </div>
        </div>
      </form>
    </Box>
  );
};

export default LoginForm;
