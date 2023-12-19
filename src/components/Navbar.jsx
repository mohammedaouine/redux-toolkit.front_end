import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Productos</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/cart">Cart</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" >Logout</Link>
          </li>



         





        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar