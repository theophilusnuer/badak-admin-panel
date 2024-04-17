import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from "@mui/material/Button";
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function UserRequest() {
    const validationSchema = Yup.object({
        fullname: Yup.string().required('Fullname is required'),
        nameOfSchool: Yup.string().required('Name of School is required'),
        programme: Yup.string().required('Programme is required'),
        certification: Yup.string().required('Certification is required'),

    });

    const formik = useFormik({
        initialValues: {
            fullname: '',
            nameOfSchool: '',
            programme: '',
            certification: '',

        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(values);
        },
    });

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
                <form onSubmit={formik.handleSubmit}>
                    <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Fullname</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="fullname"
                            name="fullname"
                            value={formik.values.fullname}
                            onChange={formik.handleChange}
                            error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                        />
                        {formik.touched.fullname && formik.errors.fullname && (
                            <div className="error">{formik.errors.fullname}</div>
                        )}
                    </FormControl>
                    <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Name of School</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="name-of-school"
                            name="nameOfSchool"
                            value={formik.values.nameOfSchool}
                            onChange={formik.handleChange}
                            error={formik.touched.nameOfSchool && Boolean(formik.errors.nameOfSchool)}
                        />
                        {formik.touched.nameOfSchool && formik.errors.nameOfSchool && (
                            <div className="error">{formik.errors.nameOfSchool}</div>
                        )}
                    </FormControl>
                    <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Programme</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            label="programme"
                            name="programme"
                            value={formik.values.programme}
                            onChange={formik.handleChange}
                            error={formik.touched.programme && Boolean(formik.errors.programme)}
                        />
                        {formik.touched.programme && formik.errors.programme && (
                            <div className="error">{formik.errors.programme}</div>
                        )}
                    </FormControl>
                    <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                        <InputLabel id="demo-simple-select-label">Certification</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formik.values.age}
                            label="certification"
                            onChange={formik.handleChange}
                        >
                            <MenuItem value={"Diploma"}>Diploma</MenuItem>
                            <MenuItem value={"HND"}>HND</MenuItem>
                            <MenuItem value={"Degree"}>Degree</MenuItem>
                            <MenuItem value={"MSC"}>MSC</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl style={{ marginBottom: "25px" }} fullWidth sx={{ m: 1, width: "46ch" }}>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            value={"NOT VERIFIED"}
                        />
                    </FormControl>
                    <Button type="submit" style={{ marginBottom: "20px" }} sx={{ bgcolor: "#1d4ed8", width: "52ch" }} variant="contained">Submit</Button>
                </form>
            </div>

        </Box>
    );
}