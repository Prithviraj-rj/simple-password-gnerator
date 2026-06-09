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
    let url = `http://localhost:3000/api/hello`;
    if (input) {
      url += `/${input}`;
    }
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    // console.log(data.message);
    setGreet({ message: data.message, input: "gtfout" });
  };

  return (
    <>
      <div className="w-2xl text-center text-4xl bg-slate-900/50 rounded-md p-4 mb-2">
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
      <div className="mt-5 flex gap-x-2 justify-between">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-slate-700/50 rounded-sm text-center p-2  "
        />
        <button
          onClick={handleGetGreet}
          className="bg-yellow-500/50 rounded-sm text-center p-2"
        >
          hello
        </button>
        <p className="bg-amber-400/50 rounded-sm text-center p-2  ">
          {" "}
          Greeting : {greet.message}
        </p>
      </div>
    </>
  );
}

export default App;
