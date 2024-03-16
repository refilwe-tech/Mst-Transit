import { ButtonHTMLAttributes, FC, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "outline" | "clear" | "solid" | "gradient" | "circle";
}
export const Button: FC<ButtonProps> = ({
  children,
  variant = "outline",
  ...rest
}) => {
  let btnStyle = "text-black rounded-md px-4 py-2 font-semibold";

  switch (variant) {
    case "outline":
      btnStyle += " border-2 border-secondary";
      break;
    case "clear":
      break;
    case "solid":
      btnStyle += " bg-secondary text-white";
      break;
    case "gradient":
      btnStyle += " bg-gradient-to-r from-primary to-secondary text-white";
      break;
    case "circle":
      btnStyle += " bg-secondary text-white rounded-full p-2";
      break;
    default:
      btnStyle += " border-2 border-secondary";
  }

  return (
    <button {...rest} className={btnStyle}>
      {children}
    </button>
  );
};
