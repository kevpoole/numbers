import { useState, useRef } from "react";
import NumberGrid from "./components/NumberGrid";

function App() {
  const [total, setTotal] = useState(null);
  const [showReset, setShowReset] = useState(false);
  const totalRef: any = useRef();

  return (
    <div className="min-h-screen top-0 flex flex-col items-center justify-center bg-black text-white">
      {!showReset && <div className="flex h-screen w-screen justify-center items-center ">
         <form
          onSubmit={(e) => {
            e.preventDefault();
            setTotal(totalRef.current.value > 100 ? 100 : totalRef.current.value );
            setShowReset(true);
            window.scrollTo({top:0})
          }}
          className=" flex flex-col justify-center"
        >
          <input
            ref={totalRef}
            className="h-28 w-28 mt-4 flex items-center justify-center text-center border border-white outline-none bg-transparent text-5xl "
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
        

        
      </div>}
      {showReset && <div className="flex flex-col justify-center items-center">
          <button
          type="button"
            onClick={() => {
              setTotal(null);
              setShowReset(false)
            }}
            className=" border border-white py-2 px-4 mt-2"
          >
            reset
          </button>
        </div>}
      <NumberGrid total={total}/>
    </div>
  );
}
export default App;
