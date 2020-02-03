import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import 'semantic-ui-css/semantic.min.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import InicioSesion from './routes/inicioSesion';
import { inject } from 'mobx-react';
import Registro from './routes/registro';
import UserProfile from './routes/home/index';
import Products from './routes/products/product';



function App(props) {

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
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
            />
            <Route
            exact
            path="/register"
            render={() => <Registro />}
            />
            <Route
            exact
            path="/home"
            render={() => <UserProfile />}
            />
            <Route
            exact
            path="/home/products"
            render={() => <Products />}
            />
            
      </Switch>
    </Router>
  );
}


export default inject("UserStore")(App);
