import React from 'react';
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'
import { observer } from 'mobx-react-lite';
import { inject } from 'mobx-react';
import { useHistory, useLocation, Redirect } from 'react-router-dom';


const InicioSesion = observer((props) => {

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const changeEmail = (e)=> {
    props.store.email = e.target.value
  }

  const changePass = (e)=> {
    props.store.password = e.target.value
  }

  const login = async ()=> {
   try {
      const { data } = await props.store.loginPost();
      props.store.userToken = data.data.token;
      console.log(props.store.userToken);
    } catch (error) {
      console.log(error)
    }
  }

  return props.store.userToken == null ?
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
            value={props.store.email}
            onChange={(e)=> changeEmail(e)}
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            placeholder='password'
            value={props.store.password}
            onChange={(e)=> changePass(e)}

          />

          <Button content='Login' primary onClick={()=> login()} />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Registrarse' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>O</Divider>
  </Segment>
  :
  <Redirect to='/profile' />
})


export default (inject("store"))(InicioSesion);
