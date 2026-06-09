import React from "react";

interface ControlsProps {
  length: number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  hasChar: boolean;
  hasNum: boolean;
  setHasChar: React.Dispatch<React.SetStateAction<boolean>>;
  setHasNum: React.Dispatch<React.SetStateAction<boolean>>;
  passwordGenerator: () => void;
}

export default function Controls({
  length,
  setLength,
  hasChar,
  hasNum,
  setHasChar,
  setHasNum,
  passwordGenerator,
}: ControlsProps) {
  return (
    <div className="flex item-center justify-between mt-2 ">
      <div className="flex items-center gap-x-1">
        <input
          type="range"
          id="inputLength"
          max={40}
          min={5}
          value={length}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
          ) => {
            setLength(Number(e.target.value));
            // console.log(e.target.value);
            // console.log(typeof e.target.value);
          }}
          className="cursor-pointer p-2 "
        />
        <label htmlFor="inputlengt" className="p-1">
          length: {length}
        </label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          id="charbox"
          defaultChecked={hasChar}
          onChange={() => setHasChar((old) => !old)}
          className="cursor-pointer p-2"
        />
        <label htmlFor="charbox" className="p-1">
          : character
        </label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
          type="checkbox"
          id="numbox"
          defaultChecked={hasNum}
          onChange={() => setHasNum((old) => !old)}
          className="cursor-pointer p-2 "
        />
        <label
          htmlFor="numbox"
          className="p-1 transition-all duration-150 active:scale-95  "
        >
          : Numbers{" "}
        </label>
      </div>
      <button
        className="bg-blue-800/50 rounded-sm px-2 transition-all duration-150 active:scale-95"
        onClick={passwordGenerator}
      >
        Regenrate
      </button>
    </div>
  );
}
