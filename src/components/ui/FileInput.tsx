import { useRef, useState } from "react";

import Button from "./Button";

interface Props {
  textInsteadOfImage?: string;
  title?: string;
  desc?: string;
  imageUrl?: string;
  onChooseImage?: (file: File) => void;
}

function FileInput({
  textInsteadOfImage,
  imageUrl = "",
  onChooseImage,
  title = "ویرایش تصویر فایل",
  desc = "این تصویر برای عموم قابل رویت است",
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileImageUrl, setFileImageUrl] = useState<string>(imageUrl);

  function handleClickButton() {
    inputRef.current?.click();
  }

  function handleChooseImage() {
    if (inputRef.current?.files && inputRef.current?.files?.length !== 0) {
      if (onChooseImage) {
        onChooseImage(inputRef.current?.files[0]);
      }
      setFileImageUrl(URL.createObjectURL(inputRef.current?.files[0]));
    }
  }

  return (
    <div className="w-fit flex justify-center items-center gap-[20px] ">
      {fileImageUrl ? (
        <img className="w-24 h-24 rounded-full" src={fileImageUrl} />
      ) : (
        <div className="w-24 h-24 flex justify-center items-center rounded-full text-[32px] bg-[#EAF562] font-[500]">
          {textInsteadOfImage}
        </div>
      )}
      <div className="flex flex-col">
        <input
          type="file"
          className="w-[185px] h-[40px] hidden max-w-full"
          ref={inputRef}
          onChange={() => handleChooseImage()}
        />
        <Button
          onClick={handleClickButton}
          className="flex justify-center items-center w-[185px] h-[40px] bg-white !text-primary border border-primary mb-4"
        >
          {title}
        </Button>
        <span className="text-[12px] text-right text-[#8A8989]">{desc}</span>
      </div>
    </div>
  );
}

export default FileInput;
