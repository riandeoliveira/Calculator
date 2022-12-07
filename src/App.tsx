import { Display } from "./components/Display";
import { Header } from "./components/Header";
import { Keyboard } from "./components/Keyboard";

export function App(): JSX.Element {
  return (
    <div className="min-h-screen bg-[#3b4664] flex items-center justify-center">
      <div className="flex flex-col gap-6 w-[540px] m-3 max-sm:w-[360px]">
        <Header />
        <Display />
        <Keyboard />
      </div>
    </div>
  );
}
