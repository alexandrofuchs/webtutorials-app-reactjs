import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor:'black',
    color: '#fff',    
  }
}));

export default useStyles;