import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { emailAndPasswordLogin, googleLogin } from "../actions/authActions";
import useForm from "../hooks/useForm";

const LoginScreen = () => {

  const [ formValues, handleInputChange ] = useForm({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
});

const { email, password} = formValues;

  const dispatch = useDispatch();

  const hadleGoogleLogin = () => {
    dispatch(googleLogin())
  }

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
  
      if(password.trim().length < 6){
          return Swal.fire('error', 'Password should be at least 6 characters long', 'error');
      }
  
      dispatch(emailAndPasswordLogin(email, password))
    } catch (error) {
      Swal.fire('error', error.message, 'error')
    }
  }

  return (
    <div className="bg-home">
      <div className="wrapper">
        <div className="content">
          <Typography gutterBottom variant="h3" align="center">
            Sign In
          </Typography>
          <Grid>
            <Card
              style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto", background: "rgb(230 244 237 / 70%)" }}
            >
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12}>
                      <TextField
                        type="email"
                        placeholder="Enter email"
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
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
                        value={password}
                        onChange={handleInputChange}
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
                <hr />
                    <GoogleButton onClick={hadleGoogleLogin} style={{ width: '100%' }} />
                <Grid item style={{ margin: '20px 0', textAlign: 'center'}}>
                    <Link to="/register">If you do not have an account. Register</Link>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
