import React,{ useContext, useState} from "react";
import { AccountContext } from "./Account";

const confirmed= () =>{
    const [email, setemail] = useState("")
    const [Code, setCode] = useState("")

    const {verificated} = useContext(AccountContext)

    const onSubmit = (event) =>{
        event.preventDefault();

        verificated(email,Code)
        
    };


    return(
        <div>
            <form onSubmit={onSubmit}>

                <label htmlFor="email">Email</label>
                <input
                value={email}
                onChange={(event)=> setemail(event.target.value)}
                ></input>
                <label htmlFor="Code">Codigo de seguridad</label>
                <input
                value={Code}
                onChange={(event)=> setCode(event.target.value)}
                ></input>

                <button type="submit">Confirmar</button>

            </form>
        </div>
    );
};

export default confirmed;