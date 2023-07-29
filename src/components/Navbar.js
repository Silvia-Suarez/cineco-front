export default function Card() {
  const Options = ({ active = false, children }) => {
    return (
      <>
        <div
          className={`px-4 flex flex-col justify-center font-roboto text-white hover:bg-blue-secondary rounded-full text-sm ${
            active ? " bg-blue-secondary" : "bg-blue-principal"
          }`}
        >
          {children}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-24 bg-black">
        <div className="w-full flex h-full py-6 px-5">
          <div className="w-1/5">
            <img src="/logo_cineco.svg" className="h-full py-2" />
          </div>
          <div className="w-5/6 flex">
            <div className="flex py-1.5 space-x-3">
              <Options>Cartelera</Options>
              <Options>Pronto</Options>
              <Options>Cineco Alternativo</Options>
              <Options>Comidas</Options>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
