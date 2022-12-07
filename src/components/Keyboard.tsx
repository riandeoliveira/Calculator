import { useDispatch } from "react-redux";
import {
  calculate,
  del,
  reset,
  setDisplay,
  setOperation,
} from "../slices/calculatorSlice";
import { Button } from "./Button";

export const Keyboard = (): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#252d44] rounded-lg p-8 grid gap-5">
      <div className="grid gap-5 grid-cols-4">
        <Button variant="key" onClick={() => dispatch(setDisplay("7"))}>
          7
        </Button>
        <Button variant="key" onClick={() => dispatch(setDisplay("8"))}>
          8
        </Button>
        <Button variant="key" onClick={() => dispatch(setDisplay("9"))}>
          9
        </Button>
        <Button variant="erase" onClick={() => dispatch(del())}>DEL</Button>
        <Button variant="key" onClick={() => dispatch(setDisplay("4"))}>
          4
        </Button>
        <Button variant="key" onClick={() => dispatch(setDisplay("5"))}>
          5
        </Button>
        <Button variant="key" onClick={() => dispatch(setDisplay("6"))}>
          6
        </Button>
        <Button variant="key" onClick={() => dispatch(setOperation("add"))}>
          +
        </Button>
        <Button variant="key" onClick={() => dispatch(setDisplay("1"))}>
          1
        </Button>
        <Button variant="key" onClick={() => dispatch(setDisplay("2"))}>
          2
        </Button>
        <Button variant="key" onClick={() => dispatch(setDisplay("3"))}>
          3
        </Button>
        <Button
          variant="key"
          onClick={() => dispatch(setOperation("subtract"))}
        >
          -
        </Button>
        <Button variant="key">.</Button>
        <Button variant="key" onClick={() => dispatch(setDisplay("0"))}>
          0
        </Button>
        <Button variant="key" onClick={() => dispatch(setOperation("divide"))}>
          /
        </Button>
        <Button
          variant="key"
          onClick={() => dispatch(setOperation("multiply"))}
        >
          x
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Button variant="erase" onClick={() => dispatch(reset())}>
          RESET
        </Button>
        <Button variant="confirm" onClick={() => dispatch(calculate())}>
          =
        </Button>
      </div>
    </div>
  );
};
