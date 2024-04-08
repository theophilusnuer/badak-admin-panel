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
import OutlinedInput from '@mui/material/OutlinedInput';

export default function Signup() {
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
                    <p>Sign Up</p>
                </div>
                <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width:"46ch" }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Fullname</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="fullname"
                    />
                </FormControl>
                <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width:"46ch" }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Email</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="email"
                    />
                </FormControl>
                <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width:"46ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
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
                <FormControl style={{ marginBottom: "20px" }} fullWidth sx={{ m: 1, width:"46ch" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                    />
                </FormControl>
                <Button style={{marginBottom:"20px"}} sx={{bgcolor:"#1d4ed8",width:"52ch" }} variant="contained">Register</Button>
            </div>

        </Box>
    );
}

