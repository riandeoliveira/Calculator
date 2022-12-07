import { useSelector } from "react-redux";
import { RootState } from "../store";

export const Display = (): JSX.Element => {
  const calculator = useSelector((state: RootState) => state.calculator);

  const display: string = Number(calculator.display).toLocaleString();

  return (
    <div className="text-white bg-[#181f32] h-32 text-5xl flex items-center justify-end p-8 rounded-lg">
      {display}
    </div>
  );
};
