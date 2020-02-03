import React from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import { inject } from 'mobx-react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';



const InicioSesion = observer((props) => {

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const changeEmail = (e)=> {
    props.UserStore.email = e.target.value
  }

  const changePass = (e)=> {
    props.UserStore.password = e.target.value
  }

  const registrarse = () => {
    history.push('register');
  }

  const login = async ()=> {
    props.UserStore.loginPost();
    history.replace(from);

  }

  return (
    props.UserStore.userToken == null ?
    <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Email'
            placeholder='Email'
            type="email"
            value={props.UserStore.email}
            onChange={(e)=> changeEmail(e)}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            placeholder='password'
            value={props.UserStore.password}
            onChange={(e)=> changePass(e)}

          />

          <Button content='Login' primary onClick={()=> login()} />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Registrarse' icon='signup' positive onClick={()=> registrarse()} size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>O</Divider>
  </Segment>

  :
    <Redirect to='/home' />
  )
})


export default (inject("UserStore"))(InicioSesion);
