import SearchIcon from "./icons/SearchIcon";

function SearchInput({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return (
    <div className="relative">
      <SearchIcon className="stroke-black absolute top-2 right-2" />
      <input
        type="text"
        className={`w-full h-10 rounded-md pl-4 pr-9 text-sm outline-primary ${className}`}
        {...props}
      />
    </div>
  );
}

export default SearchInput;
