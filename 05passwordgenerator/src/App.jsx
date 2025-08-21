import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTVUWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charactersAllowed) {
      str += "!@#$%^&*()-+_{}[]~`";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charactersAllowed, setPassword]);

  const copyPassToClipBoard = useCallback(() => {
    //Current? means option text value can be null also
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [Password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charactersAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-7 py-8 mt-50 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-4xl text-center text-bold text-white my-4 pb-7">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={Password}
            className="outline-none flex-1 py-1 px-3 bg-white text-[20px] font-bold"
            placeholder="password"
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-blue-700 outline-none px-4 py-1 rounded-r-lg shrink-0 text-white"
            onClick={copyPassToClipBoard}
          >
            {copied ? "copied!" : "copy"}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label htmlFor="" className="font-bold text-[15px]">
              Length:{length}
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prevCounter) => !prevCounter);
              }}
            />
            <label htmlFor="" className="text-[15px] font-bold">
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setCharactersAllowed((prevCounter) => !prevCounter);
              }}
            />
            <label htmlFor="" className="text-[15px] font-bold">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
