export default function Footer() {
  return (
    <>
      <div className=" bg-gray-principal w-full flex">
        <div className="w-1/4"></div>
        <div className="w-2/4 flex flex-column "></div>
        <div className="w-1/4">
          <p className=""></p>
          <p className="text-cente text-gray-secondary cursor-pointer space-x-5">
            <i className=" hover:text-blue-terciary fab fa-facebook-square"></i>
            <i className=" hover:text-blue-terciary fab fa-instagram"></i>
            <i class=" hover:text-blue-terciary fab fa-twitter"></i>
          </p>
        </div>
      </div>
    </>
  );
}
