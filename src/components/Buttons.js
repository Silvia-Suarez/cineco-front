const PrincipalButton = ({ children = "Ver todo" }) => {
  return (
    <>
      <button className="flex rounded-full py-3 px-6 font-roboto text-base font-medium tracking-wide bg-transparent border border-blue-principal text-blue-principal hover:text-white hover:bg-blue-principal">
        {children}
        <i className="fas ml-3 fa-chevron-right text-xs my-auto" />
      </button>
    </>
  );
};

const OptionsButton = ({ active = false, children }) => {
  return (
    <>
      <div
        className={`lg:w-auto w-full xl:py-3 px-4 tracking-wide flex flex-col text-center cursor-pointer justify-center font-roboto text-white hover:bg-blue-secondary xl:rounded-full rounded-2xl text-xs xl:text-sm ${
          active ? " bg-blue-secondary" : "bg-blue-principal"
        }`}
      >
        {children}
      </div>
    </>
  );
};

const SecondaryButton = ({ children }) => {
  return (
    <>
      <button className="flex cursor-pointer justify-center rounded-full py-3 px-6 font-roboto text-center text-sm font-medium tracking-wide bg-transparent border border-blue-principal text-blue-principal hover:text-white hover:bg-blue-principal">
        {children}
        <i className="fas ml-3 fa-chevron-right text-xs my-auto" />
      </button>
    </>
  );
};

export { PrincipalButton, SecondaryButton, OptionsButton };
