export default function SearchInput() {
  return (
    <>
      <div className="relative flex">
        <input
          type="search"
          id="default-search"
          className=""
          placeholder="Search Mockups, Logos..."
          required
        />
        <i class="fa-solid absolute top-0 left-0 fa-magnifying-glass text-2xl text-white"></i>
      </div>
    </>
  );
}
