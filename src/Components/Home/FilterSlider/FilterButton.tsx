type FilterButtonProps = {
  text: string;
};

function FilterButton({ text }: FilterButtonProps) {
  return (
    <button type="button" className="w-1/3 rounded-full border border-brandDark">
      {text}
    </button>
  );
}

export default FilterButton;
