import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div className="bg-gray-principal text-gray-secondary pt-10 pb-16 w-full font-roboto text-xs flex">
        <div className="w-1/4 ">
          <Image
            src="/logo_cineco_blue.svg"
            width={200}
            height={100}
            className="h-8 ml-10"
            alt="CineCol-logo"
          />
        </div>
        <div className="w-2/4 flex flex-col tracking-wider space-y-16 text-center">
          <p className="">
            Información Legal &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;
            Acerca de Cineco &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;
            Contáctanos PQRS &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;
            Preguntas Frecuentes
          </p>
          <p>© 2023 Grupo 4</p>
        </div>
        <div className="text-center w-1/4">
          <div className="max-w-max mx-auto">
            Síguenos en redes sociales
            <div className=" text-right text-base space-x-4 cursor-pointer">
              <i className=" hover:text-blue-terciary fab fa-facebook-square"></i>
              <i className=" hover:text-blue-terciary fab fa-twitter"></i>
              <i className=" hover:text-blue-terciary fab fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
