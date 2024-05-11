import { useState } from "react";
import SelectIcon from "../icons/SelectIcon";

interface Color {
  id: number;
  colorHEX: string;
}

interface Props {
  selected?: number;
  onSelect?: (selected: number) => void;
}

const colors: Color[] = [
  { id: 1, colorHEX: "bg-[#208D8E]" },
  { id: 2, colorHEX: "bg-[#78C6B0]" },
  { id: 3, colorHEX: "bg-[#76BC86]" },
  { id: 4, colorHEX: "bg-[#80DC69]" },
  { id: 5, colorHEX: "bg-[#E46161]" },
  { id: 6, colorHEX: "bg-[#E17E80]" },
  { id: 7, colorHEX: "bg-[#EC8182]" },
  { id: 8, colorHEX: "bg-[#F3C567]" },
  { id: 9, colorHEX: "bg-[#E57A57]" },
  { id: 10, colorHEX: "bg-[#F1A25C]" },
];

function ColorPalette({ selected, onSelect }: Props) {
  const [select, setSelect] = useState(selected);

  function activeColor(id: number) {
    setSelect(id);
  }

  return (
    <div className="flex items-center h-10 gap-3">
      {colors.map((color) => (
        <button
          key={color.id}
          className={`flex justify-center items-center cursor-pointer rounded-full transition-all duration-500 ease-in-out 
          ${select === color.id ? "w-10 h-10" : "w-5 h-5"}
          ${color.colorHEX}`}
          onClick={() => {
            activeColor(color.id);
            if (onSelect) {
              onSelect(color.id);
            }
          }}
        >
          {select === color.id && <SelectIcon className="stroke-white" />}
        </button>
      ))}
    </div>
  );
}

export default ColorPalette;
