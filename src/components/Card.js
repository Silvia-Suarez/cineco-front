import Image from "next/image";
export default function Card({
  title,
  o_title,
  id,
  date,
  clasification,
  duration,
  gender,
  image,
}) {
  const Label = ({ alert = false, children }) => {
    return (
      <>
        <div
          style={{ fontSize: "11px" }}
          className={`bg-gray-200 normal-case rounded-sm mr-2 mb-2 h-max px-3 py-1.5 tracking-normal font-medium  ${
            alert ? "text-red-600" : ""
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
        style={{ boxShadow: "0 0 10px rgba(0,0,0,.1)" }}
        className=" h-full font-roboto capitalize w-80 px-5 py-4 flex flex-col rounded-md tracking-wide"
      >
        <Image
          src={image}
          width={300}
          height={300}
          alt="Imagen-Pelicula"
          className="mx-auto w-full border rounded-md"
        />
        <div className=" h-1/3">
          <p className=" text-lg pt-2 pb-1 text-blue-principal font-medium ">
            {title}
          </p>
          <p className=" text-xs pb-1 font-medium">
            Título en inglés: {o_title}
          </p>
          <div className=" text-xs pb-2 space-y-1">
            <p>Estreno: {date}</p>
            <p>Género: {gender}</p>
          </div>
          <div className="w-full text-xs flex flex-wrap h-28">
            <Label alert={clasification.toLowerCase().includes("exclusiva")}>
              {clasification}
            </Label>
            {duration && <Label>{duration} Min</Label>}
          </div>
        </div>
      </div>
    </>
  );
}
