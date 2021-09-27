import {
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
  } from "@material-ui/core";
  import React from "react";
  import { useDispatch } from "react-redux";
  import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { register } from "../actions/authActions";
import useForm from "../hooks/useForm";
  
  const RegisterScreen = () => {

    const [ formValues, handleInputChange ] = useForm({
        email: '',
        password: '',
        password2: '',
        firstName: '',
        lastName: '',
    });

    const { email, password, firstName, lastName, password2 } = formValues;
  
    const dispatch = useDispatch();
  
    const hadleRegister = (e) => {
      e.preventDefault();

      if(email.trim() === '' || !email.trim().includes('@')) {
          return Swal.fire('error', 'Email is not a valid', 'error');;
      }

      if(firstName.trim().length < 2){
          return Swal.fire('error', 'First name is not a valid', 'error');
      }

      if(lastName.trim().length < 2){
          return Swal.fire('error', 'Last name is not a valid', 'error');
      }

      if(password.trim().length < 6){
          return Swal.fire('error', 'Password should be at least 6 characters long', 'error');
      } else {
          if(password.trim() !== password2.trim()) {
          return Swal.fire('error', 'Passwords does not match', 'error');;
      }}

      dispatch(register(email, password, firstName, lastName));
    }
  
    return (
      <div className="bg-home">
        <div className="wrapper">
          <div className="content">
            <Typography gutterBottom variant="h3" align="center">
              Sign Up
            </Typography>
            <Grid>
              <Card
                style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto", background: "rgb(230 244 237 / 70%)" }}
              >
                <CardContent>
                  <form onSubmit={hadleRegister}>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          placeholder="Enter first name"
                          label="First Name"
                          variant="outlined"
                          name="firstName"
                          onChange={handleInputChange}
                          value={firstName}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField
                          placeholder="Enter last name"
                          label="Last Name"
                          variant="outlined"
                          name="lastName"
                          onChange={handleInputChange}
                          value={lastName}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="email"
                          placeholder="Enter email"
                          label="Email"
                          variant="outlined"
                          name="email"
                          onChange={handleInputChange}
                          value={email}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="password"
                          placeholder="Enter Password"
                          label="Password"
                          variant="outlined"
                          name="password"
                          onChange={handleInputChange}
                          value={password}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          type="password"
                          placeholder="Enter Password"
                          label="Confirm Password"
                          variant="outlined"
                          name="password2"
                          onChange={handleInputChange}
                          value={password2}
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          fullWidth
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                  <Grid item style={{ margin: '20px 0', textAlign: 'center'}}>
                      <Link to="/login">Do you have an account?. Log In</Link>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </div>
        </div>
      </div>
    );
  };
  
  export default RegisterScreen;
  