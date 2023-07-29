import Image from "next/image";
export default function Card() {
  const Label = ({ alert = false, children }) => {
    return (
      <>
        <div
          className={`bg-gray-200 px-3 py-2 w-ma font-semibold ${
            alert ? "text-red-500" : ""
          }`}
        >
          {children}
        </div>
      </>
    );
  };
  return (
    <>
      <div
        className=" h-full
       border w-80 shadow-md px-5 py-3 flex flex-col rounded-md"
      >
        <img
          src="/9f3f93604ed4-warner_barbie_cinecol_480x670.jpg"
          alt="Imagen-Pelicula"
          className="mx-auto w-full border rounded-md"
        />
        <div className=" h-1/3">
          <p className=" text-md pt-2 pb-1 font-semibold">Barbie</p>
          <p className=" text-xs pb-1 font-medium">Título en inglés: Barbie</p>
          <div className=" text-xs pb-2 space-y-0.5">
            <p>Estreno: 20-Jul-2023</p>
            <p>Género: Comedia</p>
          </div>
          <div className="w-full text-xs flex flex-wrap space-x-4 pb-20">
            <Label>Para todo el Público</Label>
            <Label>114 Min</Label>
          </div>
        </div>
      </div>
    </>
  );
}
