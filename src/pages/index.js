import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import CarouselTop from "@/components/CarouselTop";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const getTasks = async () => {
      const response = await fetch(url);
      if (response.ok) {
        setTasks(await response.json());
      }
    };
    getTasks().catch(console.error);
  }, []);

  const movies = [
    {
      id_pelicula: "1",
      titulo: "barbie",
      titulo_original: "barbie",
      portada: "/9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
      estreno: "20-Jul-2023",
      genero: "comedia",
      duracion: 114,
      clasificacion: "Para todo el Público",
    },
    {
      id_pelicula: "2",
      titulo: "barbie",
      titulo_original: "barbie",
      portada: "/9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
      estreno: "20-Jul-2023",
      genero: "comedia",
      duracion: 114,
      clasificacion: "Clasificación Por Confirmar",
    },
    {
      id_pelicula: "3",
      titulo: "barbie",
      titulo_original: "barbie",
      portada: "/9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
      estreno: "20-Jul-2023",
      genero: "comedia",
      duracion: 114,
      clasificacion: "Recomendada para Mayores de 12 años",
    },
    {
      id_pelicula: "4",
      titulo: "barbie",
      titulo_original: "barbie",
      portada: "/9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
      estreno: "20-Jul-2023",
      genero: "comedia",
      clasificacion: "Exclusiva para Mayores de 15 años",
    },
    {
      id_pelicula: "5",
      titulo: "barbie",
      titulo_original: "barbie",
      portada: "/9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
      estreno: "20-Jul-2023",
      genero: "comedia",
      duracion: 114,
      clasificacion: "Para todo el Público",
    },
    {
      id_pelicula: "6",
      titulo: "barbie",
      titulo_original: "barbie",
      portada: "/9f3f93604ed4-warner_barbie_cinecol_480x670.jpg",
      estreno: "20-Jul-2023",
      genero: "comedia",
      duracion: 114,
      clasificacion: "Para todo el Público",
    },
  ];
  return (
    <>
      <div className="w-full overflow-auto py-24 h-screen">
        <Navbar></Navbar>
        <CarouselTop></CarouselTop>
        <div className=" px-14 py-16">
          <p className="text-lg font-roboto font-medium pb-10">EN CARTELERA</p>

          <div className=" grid grid-cols-4 gap-y-5 gap-x-6">
            {movies.map((movie) => (
              <Card
                key={movie.id_pelicula}
                id={movie.id_pelicula}
                title={movie.titulo}
                o_title={movie.titulo_original}
                image={movie.portada}
                date={movie.estreno}
                gender={movie.genero}
                duration={movie.duracion}
                clasification={movie.clasificacion}
              ></Card>
            ))}
          </div>
        </div>
        <div>CINECO ALTERNATIVO</div>
        {/* <Card></Card> */}
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}
