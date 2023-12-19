








import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRouted() {

  console.log(localStorage.getItem('token'));
  const token = localStorage.getItem('token');
  if(token){ return <Outlet />;}
  return <Navigate to="/login" />;
}

export default ProtectedRouted;











// import { Outlet, Navigate } from 'react-router-dom';

// function ProtectedRouted() {

//   console.log(localStorage.getItem('token'));
//   const token = localStorage.getItem('token');
//   if(token){ return <Outlet />;}
//   return <Navigate to="/login" />;
// }

// export default ProtectedRouted;






