import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import { CartContext } from "./CartContext";


export const AuthContext= createContext()

export const useAuthContext = () => {
    return useContext(AuthContext)
}



export const AuthProvider = ({children}) => {

    const {Cart, emptyCart} = useContext(CartContext)
    
    const [user, setUser] = useState(null)

    useEffect(()=>{
        auth.onAuthStateChanged((usuarioFirebase)=>{
          
          setUser(usuarioFirebase)
        })
      },[])
    
      const logOut=()=>{
        if(Cart.length >= 1){
          emptyCart()
        }
        
        auth.signOut();
      }

    return(
        <AuthContext.Provider value={{user,setUser, logOut}}>
            {children}

        </AuthContext.Provider>
        
    )
}