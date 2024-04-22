import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const Register = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch("http://localhost:4000/api/user/", {
      method: "POST",
      body: JSON.stringify({
        firstName: formData.get("firstName"),
        lastName: formData.get("lastName"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    console.log(response);
    //clear input
    event.target.reset();
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
      <div>
        <div className="flex justify-center font-bold text-blue-700 text-2xl">
          <p>Sign Up</p>
        </div>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object({
            firstname: Yup.string().required("First name is required"),
            lastname: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Password is required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Confirm password is required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <form onSubmit={Register}>
            <div className="flex flex-center flex-col items-center content-center justify-center">
              {" "}
              <Field name="firstName">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "25px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                  >
                    <InputLabel htmlFor="firstname">First Name</InputLabel>
                    <OutlinedInput
                      id="firstName"
                      label="First Name"
                      {...field}
                    />
                    <ErrorMessage
                      name="firstname"
                      component="div"
                      className="text-red-500"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="lastName">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "25px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                  >
                    <InputLabel htmlFor="lastname">Last Name</InputLabel>
                    <OutlinedInput id="lastName" label="Last Name" {...field} />
                    <ErrorMessage
                      name="lastname"
                      component="div"
                      className="text-red-500"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "25px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                  >
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <OutlinedInput id="email" label="Email" {...field} />
                    <ErrorMessage name="email">
                      {(msg) => <div className="text-red-500">{msg}</div>}
                    </ErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="password">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "20px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <OutlinedInput
                      id="password"
                      type={showPassword ? "text" : "password"}
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
                      {...field}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                  </FormControl>
                )}
              </Field>
              <Field name="confirmPassword">
                {({ field, meta }) => (
                  <FormControl
                    style={{ marginBottom: "20px" }}
                    fullWidth
                    sx={{ m: 1, width: "46ch" }}
                    variant="outlined"
                  >
                    <InputLabel htmlFor="confirmPassword">
                      Confirm password
                    </InputLabel>
                    <OutlinedInput
                      id="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      {...field}
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-red-500"
                    />
                  </FormControl>
                )}
              </Field>
              <Button
                style={{ marginBottom: "20px" }}
                sx={{ bgcolor: "#1d4ed8", width: "52ch" }}
                variant="contained"
                type="submit"
              >
                Register
              </Button>
              <div className="flex justify-center">
                Already have an account?
                <Link to="/">
                  <p className="text-blue-700 ml-2">Login Here</p>
                </Link>
              </div>
            </div>
          </form>
        </Formik>
      </div>
    </Box>
  );
};

export default Signup;
