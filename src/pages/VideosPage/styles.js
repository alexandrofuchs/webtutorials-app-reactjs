import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    height: "100%"
  },
  menu: {
    minWidth: 240
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#fff'
  },
  form:{
    display: 'flex',
    flexDirection : 'column'
  }
}));

export default UseStyles;