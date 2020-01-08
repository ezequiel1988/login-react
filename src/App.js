import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import InicioSesion from './routes/inicioSesion';
import UserProfile from './routes/home/index';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Home } from '@material-ui/icons';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { AccountCircle } from '@material-ui/icons';
import { inject } from 'mobx-react';








function App(props) {

  console.log(props.store.userToken)
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  let buttonHome = () => {
    return (
      <List>
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
            <Link to="/profile">Perfil</Link>
        </ListItem>
      </List>
    )
  }

  let inicioButton = ()=> {
    return(
      <List>
        <ListItem button>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          <Link to="/">Iniciar Sesion</Link>
        </ListItem>
      </List>
    )
  }
  const sideList = (side, token) => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
    {
      token != null ?
        buttonHome()
        :
        inicioButton()
    }
    </div>
  );
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer("left", true)} edge="start"  color="inherit" aria-label="menu">
            <MenuIcon  />
          </IconButton>
          <Typography variant="h6" >
            Sistema de gestión
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
          <Route 
            exact
            path="/"
            render={() => <InicioSesion />}
            />
           
          <Route
            exact
            path="/profile"
            render={() => <UserProfile />}
            />
      </Switch>

    <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left', props.store.userToken)}
      </Drawer>
    </Router>
  );
}

export default (inject("store"))(App);
