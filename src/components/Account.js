import React, { createContext } from "react";
import Pool from "@/pages/UserPool";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";

const AccountContext = createContext();

const Account = (props) => {
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject();
          } else {
            resolve(session);
          }
        });
      } else {
        reject();
      }
    });
  };
  const verificated = async (Username, Code) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      // const params = {
      // Pool,
      // Username,
      // Code
      // };

      user.confirmRegistration(Code, true, (err, data) => {
        if (err) {
          console.log("Error al verificar el código de confirmación:", err);
          reject(err);
        } else {
          resolve(data);
          console.log("Cuenta verificada correctamente:", data);
        }
      });
    });
  };

  const authenticate = async (Username, Password) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("Exitoso", data);
          resolve(data);
        },
        onFailure: (err) => {
          console.error("Error", err);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("Nueva Contraseña Requerida", data);
          resolve(data);
        },
      });
    });
  };

  const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  };
  return (
    <AccountContext.Provider
      value={{ authenticate, getSession, logout, verificated }}
    >
      {props.children}
    </AccountContext.Provider>
  );
};

export { Account, AccountContext };
