import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const UseStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: "90%",
    height: "100%"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  menu: {
    minWidth: 240
  },
  itemList:{
    display: 'flex',
    flexDirection: 'row'
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