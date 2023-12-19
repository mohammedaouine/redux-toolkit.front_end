
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import Router from './components/Router';
import { Provider } from "react-redux";
 import { RouterProvider } from 'react-router';
 import store from "./app/store.js"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store ={store}>
  <RouterProvider router={Router} />
  </Provider>
);



