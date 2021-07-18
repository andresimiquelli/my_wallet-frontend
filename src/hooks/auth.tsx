import React, { useState, createContext, useContext} from "react";

interface IAuthContext {
    logged: boolean;
    login(email: string, password: string): void;
    logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@my-wallet:logged');
        return !!isLogged;
    });

    const login = (email: string, password: string) => {
        if(email === 'andresimiquelli@hotmail.com' && password === '123456'){
            localStorage.setItem('@my-wallet:logged', 'true');
            setLogged(true);
        }else{
            alert("Usuário ou senha inválidos!");
        }
    }

    const logout = () => {
        localStorage.removeItem('@my-wallet:logged');
        setLogged(false);
    }

    return (
        <AuthContext.Provider value={{logged, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);
    return context;
}

export {AuthProvider, useAuth};