import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router-dom';

import TabsPage from './Tabs';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function HomePage() {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            FACULTAD DE CIENCIAS PURAS Y NATURALES
          </Typography>
          <Button color="inherit" onClick={() => history.push('/login')}>INICIAR SESION</Button>
        </Toolbar>
      </AppBar>
      <TabsPage/>
    </div>
  );
}