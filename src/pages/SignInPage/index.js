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
import ErrorAlert from '../../components/ErrorAlert';
import { Redirect } from 'react-router';

export default function SignInPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn, signInError } = useAuthenticate("")

  const onSubmit = async () => {
    const res = await signIn(email, password);
      console.log(res);
      <Redirect to="/"/>
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
              label="Lembrar me"
            />
            <ErrorAlert message={signInError}/>
            <Button
              type="button"
              fullWidth
              disabled={email.length < 3 || password.length < 8 }
              className="submit-SignInPage"
              onClick={onSubmit}
            >
              Entrar
          </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Esqueceu sua senha?
              </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Não possui uma conta? Cadastre-se aqui!"}
                </Link>
              </Grid>
            </Grid>
          </form>          
        </div>
      </div>
    </>
  );
}