import { useContext, useEffect } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom"
import { UserContext } from "../../provider/UserContext";


export const ProtectedRoutes = () => {
    const navigate = useNavigate();
  
    const { user } = useContext(UserContext);
  
    
    return <>{user ? <Outlet /> : <span>Carregando...</span>}</>
  };
  