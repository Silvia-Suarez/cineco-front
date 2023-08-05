import Image from "next/image";
export default function AltCard({ image, id }) {
  return (
    <>
      <div
        style={{ boxShadow: "0 0 10px rgba(0,0,0,.1)" }}
        className=" w-full font-roboto capitalize px-5 py-4 flex flex-col "
      >
        <Image
          src={image}
          width={5000}
          height={5000}
          alt="Imagen-Pelicula"
          className="mx-auto w-full border rounded-md"
        />
      </div>
    </>
  );
}
