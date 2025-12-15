import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("url('https://images.pexels.com/photos/108941/pexels-photo-108941.jpeg') center/cover no-repeat");

  // function changeColor(color) {
  //   // const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  //   setColor(color);
  // }

  return (
    <div
      className="w-full h-screen duration-200 bg-gray-200"
      style={{ background: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <h1 className="w-full text-center text-xl font-bold mb-2">RAINBOW COLOR GENERATOR</h1>
          {/* VIOLET */}
          <button
            onClick={() => setColor("violet")}
            className="px-4 py-1 rounded-full bg-violet-500 text-white hover:bg-violet-600 duration-150 shadow-md"
          >
            VIOLET
          </button>

          {/* INDIGO */}
          <button
            onClick={() => setColor("indigo")}
            className="px-4 py-1 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 duration-150 shadow-md"
          >
            INDIGO
          </button>

          {/* BLUE */}
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full bg-blue-500 text-white hover:bg-blue-600 duration-150 shadow-md"
          >
            BLUE
          </button>

          {/* GREEN */}
          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full bg-green-500 text-white hover:bg-green-600 duration-150 shadow-md"
          >
            GREEN
          </button>

          {/* YELLOW (Text is black for better readability) */}
          <button
            onClick={() => setColor("yellow")}
            className="px-4 py-1 rounded-full bg-yellow-400 text-black hover:bg-yellow-500 duration-150 shadow-md"
          >
            YELLOW
          </button>

          {/* ORANGE */}
          <button
            onClick={() => setColor("orange")}
            className="px-4 py-1 rounded-full bg-orange-500 text-white hover:bg-orange-600 duration-150 shadow-md"
          >
            ORANGE
          </button>

          {/* RED */}
          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full bg-red-500 text-white hover:bg-red-600 duration-150 shadow-md"
          >
            RED
          </button>

          {/* RANDOM COLOR GENERATOR */}
          <button
            onClick={() => {
              const randomColor =
                "#" +
                (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");
              setColor(randomColor);
            }}
            className="px-4 py-1 rounded-full bg-gray-800 text-white hover:bg-gray-900 duration-150 shadow-md border-2 border-white"
          >
            RANDOM
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
