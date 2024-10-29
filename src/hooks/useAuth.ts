import { useState, useEffect } from "react";
import Cookies from 'js-cookie' 

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);
  useEffect(() => {
  
    const token = Cookies.get("token");
    console.log(token);
    
    // Set isAuthenticated based on the existence of the token
    if(token ) {
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
    console.log(isAuthenticated);
    
  }, [setIsAuthenticated]);

  return { isAuthenticated , setIsAuthenticated};
};
