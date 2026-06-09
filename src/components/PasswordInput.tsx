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
      <input
        type="text"
        value={password}
        ref={passwordRef}
        onChange={(e) => {
          setPassword(e.target.value);
          // console.log(e.target.value);
        }}
        className="w-xl text-center text-2xl bg-slate-900/50 rounded-md p-4 focus:outline-none focus:bg-slate-700/50 transition-all duration-300"
        name="passwordinput"
      />
      <button
        className="bg-amber-500/50 text-2xl rounded-md p-4 ml-2 transition-all duration-150 active:scale-90 active:bg-amber-800"
        onClick={handleCopy}
      >
        Copy
      </button>
    </>
  );
}
