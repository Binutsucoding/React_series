// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [color, setColor] = useState("black");

//   return (
//     <>
//       <div className="w-full h-screen" style={{ backgroundColor: color }}>
//         {/* Heading */}
//         <div className="flex justify-center px-2">
//           <h1
//             className="bg-yellow-200 text-rose-600 mt-10 font-serif italic p-4 rounded-2xl
//              text-center font-bold text-3xl sm:text-4xl md:text-5xl shadow-md
//              inline-block"
//           >
//             {"Background Changer Project".split("").map((letter, index) => (
//               <span
//                 key={index}
//                 className="relative inline-block"
//                 style={{
//                   animation: `swing ${2 + index * 0.15}s ease-in-out infinite`,
//                 }}
//               >
//                 {/* Thread */}
//                 <span className="absolute top-[-20px] left-1/2 w-[2px] h-5 bg-gray-400"></span>
//                 {/* Letter */}
//                 <span className="inline-block">
//                   {letter === " " ? "\u00A0" : letter}
//                 </span>
//               </span>
//             ))}
//           </h1>
//         </div>

//         {/* Color Buttons */}
//         <div className="fixed flex justify-center bottom-10 inset-x-0 px-4">
//           <div className="bg-gray-200 flex flex-wrap justify-center gap-4 shadow-xl px-6 py-4 rounded-2xl max-w-4xl">
//             <button
//               onClick={() => setColor("red")}
//               className="bg-red-700 hover:bg-red-800 text-white font-bold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg"
//             >
//               Red
//             </button>
//             <button
//               onClick={() => setColor("lightgreen")}
//               className="bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg"
//             >
//               Green
//             </button>
//             <button
//               onClick={() => setColor("cyan")}
//               className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg"
//             >
//               Cyan
//             </button>
//             <button
//               onClick={() => setColor("purple")}
//               className="bg-purple-500 hover:bg-purple-600 text-white font-bold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg"
//             >
//               Purple
//             </button>
//             <button
//               onClick={() => setColor("yellow")}
//               className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg"
//             >
//               Yellow
//             </button>
//             <button
//               onClick={() => setColor("pink")}
//               className="bg-pink-400 hover:bg-pink-500 text-white font-bold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg"
//             >
//               Pink
//             </button>
//             <button
//               onClick={() => setColor("olive")}
//               className="bg-[olive] hover:bg-[#6B8E23] text-white font-bold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg"
//             >
//               Olive
//             </button>
//             <button
//               onClick={() => setColor("black")}
//               className="bg-black hover:bg-gray-900 text-white font-bold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg"
//             >
//               Black
//             </button>
//             <button
//               onClick={() => setColor("white")}
//               className="bg-gray-100 hover:bg-gray-200 text-black font-bold px-6 py-2 rounded-lg transition-transform duration-300 ease-in-out
//              hover:scale-105 hover:shadow-lg"
//             >
//               White
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  const canvasRef = useRef(null);

  const sprayEffect = (newColor) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    let sprayDuration = 3000; // 3 sec
    let startTime = Date.now();

    // Create spray particles
    for (let i = 0; i < 600; i++) {
      particles.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        dx: (Math.random() - 0.5) * 8,
        dy: (Math.random() - 0.5) * 8,
        size: Math.random() * 8,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        ctx.fillStyle = newColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      if (Date.now() - startTime < sprayDuration) {
        requestAnimationFrame(animate);
      } else {
        setColor(newColor); // Final background apply
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animate();
  };

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      {/* Spray Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      ></canvas>

      {/* Heading */}
      <div className="flex justify-center px-2">
        <h1
          className="bg-yellow-200 text-rose-600 mt-10 font-serif italic p-4 rounded-2xl 
             text-center font-bold text-3xl sm:text-4xl md:text-5xl shadow-md inline-block"
        >
          Background Changer Project
        </h1>
      </div>

      {/* Buttons */}
      <div className="fixed flex justify-center bottom-10 inset-x-0 px-4">
        <div className="bg-gray-200 flex flex-wrap justify-center gap-4 shadow-xl px-6 py-4 rounded-2xl max-w-4xl">
          <button
            onClick={() => sprayEffect("red")}
            className="bg-red-700 text-white font-bold px-6 py-2 rounded-lg"
          >
            Red
          </button>
          <button
            onClick={() => sprayEffect("green")}
            className="bg-green-700 text-white font-bold px-6 py-2 rounded-lg"
          >
            Green
          </button>
          <button
            onClick={() => sprayEffect("cyan")}
            className="bg-cyan-600 text-white font-bold px-6 py-2 rounded-lg"
          >
            Cyan
          </button>
          <button
            onClick={() => sprayEffect("purple")}
            className="bg-purple-500 text-white font-bold px-6 py-2 rounded-lg"
          >
            Purple
          </button>
          <button
            onClick={() => sprayEffect("yellow")}
            className="bg-yellow-500 text-white font-bold px-6 py-2 rounded-lg"
          >
            Yellow
          </button>
          <button
            onClick={() => sprayEffect("pink")}
            className="bg-pink-400 text-white font-bold px-6 py-2 rounded-lg"
          >
            Pink
          </button>
          <button
            onClick={() => sprayEffect("olive")}
            className="bg-[olive] text-white font-bold px-6 py-2 rounded-lg"
          >
            Olive
          </button>
          <button
            onClick={() => sprayEffect("black")}
            className="bg-black text-white font-bold px-6 py-2 rounded-lg"
          >
            Black
          </button>
          <button
            onClick={() => sprayEffect("white")}
            className="bg-gray-300 text-black font-bold px-6 py-2 rounded-lg"
          >
            White
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
