export default function SearchInput() {
  return (
    <>
      <div className="my-auto flex text-blue-principal bg-blue-fifth px-3 py-2 rounded-full">
        <input
          className="font-roboto w-32 bg-blue-fifth text-xs hover:appearance-none placeholder-blue-extra font-normal outline-none"
          placeholder="Buscar "
        />
        <i className="fas pl-3 fa-search text-xs"></i>
      </div>
    </>
  );
}
