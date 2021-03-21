import React from 'react';
import {
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
} from '@material-ui/core';
import SimpleCard from '../../components/Card';
import RequiredTextField from '../../components/TextFields/RequiredTextField';
import useStyles from './styles';
import { useAuthenticate } from '../../contexts/UserContext';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Web Streaming Application
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignInPage() {

  const { signIn } = useAuthenticate()
  const classes = useStyles();

  const onSubmit = () => {
    signIn("af@mail.com", "12345678");
}

  return (
    <SimpleCard>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <form className={classes.form} noValidate>
          <RequiredTextField
            id={"email"}
            label={"Email"}
            onClick={() => { }}
          />
          <RequiredTextField
            id={"password"}
            label={"Password"}
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
            className={classes.submit}
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
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </SimpleCard>

  );
}