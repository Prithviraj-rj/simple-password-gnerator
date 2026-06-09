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
    <div className="flex flex-col gap-3 sm:gap-2 sm:items-center sm:justify-between mt-3 sm:mt-2 w-full max-w-2xl px-4">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-x-2">
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
            }}
            className="cursor-pointer p-1 w-24 sm:w-32"
          />
          <label
            htmlFor="inputlengt"
            className="p-1 text-sm sm:text-base whitespace-nowrap"
          >
            Length: {length}
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="charbox"
            defaultChecked={hasChar}
            onChange={() => setHasChar((old) => !old)}
            className="cursor-pointer p-1 w-4 h-4"
          />
          <label htmlFor="charbox" className="p-1 text-sm sm:text-base">
            Characters
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            type="checkbox"
            id="numbox"
            defaultChecked={hasNum}
            onChange={() => setHasNum((old) => !old)}
            className="cursor-pointer p-1 w-4 h-4"
          />
          <label
            htmlFor="numbox"
            className="p-1 text-sm sm:text-base transition-all duration-150 active:scale-95"
          >
            Numbers
          </label>
        </div>
      </div>
      <button
        className="bg-blue-800/50 rounded-sm px-3 py-2 text-sm sm:text-base transition-all duration-150 active:scale-95 hover:bg-blue-900/50 w-full sm:w-auto"
        onClick={passwordGenerator}
      >
        Regenerate
      </button>
    </div>
  );
}
