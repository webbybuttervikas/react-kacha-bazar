import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import "../Component/Navbar.css";
import mainlogo from "./images/Logo-1.png";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { data } from "./context/Context";

const Navbarr = ({}) => {


  const {cart,setShow,icon, handleChange, handleRemove, price} = useContext(data)
  
  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  return (
    <div>
      <Navbar className="navbar-color" expand="lg">
        <Container className="">
          <Navbar.Brand onClick={() => setShow(true)} href="#home">
            <img src={mainlogo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-center"
          >
            <Nav className="me-center">
              <Form className="d-flex navbar-search">
                <Form.Control
                  type="search"
                  placeholder="Search for Product (e.g. fish,apple)"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
          <div>
            <i className="icon-col fa-regular fa-bell fa-2x mx-4 "></i>
            <i
              onClick={() => setShow(false)}
              className=" icon-col fa-solid fa-cart-shopping fa-2x mx-4"
            ></i>
            <span>
              <i className=" icon-col fas fa-user fa-2x mx-4"></i>
            </span>

            <button
              type="button"
              class="btn btn-primary "
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={icon} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Cart
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    {cart.map((item) => (
                      <div className="cart_box" key={item.id}>
        <div className="">
          <p>{item.product}</p>
        </div>
        <div>
          <button className="btn btn-primary"  onClick={() => handleChange(item, 1)}>+</button>
          <button type="button" className="btn btn-outline-secondary">{item.quantity}</button>
          <button className="btn btn-primary" onClick={() => handleChange(item, -1)}>-</button>
        </div>
        <div>
          <button type="button" className="btn btn-outline-secondary mx-5">{item.price} $</button>
          <button type="button" className="btn btn-danger mx-5" onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      </div>
    ))}

    <div className="total">
      <span className="text111">Total Price of your Cart</span>
      <span className="text111 mx-5">$  {price}</span>
    </div>
                    
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
