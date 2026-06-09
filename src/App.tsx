import { useState } from "react";
import "./index.css";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";
import PasswordInput from "./components/PasswordInput";
import Controls from "./components/Controls";

interface Greet {
  message: string;
  input: string;
}
export function App() {
  const [length, setLength] = useState(5);
  const [hasChar, setHasChar] = useState(false);
  const [hasNum, setHasNum] = useState(false);
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("jhon doe ");

  const [greet, setGreet] = useState<Greet>({ message: "", input: "" });
  // // console.log("the component");
  const { passwordGenerator } = usePasswordGenerator({
    hasChar,
    hasNum,
    setPassword,
    length,
  });

  const handleGetGreet = async () => {
    const url = new URL(
      `/api/hello${input ? `/${encodeURIComponent(input)}` : ""}`,
      window.location.origin,
    );
    const res = await fetch(url.toString(), { method: "GET" });
    const data = await res.json();
    setGreet({ message: data.message, input });
  };

  return (
    <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-2xl">
      <div className="text-center text-2xl sm:text-3xl md:text-4xl bg-slate-900/50 rounded-md p-3 sm:p-4 px-4">
        PASSWORD GENERATOR
      </div>
      <PasswordInput password={password} setPassword={setPassword} />

      {/* control elements  */}
      <Controls
        length={length}
        hasChar={hasChar}
        hasNum={hasNum}
        setLength={setLength}
        passwordGenerator={passwordGenerator}
        setHasChar={setHasChar}
        setHasNum={setHasNum}
      />
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full px-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-slate-700/50 rounded-sm text-center p-2 text-sm sm:text-base"
          placeholder="Enter name"
        />
        <button
          onClick={handleGetGreet}
          className="bg-yellow-500/50 rounded-sm text-center p-2 text-sm sm:text-base hover:bg-yellow-600/50 transition-colors"
        >
          hello
        </button>
        <p className="bg-amber-400/50 rounded-sm text-center p-2 text-sm sm:text-base flex-1 break-words">
          {" "}
          Greeting : {greet.message}
        </p>
      </div>
    </div>
  );
}

export default App;
