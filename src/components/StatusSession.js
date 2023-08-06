import { useState,useContext,useEffect } from "react";
import { AccountContext } from "./Account";

const StatusSession = () =>{
    const [status, setstatus] = useState(false)    
    

    const {getSession, logout} = useContext(AccountContext);

    useEffect(() => {
      getSession()
        .then(session =>{
            console.log("Session: ",session);
            setstatus(true);
        })
        .catch(err => {
            console.error("Session Error", err)
         });
    }, []);

    return <div>{status ? <button onClick={logout}>Cerrar Sesion</button> : "Inicia Sesión"}</div>
}

export default StatusSession;