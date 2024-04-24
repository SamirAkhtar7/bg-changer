import { useState } from "react"

function App() {
 const [color, setcolor]= useState("pink")

  return (
    <>
      <div
        className="w-full h-screen"
        style={{
          backgroundColor: color,
        }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl">
            <button
              onClick={() => setcolor("red")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "red", color: "white" }}
            >
              Reb
            </button>
            <button
              onClick={() => setcolor("green")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "green", color: "white" }}
            >
              Green
            </button>
            <button
              onClick={() => setcolor("white")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "white" }}
            >
              white
            </button>
            <button
              onClick={() => setcolor("pink")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button
              onClick={() => setcolor("yellow")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => setcolor("blue")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setcolor("black")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "black", color: "white" }}
            >
              black
            </button>
            <button
              onClick={() => setcolor("orange")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>
            <button
              onClick={() => setcolor("purple")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "purple", color: "white" }}
            >
              purple
            </button>
            <button
              onClick={() => setcolor("brown")}
              className="outline-none px-4 py-1 rounded-3xl shadow-lg "
              style={{ backgroundColor: "brown", color: "white" }}
            >
              brown
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
