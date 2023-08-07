import React, { useState } from "react";
import UserPool from "@/pages/UserPool";
import Input from "./Inputs/Input";
import PasswordInput from "./Inputs/PasswordInput";
import { SecondaryButton } from "./Buttons";
const Signup = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="flex-col flex space-y-4">
        <div className="pt-5">
          <Input
            value={email}
            onChange={(event) => SetEmail(event.target.value)}
            placeholder={"Ingrese su correo"}
          ></Input>
        </div>
        <div>
          <PasswordInput
            value={password}
            onChange={(event) => SetPassword(event.target.value)}
            placeholder={"Ingrese una contraseña"}
          ></PasswordInput>
        </div>
        <div>
          <SecondaryButton type={"submit"}>Registrarse</SecondaryButton>
        </div>
      </form>
    </div>
  );
};

export default Signup;
