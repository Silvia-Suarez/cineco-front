import React, { useState, useContext } from "react";
import MainStructure from "@/components/MainStructure";
import Input from "@/components/Inputs/Input";
import PasswordInput from "@/components/Inputs/PasswordInput";
import Signup from "@/components/Signup";
import Confirmed from "@/components/Confirmed";
import { Account, AccountContext } from "@/components/Account";
import StatusSession from "@/components/StatusSession";
import { SecondaryButton } from "@/components/Buttons";

export default function LoginPage({}) {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const authenticate = useContext(AccountContext);

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
            <Account>
              <StatusSession></StatusSession>
              <h1 className="text-6xl">SignUp</h1>
              <Signup></Signup>
              <h1 className="text-6xl">Login</h1>
              <form
                onSubmit={onSubmit}
                className="flex-col pt-5 flex space-y-4"
              >
                <div>
                  <Input
                    value={email}
                    onChangeInput={SetEmail}
                    placeholder={"Ingrese su correo"}
                  ></Input>
                </div>
                {/* <label htmlFor="email">Email</label> */}
                {/* <input
                  value={email}
                  onChange={(event) => SetEmail(event.target.value)}
                ></input> */}
                <div>
                  <PasswordInput
                    value={password}
                    onChangeInput={SetPassword}
                    placeholder={"Ingrese su contraseña"}
                  ></PasswordInput>
                </div>
                {/* <label htmlFor="password">Contraseña</label>
                <input
                  value={password}
                  onChange={(event) => SetPassword(event.target.value)}
                ></input> */}
                <SecondaryButton type="submit">Ingresar</SecondaryButton>
                {/* <button>Login</button> */}
              </form>
              <h1 className="text-6xl">Verificar Cuenta</h1>
              <Confirmed></Confirmed>
            </Account>
          </div>
        </section>
      </MainStructure>
    </>
  );
}
