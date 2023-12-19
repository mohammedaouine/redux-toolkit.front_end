import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromcart } from '../features/cart/cartSlice';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

  const shoppingCart = useSelector(state => state.shoppingCart);
  const grandTotal = useSelector(state => state.grandTotal);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromcart(id));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity(id));
  };

  return (
    <div>
      <Button className="m-4" onClick={() => navigate("/")} type="submit">Back</Button>
      <p className='text-center mt-4 border bg-primary'>Cart</p>
      <h2 className='text-center mt-4 border bg-secondary'>Total a pagar: {grandTotal} $</h2>

      {shoppingCart.length === 0 ? (
        <p className='text-center mt-4'>The cart is empty.</p>
      ) : (
        <Container fluid>
          <Row>
            <Col lg={12}>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {shoppingCart.map(item => (
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
                      </td>
                      <td>{item.name}</td>
                      <td>
                        <button onClick={() => handleDecreaseQuantity(item.id)} className="btn btn-secondary m-1">-</button>
                        {item.quantity}
                        <button onClick={() => handleIncreaseQuantity(item.id)} className="btn btn-secondary m-1">+</button>
                      </td>
                      <td>${item.price}</td>
                      <td>${item.totalPrice}</td>
                      <td>
                        <button onClick={() => handleRemove(item.id)} className="btn btn-danger">Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}

export default Cart;
