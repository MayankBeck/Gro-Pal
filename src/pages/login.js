import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import loginIcon from "../images/login.svg";

//custom-hook
import useForm from "../hooks/forms";
import { loginAction } from "../redux/actions/authActions";

const useStyles = makeStyles((theme) => ({
  ...theme.spreadThis,
  title: {
    margin: "10px 0px 10px 0px",
  },
   loginIcon : {
    height: 80,
    width: 100,
  },
}));

export default function Login() {
  const classes = useStyles();

  const { loading, serverError, errors, signUpSuccess } = useSelector(
    (state) => state.UI
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandle = (props) => {
    const userData = {
      email: inputs.email,
      password: inputs.password,
    };
    dispatch(loginAction(userData, history));
  };

  const { inputs, handleInputChange, handleSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    loginHandle
  );

  let incorrectCredentialsError = null;
  let verifyEmailError = null;
  if (errors) {
    if (errors.includes("Invalid email/password"))
      incorrectCredentialsError = errors;
    if (errors.includes("Verify your email")) verifyEmailError = errors;
  }

  return (
    <Grid container className={classes.form}>
      <Grid item sm />
      <Grid item sm style={{ marginBottom: 34 }}>
        <img
          src={loginIcon}
          alt="loginIcon"
          className={classes.loginIcon}
        />
        <Typography variant="h3" className={classes.title}>
         User  Login 
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          {signUpSuccess && (
            <Typography variant="body2" className={classes.customSuccess}>
              Account registered successfully, please verify your Email before
              logging-in
            </Typography>
          )}
          <TextField
            id="email"
            name="email"
            label="Email"
            className={classes.textField}
            onChange={handleInputChange}
            value={inputs.email}
            fullWidth
          />
          <TextField
            id="password"
            name="password"
            type="password"
            label="Password"
            className={classes.textField}
            onChange={handleInputChange}
            value={inputs.password}
            fullWidth
          />
          {serverError && (
            <Typography variant="body2" className={classes.customError}>
              {"server error, please try again"}
            </Typography>
          )}

          {verifyEmailError && (
            <Typography variant="body2" className={classes.customError}>
              {verifyEmailError}
            </Typography>
          )}

          {incorrectCredentialsError && (
            <Typography variant="body2" className={classes.customError}>
              {incorrectCredentialsError}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={loading}
          >
            Login
            {loading && (
              <CircularProgress size={30} className={classes.progress} />
            )}
          </Button>
          <br />
          <small className={classes.small}>
            don't have an account ? sign up <Link to="/register">here</Link>
          </small>
        </form>
      </Grid>
      <Grid item sm />
    </Grid>
  );
}
