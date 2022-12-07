import { Button } from "./Button";

export const Keyboard = (): JSX.Element => {
  return (
    <div className="bg-[#252d44] rounded-lg p-8 grid gap-5">
      <div className="grid gap-5 grid-cols-4">
        <Button type="key">7</Button>
        <Button type="key">8</Button>
        <Button type="key">9</Button>
        <Button type="erase">DEL</Button>
        <Button type="key">4</Button>
        <Button type="key">5</Button>
        <Button type="key">6</Button>
        <Button type="key">+</Button>
        <Button type="key">1</Button>
        <Button type="key">2</Button>
        <Button type="key">3</Button>
        <Button type="key">-</Button>
        <Button type="key">.</Button>
        <Button type="key">0</Button>
        <Button type="key">/</Button>
        <Button type="key">x</Button>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Button type="erase">RESET</Button>
        <Button type="confirm">=</Button>
      </div>
    </div>
  );
};
