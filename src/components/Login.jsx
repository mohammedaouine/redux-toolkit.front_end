import { useDispatch, useSelector } from "react-redux";
import { authenticate, unAuthenticate } from "../features/cart/cartSlice";
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";






function Login() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector(state => state.isAuthenticated);
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = e => {
    e.preventDefault();
 
    setForm({
      email: '',
      password: ''
    });
  };

  const autheticate = (e) => {
    e.preventDefault();
    dispatch(authenticate());
    navigate("/");
  };



  return (
    <>
   

 





      <Row className="bg-secondary  mt-5 ">
        <form className="d-flex justify-content-between p-4 " onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />

          <Button onClick={(e) => autheticate(e)} type="submit">Login</Button>
        </form>
      </Row>
    </>
  );
}

export default Login;



















