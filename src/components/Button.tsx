import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type: "key" | "erase" | "confirm";
}

export const Button = ({ type, children }: ButtonProps): JSX.Element => {
  let styles: string = "";

  if (type === "key")
    styles =
      "bg-[#eae3dc] shadow-key text-3xl text-[#434A59] hover:bg-[#fffffe]";
  if (type === "erase")
    styles = "bg-[#647198] shadow-erase text-2xl text-white hover:bg-[#a2b2e1]";
  if (type === "confirm")
    styles =
      "bg-[#d03f2f] shadow-confirm text-2xl text-white hover:bg-[#f96b5b]";

  return (
    <button
      type="button"
      className={`h-16 rounded-lg shadow-abc active:translate-y-1 ${styles}`}
    >
      {children}
    </button>
  );
};
