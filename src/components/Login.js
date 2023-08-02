import { useState } from "react";

export default function Login() {
  const [active, SetActive] = useState(false);
  const [hover, SetHover] = useState(false);

  return (
    <>
      <div
        onClick={() => SetActive(!active)}
        onMouseOver={() => SetHover(true)}
        onMouseOut={() => SetHover(false)}
        className="flex relative z-50 text-white"
      >
        <div className="flex flex-col justify-center">
          <div
            className={`rounded-l-full text-center ${
              hover ? "bg-blue-secondary" : "bg-blue-principal"
            } flex flex-col h-5 w-6 justify-center `}
          >
            {active ? (
              <i className="fas fa-chevron-up text-2xs"></i>
            ) : (
              <i className="fas fa-chevron-down text-2xs"></i>
            )}
          </div>
        </div>
        <div className="flex flex-col -ml-1 justify-center">
          <div
            className={`rounded-full p-1.5 ${
              hover ? "bg-blue-secondary" : "bg-blue-principal"
            } `}
          >
            <div className="rounded-full flex flex-col h-6 w-6 justify-center text-center bg-blue-quaterny relative">
              <i className="fas fa-user text-2xs"></i>
            </div>
          </div>
        </div>
      </div>
      {active && (
        <>
          <div className="absolute top-0 left-0 h-screen w-full bg-black opacity-60"></div>
        </>
      )}
    </>
  );
}
