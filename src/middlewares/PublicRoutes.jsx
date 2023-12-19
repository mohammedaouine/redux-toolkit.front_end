import { Outlet, Navigate } from 'react-router-dom';

function PublicRoutes() {

    console.log(localStorage.getItem('token'));
    const token = localStorage.getItem('token');
    if(token){ return <Navigate to="/" />;}
    return <Outlet />;
}

export default PublicRoutes


