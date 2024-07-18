import { useState, useRef } from "react";
import NumberGrid from "./components/NumberGrid";

function App() {
  const [total, setTotal] = useState(null);
  const [showGrid, setShowGrid] = useState(false);
  const totalRef: any = useRef();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {showGrid && 
      <div className="flex items-center flex-col">
       <div className="text-3xl">{total}</div>
       <button onClick={() => {setTotal(null); setShowGrid(false)}} className=" border border-white py-2 px-4 mt-2">reset</button>
      <NumberGrid total={total} />
      </div>}
      {!showGrid && (
        <form
          onSubmit={() => {
            setTotal(totalRef.current.value);
            setShowGrid(true);
          }}
          className=" flex flex-col justify-center"
        >
          <input
            ref={totalRef}
            className="h-24 w-24 flex items-center justify-center text-center border border-white outline-none bg-transparent text-6xl "
            name="num"
            type="text"
          />
          <button
            className="border border-white mt-4 bg-slate-50 text-black py-3"
            type="submit"
          >
            go
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
