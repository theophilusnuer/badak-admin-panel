import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from "@mui/material/Button";
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function UserRequest() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
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
            marginTop: "50px",
            padding: '20px',
        }}>
            <div>

                <div className="flex justify-center font-bold text-blue-700 text-2xl">
                    <p>Submit a request</p>
                </div>
                <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Fullname</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="fullname"
                    />
                </FormControl>
                <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Name of School</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="name-of-school"
                    />
                </FormControl>
                <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Programme</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        label="programme"
                    />
                </FormControl>
                <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                    <InputLabel id="demo-simple-select-label">Certification</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="certification"
                        onChange={handleChange}
                    >
                        <MenuItem value={"Diploma"} >Diploma</MenuItem>
                        <MenuItem value={"HND"} >HND</MenuItem>
                        <MenuItem value={"Degree"} >Degree</MenuItem>
                        <MenuItem value={"MSC"} >MSC</MenuItem>
                       
                    </Select>
                </FormControl>
                <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        value={"NOT VERIFIED"}
                    />
                </FormControl>
                <Button style={{ marginBottom: "20px" }} sx={{ bgcolor: "#1d4ed8", width: "52ch" }} variant="contained">Submit</Button>
            </div>

        </Box>
    );
}

