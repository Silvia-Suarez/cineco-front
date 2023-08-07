import React,{ useState, useContext} from "react";
import { AccountContext } from "./Account";

const Login= () =>{

    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")

    const {authenticate} = useContext(AccountContext)

    const onSubmit = (event) =>{
        event.preventDefault();

        authenticate(email,password)
         .then(data => {
            console.log("Acceso Exitoso", data);
         })
         .catch(err => {
            console.error("Error en el Login", err)
         });
    };


    return(
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email" >Email</label>
                <input  
                value={email}
                onChange={(event)=> setemail(event.target.value)}
                ></input>
                <label htmlFor="password">Contraseña</label>
                <input
                value={password}
                onChange={(event)=> setPassword(event.target.value)}
                ></input>

                <button type="submit">Login</button>

            </form>
        </div>
    );
};

export default Login;