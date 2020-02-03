import React from "react";
import { inject } from "mobx-react";
import { observer } from "mobx-react-lite";
import { Button, CircularProgress } from "@material-ui/core";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Link } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Table as TableSemantic, Menu, Icon } from "semantic-ui-react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CardMedia from "@material-ui/core/CardMedia";

const Products = observer(props => {
  const handleClickOpen = (nombre, imagen, categoria) => {
    props.productStore.objModal = [];
    props.productStore.objModal.push({ nombre, imagen, categoria });
    console.log(props.productStore.objModal);
    props.productStore.openModal = true;
  };

  const handleClose = () => {
    props.productStore.openModal = false;
  };

  console.log(props.productStore);
  return (
    <div>
      <Grid>
      <Row end='xs' style={{margin:'30px'}}>
          <Link to="/home">
            <Button variant="contained" color="primary">
              Volver
            </Button>
          </Link>
        </Row>
        <Row
          style={{
            margin: "25px",
            display: "flex",
            justifyContent: "center",
            fontSize: "25px",
            fontFamily: "fantasy"
          }}
        >
          Productos del usuario {props.UserStore.email}
        </Row>

        {props.productStore.productos !== "" ?  
        (<Row center="xs" around="xs">
          <TableContainer component={Paper}>
            <Table style={{height:'300px', minWidth:'650px'}} aria-label="simple table">
              <TableHead>
                <TableRow style={{ backgroundColor: "black" }}>
                  <TableCell style={{ color: "#fff" }}>ID</TableCell>
                  <TableCell style={{ color: "#fff" }} align="right">
                    Categoría
                  </TableCell>
                  <TableCell style={{ color: "#fff" }} align="right">
                    Nombre Producto
                  </TableCell>
                  <TableCell style={{ color: "#fff" }} align="right">
                    Precio
                  </TableCell>
                  <TableCell style={{ color: "#fff" }} align="right">
                    Stock
                  </TableCell>
                  <TableCell style={{ color: "#fff" }} align="right">
                    Ver
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  props.productStore.productos
                      .filter((element, i) => i < 10)
                      .map((productos, index) => {
                        return (
                          <TableRow key={index}>
                            <TableCell component="th" scope="row">
                              {productos._id}
                            </TableCell>
                            <TableCell align="right">
                              {productos.category}
                            </TableCell>
                            <TableCell align="right">
                              {productos.productName}
                            </TableCell>
                            <TableCell align="right">
                              {productos.price}
                            </TableCell>
                            <TableCell align="right">
                              {productos.stock}
                            </TableCell>
                            <TableCell align="right">
                              <Button
                                variant="contained"
                                color="secondary"
                                onClick={() =>
                                  handleClickOpen(
                                    productos.productName,
                                    productos.image,
                                    productos.category
                                  )
                                }
                              >
                                Ver Producto
                              </Button>
                            </TableCell>
                          </TableRow>
                        );
                      })}
              </TableBody>
            </Table>
          </TableContainer>
          <Row end='xs' style={{margin:'30px'}}>
          <TableSemantic.Footer>
            <TableSemantic.Row>
              <TableSemantic.HeaderCell colSpan="3">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron left" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="chevron right" />
                  </Menu.Item>
                </Menu>
              </TableSemantic.HeaderCell>
            </TableSemantic.Row>
          </TableSemantic.Footer>
          </Row>
          </Row>)
        
        : 

          <div>
            <Row center="xs" around="xs">{'En unos instantes cargaremos los datos...'}</Row>
            <Row center="xs" around="xs"><CircularProgress style={{width:'60px', height:'60px', marginLeft:'0px', marginTop:'20px'}} /></Row>
          </div>
        
        }
          
        {props.productStore.objModal.length > 0 ? (
          <Dialog
            open={props.productStore.openModal}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {`Categoría: ${props.productStore.objModal[0].categoria}`}
            </DialogTitle>
            <DialogContent style={{ width: "600px", height: "350px" }}>
              <DialogContentText id="alert-dialog-description">
                <CardMedia
                  style={{ width: "100%", height: "300px" }}
                  image='https://images.pexels.com/photos/3586249/pexels-photo-3586249.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                  title="Contemplative Reptile"
                />
                {`Descripción del producto: ${props.productStore.objModal[0].nombre}`}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary" autoFocus>
                salir
              </Button>
            </DialogActions>
          </Dialog>
        ) : null}
      </Grid>
    </div>
  );
});

export default inject("UserStore", "productStore")(Products);
