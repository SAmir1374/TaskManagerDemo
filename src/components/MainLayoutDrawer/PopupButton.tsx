export type PopupButtonProps = {
  title: string;
  icon?: JSX.Element;
  className?: string;
  textClassName?: string;
  onClick?: () => void;
};
function PopupButton({
  title,
  icon,
  className,
  textClassName,
  onClick,
}: PopupButtonProps) {
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  }
  return (
    <button
      className={`flex flex-row gap-1 py-2 ${className}`}
      onClick={handleClick}
    >
      {icon}
      <span className={`text-sm ${textClassName}`}>{title}</span>
    </button>
  );
}

export default PopupButton;
