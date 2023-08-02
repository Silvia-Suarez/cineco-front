import Image from "next/image";
import SearchInput from "@/components/Inputs/SearchInput";
import Login from "@/components/Login";

export default function Navbar() {
  const Options = ({ active = false, children }) => {
    return (
      <>
        <div
          className={`px-4 tracking-wide flex flex-col cursor-pointer justify-center font-roboto text-white hover:bg-blue-secondary rounded-full text-sm ${
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
      <div className="absolute z-50 top-0 left-0 w-full h-24 bg-black">
        <div className="w-full flex h-full py-6">
          <div className="w-1/5">
            <Image
              src="/logo_cineco.svg"
              width={200}
              height={100}
              className=" h-full ml-auto py-2"
            />
          </div>
          <div className="w-4/5 pl-60 pr-20 py-1.5 flex">
            <div className="flex space-x-4">
              <Options>Cartelera</Options>
              <Options>Pronto</Options>
              <Options>Cineco Alternativo</Options>
              <Options>Comidas</Options>
            </div>
            <div className="flex flex-col px-8 justify-center">
              <SearchInput></SearchInput>
            </div>
            <div className="ml-auto">
              <Login></Login>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
