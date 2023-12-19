// ======================first step Wrapping ============================

// To use provider : import {UserProvider} from './UserContext'
// and wrap it with   
// <UserProvider >
 // <User  /> 
  //</UserProvider>
// ======================seconf  step getting values  ============================

// To get values : import  useUserContext  from './UserContext';
// +
//const [userOne,setuserOne]= useUserContext();
// 0r
//  const [
//     userOne,
//     setuserOne, 
//     userTwo,
//     setUserTwo
//    ]= useUserContext();

// 

//<div>{userOne}</div>
//<button onClick={()=>{setuserOne("hachaou")}}>click</button>


//=====================================useContext File========================

//there are 3 componenets 
//********************1***********************************************
//*************************userContext********************************** 
// const userContext =createContext(null);
// No exportation 



//********************2***********************************************
//************************ UserProvider********************************** 
// export const UserProvider = ({ children }) => {......
// to use it :
//import  import {UserProvider} from './UserContext'



//********************3***********************************************
//************************  useUserContextr********************************** 
//  const useUserContext = () => {
// to use it :
//import  useUserContext  from './UserContext';


import {useState ,createContext,useContext } from 'react'

const userContext =createContext(null);

export const UserProvider = ({ children }) => {

    const [userOne, setUserOne] = useState(0);
    const [userTwo, setUserTwo] = useState(999999);
    const [selectedProducts, setSelectedProducts] = useState([]);


    const handleProductClick = (product) => {
        const updatedSelectedProducts = [...selectedProducts, product];
        setSelectedProducts(updatedSelectedProducts);
        console.log("cart",updatedSelectedProducts);
 
      };





  
    return (
      <userContext.Provider value={[
        userOne,
        setUserOne,
        userTwo,
        setUserTwo ,

        selectedProducts, 
        setSelectedProducts,
        handleProductClick,
         
         ]}>
        {children}
      </userContext.Provider>
    );
  };

  const useUserContext = () => {
    const context = useContext(userContext);
    if (!context) {
      throw new Error("useUserContext must be used within a UserProvider");
    }
    return context;
  };


export default useUserContext

