import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const UseStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: "100%",
    height: "100%",
    margin: '2mm'
  },
  menu: {
    minWidth: 240,
    margin: '1mm'
  },
  menuTitle:{
    padding: '1mm',
    display: 'flex',
    flexDirection: 'row'
  },
  content: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    padding: theme.spacing(0.5),
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