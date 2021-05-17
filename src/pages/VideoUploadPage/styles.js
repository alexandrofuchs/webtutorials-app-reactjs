import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',   
  },
  card:{  
    display: 'flex', 
    justifyContent: 'center',
    minWidth: 300,
    minHeight: 300,
  },
  cardContent:{
    display:'flex',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  textField:{
    width: '100%',
  },
  button: {
    width: '100%',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor:'black',
    color: '#fff',    
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

export default useStyles;