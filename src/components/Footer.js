export default function Footer() {
  return (
    <>
      <div className=" bg-gray-principal w-full flex">
        <div className="w-1/4"></div>
        <div className="w-2/4 flex flex-column "></div>
        <div className="w-1/4">
          <p className=""></p>
          <p className="text-center text-gray-secondary cursor-pointer space-x-5">
            <i className="fa-brands fa-square-facebook hover:text-blue-terciary"></i>
            <i className="fa-brands fa-twitter hover:text-blue-terciary"></i>
            <i className="fa-brands fa-instagram hover:text-blue-terciary"></i>
          </p>
        </div>
      </div>
    </>
  );
}
