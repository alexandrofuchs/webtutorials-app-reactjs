import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const UseStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    height: "100%",
    margin: '1mm'
  },
  menu: {
    minWidth: 240,
    margin: '1mm'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#fff'
  },
  form:{
    display: 'flex',
    flexDirection : 'column'
  },
  itemList:{
    display: 'flex',
    flexDirection : 'row',
    margin: '2mm',
    padding: '1mm'
  }
}));

export default UseStyles;