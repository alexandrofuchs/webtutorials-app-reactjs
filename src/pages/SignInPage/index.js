import React, { useState } from 'react';
import {
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
} from '@material-ui/core';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import './styles.css';
import { useAuthenticate } from '../../contexts/UserContext';

export default function SignInPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInError } = useAuthenticate()

  const onSubmit = async () => {
    const res = await signIn(email, password);
      console.log(res);
  }

  return (
    <>
      <div className={"root-SignInPage"}>
        <h1>Acessar conta</h1>
        <div className={"main-SignInPage"}>
          <form noValidate>
            <RequiredTextField
              id={"email"}
              label={"Email"}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              onClick={() => { }}
            />
            <RequiredTextField
              id={"password"}
              label={"Password"}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              onClick={() => { }}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={""}
              onClick={onSubmit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
          <text>{signInError}</text>
        </div>
      </div>
    </>
  );
}