import React from "react";
import { observer } from "mobx-react-lite";
import { inject } from "mobx-react";
import { Button, Divider, Form, Grid, Segment, Checkbox } from 'semantic-ui-react'
import { useHistory, useLocation } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';



let Registro = inject("store")(observer( props => {

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const changeEmail = (e)=> {
        props.store.email = e.target.value
      }
    
      const changePass = (e)=> {
        props.store.password = e.target.value
      }
      const changeNombre = (e)=> {
        props.store.nombre = e.target.value
      }
    
      const changeApellido = (e)=> {
        props.store.apellido = e.target.value
      }

      const registrarse = () => {
          props.store.userPost();
          props.store.showHome =  true;
          setTimeout(()=>{
            history.replace(from);
            props.store.showHome =  false;
          },2000)
      }

    return !props.store.showHome ?
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
                    value={props.store.nombre}
                    onChange={(e)=> changeNombre(e)}
                />
                <Form.Input
                    icon='user'
                    iconPosition='left'
                    label='Apellido'
                    type='text'
                    placeholder='apellido'
                    value={props.store.apellido}
                    onChange={(e)=> changeApellido(e)}
                />
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
