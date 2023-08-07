import React, { useState } from "react";
import UserPool from "@/pages/UserPool";

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
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => SetEmail(event.target.value)}
        ></input>
        <label htmlFor="password">Contraseña</label>
        <input
          value={password}
          onChange={(event) => SetPassword(event.target.value)}
        ></input>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
