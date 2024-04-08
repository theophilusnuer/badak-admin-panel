import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
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
                        label="Username"
                    />
                </FormControl>
                <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width: "46ch" }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
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
                <Button style={{ marginBottom: "10px" }} sx={{ bgcolor: "#1d4ed8", width: "52ch" }} variant="contained">Login</Button>
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
}