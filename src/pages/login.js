import React, { useState, useContext } from "react";
import { AccountContext } from "./Account";
import MainStructure from "@/components/MainStructure";
import Input from "@/components/Inputs/Input";
import PasswordInput from "@/components/Inputs/PasswordInput";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import Confirmed from "@/components/Confirmed";
import { Account } from "@/components/Account";
import StatusSession from "@/components/StatusSession";

export default function login({}) {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log("Acceso Exitoso", data);
      })
      .catch((err) => {
        console.error("Error en el Login", err);
      });
  };
  return (
    <>
      <MainStructure showCarrouselTop={false} showCarrouselBot={false}>
        <section className="flex justify-center py-20 w-full">
          <div className="rounded-3xl w-96 flex flex-col shadow-lg py-10 px-10">
            <div className="">
              <Input placeholder={"Ingrese su correo"}></Input>
              <PasswordInput
                placeholder={"Ingrese su contraseña"}
              ></PasswordInput>
            </div>
            <Account>
              <StatusSession></StatusSession>
              <h1 className=" text-6xl ">SignUp</h1>
              <Signup></Signup>
              <h1 className=" text-6xl ">Login</h1>
              <Login></Login>
              <h1 className=" text-6xl ">Verificar Cuenta</h1>
              <Confirmed></Confirmed>
            </Account>
            <div>
              <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                  value={email}
                  onChange={(event) => setemail(event.target.value)}
                ></input>
                <label htmlFor="password">Contraseña</label>
                <input
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                ></input>

                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        </section>
      </MainStructure>
    </>
  );
}
