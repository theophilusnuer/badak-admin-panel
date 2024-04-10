import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import ErrorMessage from "./errorMessage"
import { authenticateUser } from './AuthenticationService';

const LoginForm = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

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

  const handleLogin = async () => {
    try {
      await authenticateUser.login(formData.username, formData.password);
      // Redirect user after successful login
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      borderRadius: '10px',
      boxShadow: "3",
      width: "35%",
      margin: "auto",
      marginTop: "100px",
      padding: '20px',
    }}>
      <div>
        <div className="flex justify-center font-bold text-blue-700 text-2xl">
          <p>Login</p>
        </div>
        <FormControl style={{ marginBottom: "50px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
          <InputLabel htmlFor="standard-adornment-amount">Username</InputLabel>
          <Input
            id="standard-adornment-amount"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: "46ch" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            name="password"
            type={showPassword ? 'text' : 'password'}
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
          sx={{ bgcolor: "#1d4ed8", width: "52ch" }}
          variant="contained"
          onClick={handleLogin}
        >
          Login
        </Button>
        <div className='flex justify-center text-blue-700 mb-5'>
          <p>Forgotten Password?</p>
        </div>
        <div className='flex justify-center'>
          New User?
          <Link to="/signup">
            <p className='text-blue-700 ml-2'>Register Here</p>
          </Link>
        </div>
      </div>
    </Box>
  );
};

export default LoginForm;
