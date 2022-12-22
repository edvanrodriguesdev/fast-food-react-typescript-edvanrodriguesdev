import React, { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { iLoginFormValues } from "../pages/Login";
import { iRegisterFormValues } from "../pages/Register";

interface iUserProviderProps{
  children: React.ReactNode;
}

interface iUser{
  id: string;
  name: string;
  email: string;
}

interface iLoginResponse{
  accessToken: string;
  user: iUser;
}

interface iRequestError{
  error: string;
}

interface iUserContext{
  user: iUser | null;
  userLogin: (formData: iLoginFormValues) => void;
  userRegister: (formData: iRegisterFormValues) => void;
  userLogout: () => void;
  globalLoading: boolean;
  loading: boolean;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem("@TOKEN");
    const idUser = localStorage.getItem("@USERID");

    async function authLogin() {
     
      if (token) {
        
            
            const response = await api.get(`users/${idUser}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            
            setUser(response.data);
            
            navigate("/dashboard");
           
            
          }     
    }
    authLogin();
  }, []);


  const userLogin = async (formData: iLoginFormValues) => {
    try {
      
      const response = await api.post<iLoginResponse>("login", formData);

      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);

      setUser(response.data.user);
      

      toast.success("Login realizado com sucesso!");
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>
      toast.error(currentError.response?.data.error);
      localStorage.removeItem("@TOKEN");
      localStorage.removeItem("@USERID");
    } finally {
      
    }
  };

  const userRegister = async (formData: iRegisterFormValues) => {
    try {
      
      const response = await api.post("users", formData);
      toast.success("Cadastro realizado com sucesso!");
    } catch (error) {
      const currentError = error as AxiosError<iRequestError>
      toast.error(currentError.response?.data.error);
    } finally {
      
    }
  };

  function userLogout() {
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    setUser(null);
    navigate("/");
  }
  

    return (
        <UserContext.Provider value={{ loading, userLogin, userRegister, userLogout, user, globalLoading }}>
          {children}
        </UserContext.Provider>
      );
}
