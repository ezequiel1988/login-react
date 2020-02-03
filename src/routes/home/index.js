import React from 'react';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';
import { Button } from '@material-ui/core';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const UserProfile = observer((props) => {
  console.log(props)

  let mostrarProductos = () => {
    props.productStore.obtenerProductos();
  }

  return (
    <div >
      <Grid>
        <Row center="xs" around="xs" style={{fontSize:'16px', fontWeight:'bold', marginTop:'20px'}}>Bienvenido al HOME usuario {props.UserStore.email}</Row>
        <Row center="xs" around="xs" style={{fontSize:'16px', fontWeight:'bold', marginTop:'20px', marginBottom:'50px'}}>Sitio en construcción, sepa diculpar las molestias...</Row>
        <Row center="xs" around="xs">
          <Link to='/home/products'>
            <Button variant="contained" color="primary" onClick={()=> mostrarProductos()}>         
              Ir a productos
            </Button>
          </Link>
        </Row>
        
      </Grid>
    </div>
  );
})

export default inject('UserStore', 'productStore')(UserProfile);
