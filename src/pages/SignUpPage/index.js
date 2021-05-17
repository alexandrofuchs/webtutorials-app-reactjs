import React, {  useState } from 'react';
import {
  CardActions,
  CardContent,
  Button,
  Grid,
} from '@material-ui/core';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import ErrorAlert from '../../components/ErrorAlert';
import Api from '../../services/api';
import './styles.css';
import { useApp } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';

const TryRegister = async (firstName, lastName, email, password) => {
  let res = await Api.post('/user/register', {
    firstName,
    lastName,
    email,
    password,
  });
  return res;
}

export default function SignUpPage() {

  const {error, setError, setLoading  } = useApp();
 
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

  const onSubmit = async () => {
     setLoading(true)

    let res = await TryRegister(firstNameField.value, lastNameField.value, emailField.value, passwordField.value);
    
    if (res.error) {         
      setError(res.error);
      if (res.error.errors) {
        if (res.error.errors.FirstName) { setFirstNameField({ errors: res.error.errors.FirstName }) };
        if (res.error.errors.LastName) { setLastNameField({ errors: res.error.errors.LastName }); }
        if (res.error.errors.Email) { setEmailField({ errors: res.error.errors.Email }); }
        if (res.error.errors.Password) { setPasswordField({ value: "", errors: res.error.errors.Password }); }
      }      
    }else{ 
      setLoading(false)
      window.location = '/signin'
    }
    setLoading(false)
    
 
  }

  return (
    <div className={"root-SignUpPage"}>
      <h1>Criar conta</h1>
      <CardContent className="signUpCardContent">
        <ErrorAlert message={error ? error : ""} />
        <form className={"form"} noValidate>
          <RequiredTextField
            id="firstName"
            label="Nome"
            autoFocus={true}
            onChange={event => setFirstNameField({ value: event.target.value })}
            error={firstNameField.errors ? firstNameField.errors.map(e => e) : ""}
          />
          <RequiredTextField
            id="lastName"
            label="Sobrenome"
            onChange={event => setLastNameField({ value: event.target.value })}
            error={lastNameField.errors ? lastNameField.errors.map(e => e) : ""}
          />
          <RequiredTextField
            id="email"
            label="Email"
            onChange={event => setEmailField({ value: event.target.value })}
            error={emailField.errors ? emailField.errors.map(e => e) : ""}
          />
          <RequiredTextField
            id="password"
            label="Senha"
            onChange={event => setPasswordField({ value: event.target.value })}
            error={passwordField.errors ? passwordField.errors.map(e => e) : ""}
          />
          <RequiredTextField
            id="password"
            autoComplete="password"
            label="Repetir senha"
            onChange={event => setRepeatPasswordField({ value: event.target.value })}
            error={repeatPasswordField.errors ? repeatPasswordField.errors.map(e => e) : ""}
          />
        </form>
      </CardContent>
      <CardActions className="signUpCardActions">
        <Button
          fullWidth
          variant="default"
          onClick={onSubmit}
        >
          Sign Up
          </Button>
      </CardActions>
      <Grid container justify="flex-end">
        <Grid item>
          <Link to="/signin" variant="body2">
            Já tem uma conta? Entrar
          </Link>
        </Grid>
      </Grid>

    </div>
   

  );
}