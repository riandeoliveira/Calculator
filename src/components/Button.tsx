import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "key" | "erase" | "confirm";
}

export const Button = ({
  variant,
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  let styles: string = "";

  if (variant === "key")
    styles =
      "bg-[#eae3dc] shadow-key text-3xl text-[#434A59] hover:bg-[#fffffe]";
  if (variant === "erase")
    styles = "bg-[#647198] shadow-erase text-2xl text-white hover:bg-[#a2b2e1]";
  if (variant === "confirm")
    styles =
      "bg-[#d03f2f] shadow-confirm text-2xl text-white hover:bg-[#f96b5b]";

  return (
    <button
      type="button"
      className={`h-16 rounded-lg shadow-abc active:translate-y-1 ${styles}`}
      {...rest}
    >
      {children}
    </button>
  );
};
