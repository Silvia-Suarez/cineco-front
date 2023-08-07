import MainStructure from "@/components/MainStructure";
import Input from "@/components/Inputs/Input";
import PasswordInput from "@/components/Inputs/PasswordInput";
export default function Login({}) {
  return (
    <>
      <MainStructure showCarrouselTop={false} showCarrouselBot={false}>
        <section className="flex justify-center py-20 w-full">
          <div className="rounded-3xl w-96 flex flex-col shadow-lg py-10 px-10">
            <div className="">
              <Input placeholder={"Ingrese su correo"}></Input>
              <PasswordInput
                placeholder={"Ingrese su contraseña"}
              ></PasswordInput>
            </div>
          </div>
        </section>
      </MainStructure>
    </>
  );
}
