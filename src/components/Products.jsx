
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPermissions,setLoaderToTrue,setLoaderTofalse,setproducts, unAuthenticate } from '../features/cart/cartSlice';
import { addTocart } from '../features/cart/cartSlice';
import { Button, Col, Container, Row, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Products() {



  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const loading = useSelector(state => state.loading);
  const permissions= useSelector(state => state.permissions);

 
 
 

  const unAutheticate = (e) => {
    e.preventDefault();
    dispatch(unAuthenticate());
    navigate('/login');
  };
  const fetchPermissionsFromApi = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getpermissions');
   
      dispatch(setPermissions(response.data)); 

   

     
    } catch (error) {
      console.error('Error fetching permissions', error);
    }
  };
 
  const fetchProductsFromApi = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/getproducts');
      dispatch(setLoaderTofalse());
      dispatch(setproducts(response.data)); 
      dispatch(setLoaderToTrue());


    } catch (error) {
      console.log('Error fetching products', error);
    }
  };

  useEffect(() => {
    fetchProductsFromApi();
    fetchPermissionsFromApi ();
  }, []);


  return (

    <Container fluid className="mt-5">
      <Button onClick={(e) => unAutheticate(e)} className="btn btn-secondary m-5">
        Logout
      </Button>
      <Button onClick={(e) => navigate('/cart')} className="btn btn-secondary m-5">
        My Cart
      </Button>

      {!loading ? (
      <h1  className='text-center  mt-4   '     >Cargando...</h1>
    ) :(

      <Row  className="   row-cols-lg-4  g-4">
      {products.map((item) => (
        <Col key={item.id}>
          <Card>
            <Card.Body>
            <Card.Img variant="top" src={item.image}    style={{  height: '300px' }}/>
              <Card.Title>{item.name}</Card.Title>
              
              <Button onClick={() => dispatch(addTocart(item))}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>







    )}










  










     
    </Container>
  );
}

export default Products;














