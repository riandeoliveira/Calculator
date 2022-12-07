import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Operation = "add" | "subtract" | "multiply" | "divide";

interface CalculatorState {
  display: string;
  operation: Operation | null;
  valueX: number;
  valueY: number;
}

const initialState: CalculatorState = {
  display: "0",
  operation: null,
  valueX: 0,
  valueY: 0,
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState,
  reducers: {
    calculate: (state: CalculatorState): void => {
      state.valueY = Number(state.display);

      let result: number = 0;

      switch (state.operation) {
        case "add":
          result = state.valueX + state.valueY;
          break;
        case "subtract":
          result = state.valueX - state.valueY;
          break;
        case "multiply":
          result = state.valueX * state.valueY;
          break;
        case "divide":
          result = state.valueX / state.valueY;
          break;
        default:
          break;
      }

      state.display = result.toString();
      state.operation = null;
      state.valueX = 0;
      state.valueY = 0;
    },
    setDisplay: (
      state: CalculatorState,
      action: PayloadAction<string>
    ): void => {
      if (state.display === "0") {
        state.display = action.payload;
      } else {
        state.display = state.display + action.payload;
      }
    },
    setOperation: (
      state: CalculatorState,
      action: PayloadAction<Operation>
    ): void => {
      if (state.operation === null) {
        state.operation = action.payload;
        state.valueX = Number(state.display);
        state.display = "0";
      }
    },
    reset: (state: CalculatorState): void => {
      state.display = "0";
      state.operation = null;
      state.valueX = 0;
      state.valueY = 0;
    },
    del: (state: CalculatorState): void => {
      state.display = state.display.slice(0, -1);
    },
  },
});

export const { calculate, setDisplay, setOperation, reset, del } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
