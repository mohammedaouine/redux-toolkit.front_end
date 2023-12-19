import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useNavigate } from 'react-router-dom';
import axios from "axios";









const initialState = {

  loading:false,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  permissions:{},
  products:[],
  shoppingCart: [],
  grandTotal: 0,
};







const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {




    authenticate: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem("token", 12345678);
    
  

    
    },

    unAuthenticate: (state, action) => {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
   

      
    
    },


    setPermissions: (state, action) => {

      state.permissions=action.payload;
 
    },
 
   
    setproducts: (state, action) => {

      state.products=action.payload;
 
    },
 
 


    setLoaderToTrue: (state, action) => {
      state.loading= true;
    
    },


    setLoaderTofalse: (state, action) => {
      state.loading= false;
  
    
    },


    addTocart: (state, action) => {
      const productToAdd = action.payload;
    
  
      const existingProduct = state.shoppingCart.find(item => item.id === productToAdd.id);
    
      if (existingProduct) {
     
        existingProduct.quantity += 1;
        existingProduct.totalPrice = existingProduct.price * existingProduct.quantity;
      } else {
    
        const newProduct = {
          ...productToAdd,
          quantity: 1,
          totalPrice: productToAdd.price
        };
        state.shoppingCart.push(newProduct);
      }
      state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);
   
    },
    
    removeFromcart: (state, action) => {
      console.log("from remove function in slice");
      state.shoppingCart = state.shoppingCart.filter(
        (item) => item.id !== action.payload
      );
      state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);
    },

    
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.shoppingCart.find(item => item.id === productId);
      if (product) {
        if (product.quantity < 10) { 
          product.quantity += 1;
          product.totalPrice = product.price * product.quantity;
        }
      }
      state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);
    },


    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.shoppingCart.find(item => item.id === productId);
      if (product) {
        if (product.quantity > 1) { 
          product.quantity -= 1;
          product.totalPrice = product.price * product.quantity;
        } 
      }
      state.grandTotal = state.shoppingCart.reduce((acc, item) => acc + item.totalPrice, 0);
    }


    
  },
});

export const { 
  setPermissions,
  setLoaderToTrue,
  setLoaderTofalse,
  setproducts,
  increaseQuantity, 
  decreaseQuantity,
  authenticate,
   unAuthenticate, 
   addTocart, 
   removeFromcart
   } = cartSlice.actions;



export default cartSlice.reducer;












