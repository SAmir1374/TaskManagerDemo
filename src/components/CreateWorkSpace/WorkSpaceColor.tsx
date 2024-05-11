import { useState } from "react";

import SelectIcon from "../icons/SelectIcon";
import Forbidden from "../icons/ForbiddenIcon";
import Button from "../ui/Button";

interface Color {
  id: number;
  colorHEX: string;
}

interface Props {
  onSubmit: (selected: string) => void;
  title: string;
}

const colors: Color[] = [
  { id: 0, colorHEX: "bg-[#7D828C]" },
  { id: 1, colorHEX: "bg-[#84C6A1]" },
  { id: 2, colorHEX: "bg-[#78C6B0]" },
  { id: 3, colorHEX: "bg-[#76BC86]" },
  { id: 4, colorHEX: "bg-[#80DC69]" },
  { id: 5, colorHEX: "bg-[#E46161]" },
  { id: 6, colorHEX: "bg-[#E17E80]" },
  { id: 7, colorHEX: "bg-[#EC8182]" },
  { id: 8, colorHEX: "bg-[#F3C567]" },
  { id: 9, colorHEX: "bg-[#B9995E]" },
  { id: 10, colorHEX: "bg-[#E57A57]" },
  { id: 11, colorHEX: "bg-[#F1A25C]" },
  { id: 12, colorHEX: "bg-[#E28A60]" },
  { id: 13, colorHEX: "bg-[#6897C2]" },
  { id: 14, colorHEX: "bg-[#74AADD]" },
  { id: 15, colorHEX: "bg-[#3C45E7]" },
  { id: 16, colorHEX: "bg-[#6DAFCE]" },
  { id: 17, colorHEX: "bg-[#6CB2F7]" },
  { id: 18, colorHEX: "bg-[#9286EA]" },
  { id: 19, colorHEX: "bg-[#C074D1]" },
  { id: 20, colorHEX: "bg-[#486774]" },
  { id: 21, colorHEX: "bg-[#5F6C7C]" },
  { id: 22, colorHEX: "bg-[#46494D]" },
  { id: 23, colorHEX: "bg-[#7FA1D1]" },
];

function WorkSpaceColor({ onSubmit, title }: Props) {
  const [selected, setSelected] = useState(0);

  function activeColor(id: number) {
    setSelected(id);
  }

  function getTitleSummarized() {
    const words = title?.split(" ");
    if (words && words.length > 0) {
      return `${words[0].charAt(0)} ${words[words.length - 1].charAt(0)}`;
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        <div>
          <div
            className={`w-20 h-20 flex justify-center items-center text-white text-[24px] rounded-md ${colors[selected].colorHEX}`}
          >
            <span>{getTitleSummarized()}</span>
          </div>
        </div>
        <div>
          <h3 className="text-right mb-4">رنگ ورک اسپیس</h3>
          <div className="grid grid-cols-12 flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color.id}
                className={`flex justify-center items-center cursor-pointer rounded-sm transition-all duration-500 ease-in-out 
                  ${selected === color.id ? "w-6 h-6" : "w-4 h-4"}
                  ${color.id === 0 ? "" : color.colorHEX}`}
                onClick={() => {
                  activeColor(color.id);
                }}
              >
                {color.id === 0 ? (
                  <Forbidden className="stroke-black" />
                ) : (
                  selected === color.id && (
                    <SelectIcon className="stroke-white" />
                  )
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Button
        onClick={() => onSubmit(colors[selected].colorHEX)}
        className="w-full mt-[60px]"
      >
        ادامه
      </Button>
    </div>
  );
}

export default WorkSpaceColor;
