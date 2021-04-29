import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Link,
  Grid,
  Typography,
} from '@material-ui/core';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import ErrorAlert from '../../components/ErrorAlert';
import Api from '../../services/api';
import './styles.css';

const UserRegister = async (firstName, lastName, email, password) => {
  let res = await Api.post('/user', {
    firstName,
    lastName,
    email,
    userName: "",
    password,
  });
  return res;
}

export default function SignUp() {

  const [firstNameField, setFirstNameField] = useState({
    value: "",
    errors: null,
  });
  const [lastNameField, setLastNameField] = useState({
    value: "",
    errors: null,
  });
  const [emailField, setEmailField] = useState({
    value: "",
    errors: null,
  });
  const [passwordField, setPasswordField] = useState({
    value: "",
    errors: null,
  });
  const [repeatPasswordField, setRepeatPasswordField] = useState({
    value: "",
    errors: null,
  });

  const [error, setError] = useState(null);

  const onSubmit = async () => {

    let res = await UserRegister(firstNameField.value, lastNameField.value, emailField.value, passwordField.value);

    console.log(res);

    if (res.error) {
      setError(res.error.title)
      if (res.error.errors) {
        if (res.error.errors.FirstName) { setFirstNameField({ errors: res.error.errors.FirstName }) };
        if (res.error.errors.LastName) { setLastNameField({ errors: res.error.errors.LastName }); }
        if (res.error.errors.Email) { setEmailField({ errors: res.error.errors.Email }); }
        if (res.error.errors.Password) { setPasswordField({ value: "", errors: res.error.errors.Password }); }
      }
      return;
    }
  }

  return (
    <Card className="signUpCard">
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <CardContent className="signUpCardContent">
        <ErrorAlert message={error ? error : ""} />
        <form className={"form"} noValidate>
          <RequiredTextField
            id="firstName"
            label="First Name"
            autoFocus={true}
            onChange={event => setFirstNameField({ value: event.target.value })}
            error={firstNameField.errors ? firstNameField.errors.map(e => e) : ""}
          />
          <RequiredTextField
            id="lastName"
            label="Last Name"
            onChange={event => setLastNameField({ value: event.target.value })}
            error={lastNameField.errors ? lastNameField.errors.map(e => e) : ""}
          />
          <RequiredTextField
            id="email"
            label="Email Address"
            onChange={event => setEmailField({ value: event.target.value })}
            error={emailField.errors ? emailField.errors.map(e => e) : ""}
          />
          <RequiredTextField
            id="password"
            label="Password"
            onChange={event => setPasswordField({ value: event.target.value })}
            error={passwordField.errors ? passwordField.errors.map(e => e) : ""}
          />
          <RequiredTextField
            id="repeatPassword"
            autoComplete="password"
            label="Repeat Password"
            onChange={event => setRepeatPasswordField({ value: event.target.value })}
            error={repeatPasswordField.errors ? repeatPasswordField.errors.map(e => e) : ""}
          />
        </form>
      </CardContent>
      <CardActions className="signUpCardActions">
        <Button
          type="button"
          className={"submit"}
          fullWidth
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Sign Up
          </Button>
      </CardActions>

      <Grid container justify="flex-end">
        <Grid item>
          <Link href="/signin" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>

    </Card>
    // <Box mt={5}>
    //   <Copyright />
    // </Box>
    // </>
  );
}