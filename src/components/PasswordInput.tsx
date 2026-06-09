import React, { useRef } from "react";

interface PasswordInputProps {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function PasswordInput({
  password,
  setPassword,
}: PasswordInputProps) {
  const passwordRef: React.Ref<HTMLInputElement> = useRef(null);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(password);
    } else {
      // Fallback for environments where Clipboard API is unavailable
      passwordRef.current?.select();
      document.execCommand("copy");
    }
    passwordRef.current?.select();
  };
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full max-w-2xl px-4">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="flex-1 text-center text-xl sm:text-2xl bg-slate-900/50 rounded-md p-2 sm:p-4 focus:outline-none focus:bg-slate-700/50 transition-all duration-300"
          name="passwordinput"
          readOnly
        />
        <button
          className="bg-amber-500/50 text-lg sm:text-2xl rounded-md p-2 sm:p-4 transition-all duration-150 active:scale-90 active:bg-amber-800 hover:bg-amber-600/50 whitespace-nowrap"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
    </>
  );
}
