import React from "react";

function Avatar({
  className,
  src,
  alt,
  ...props
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  return (
    <div>
      {src ? (
        <img
          src={src}
          {...props}
          className={`w-9 h-9 rounded-full ${className}`}
        />
      ) : (
        <div className="w-9 h-9 rounded-full bg-yellow-300 flex items-center justify-center">
          {alt && <p className="text-sm">{alt}</p>}
        </div>
      )}
    </div>
  );
}

export default Avatar;
