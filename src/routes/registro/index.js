import React from "react";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import { Button, Divider, Form, Grid, Segment, Checkbox } from 'semantic-ui-react'
import { useHistory, useLocation } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';



let Registro = inject('UserStore')(observer( props => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const changeEmail = (e)=> {
        props.UserStore.email = e.target.value
      }
    
      const changePass = (e)=> {
        props.UserStore.password = e.target.value
      }
      const changeNombre = (e)=> {
        props.UserStore.nombre = e.target.value
      }
    
      const changeApellido = (e)=> {
        props.UserStore.apellido = e.target.value
      }

      const registrarse = () => {
          props.UserStore.userPost();
          props.UserStore.showHome =  true;
          setTimeout(()=>{
            history.replace(from);
            props.UserStore.showHome =  false;
          },2000)
      }

    return !props.UserStore.showHome ?
    <Segment placeholder>
        <Grid columns={2} relaxed='very' stackable>
            <Grid.Column verticalAlign='middle'>
                <div>
                    Si desea registrarse debe completar el formulario. Para mayor
                    seguridad una vez registrado debe iniciar sesión.
                </div>
            </Grid.Column>

            <Grid.Column>
                <Form>
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Nombre'
                    placeholder='Nombre'
                    type="text"
                    value={props.UserStore.nombre}
                    onChange={(e)=> changeNombre(e)}
                />
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Apellido'
                    type='text'
                    placeholder='apellido'
                    value={props.UserStore.apellido}
                    onChange={(e)=> changeApellido(e)}
                />
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
                <Form.Field>
                    <Checkbox label='Acepto los términos y condiciones' />
                </Form.Field>

                <Button content='Registarse'  icon='signup' positive onClick={()=> registrarse()} />
                </Form>
            </Grid.Column>
        </Grid>

        <Divider vertical></Divider>
  </Segment>
        :
        <Segment style={{margin:'auto'}} placeholder>
            <CircularProgress style={{margin:'auto'}} />
            <div style={{margin:'auto'}}>Espere unos instantes, lo estamos redirigiendo...</div>
        </Segment>
  })
);

export default Registro;
