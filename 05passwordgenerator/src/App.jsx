import { useCallback, useEffect, useState, useRef } from "react";
import "./App.css"; 

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) chars += "0123456789";
    if (charAllowed) chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      pass += chars[randomIndex];
    }
    setPassword(pass);
    setIsCopied(false); // Reset copy status on new password
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    
    // Visual feedback logic
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    // Main Container: Centers the card on the screen with a dark background
    <div className="min-h-screen bg-gray-950 flex flex-col justify-center items-center px-4">
      
      {/* Card Container */}
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Password Generator
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Create strong, secure passwords instantly.
          </p>
        </div>

        {/* Display Section */}
        <div className="relative mb-6 group">
          <input
            type="text"
            value={password}
            className="w-full bg-gray-800 text-orange-400 font-mono text-xl md:text-2xl py-4 px-5 rounded-xl border border-gray-700 outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          
          {/* Copy Button - Positioned inside the input area */}
          <button
            onClick={copyPasswordToClipboard}
            className={`absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 
              ${isCopied 
                ? "bg-green-500 text-white" 
                : "bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95"
              }`}
          >
            {isCopied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Controls Section */}
        <div className="space-y-6">
          
          {/* Slider Control */}
          <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-800">
            <div className="flex justify-between items-center mb-3">
              <label className="text-gray-300 font-medium">Password Length</label>
              <span className="text-orange-400 font-bold text-lg">{length}</span>
            </div>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
              onChange={(e) => setLength(Number(e.target.value))}
            />
          </div>

          {/* Checkbox Controls */}
          <div className="flex gap-4">
            {/* Number Checkbox */}
            <label className="flex-1 flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors">
              <span className="text-gray-300 font-medium select-none">Numbers</span>
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="w-5 h-5 accent-orange-500 rounded focus:ring-orange-500 focus:ring-2"
              />
            </label>

            {/* Character Checkbox */}
            <label className="flex-1 flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-800 cursor-pointer hover:bg-gray-800 transition-colors">
              <span className="text-gray-300 font-medium select-none">Symbol</span>
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="w-5 h-5 accent-orange-500 rounded focus:ring-orange-500 focus:ring-2"
              />
            </label>
          </div>
        </div>

      </div>
      
      {/* Footer / Credit (Optional) */}
      <div className="mt-6 text-gray-500 text-xs">
        Secure & Random
      </div>
    </div>
  );
}

export default App;