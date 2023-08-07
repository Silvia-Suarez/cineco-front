import { useState, useContext, useEffect } from "react";
import { AccountContext } from "./Account";

const StatusSession = () => {
  const [status, SetStatus] = useState(false);

  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then((session) => {
        // console.log("Session: ",session);
        SetStatus(true);
      })
      .catch((err) => {
        // console.log("Session Error", err)
      });
  }, [getSession]);

  return (
    <div>
      {status ? (
        <button onClick={logout}>Cerrar Sesion</button>
      ) : (
        "Inicia Sesión"
      )}
    </div>
  );
};

export default StatusSession;
