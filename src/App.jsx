import { useState } from "react";
import "./App.css";

function App() {
  const [valorIncremento, setValorIncremento] = useState(1);

  const [contador, setContador] = useState(0);

  function handleIncremento() {
    setContador(contador + Number(valorIncremento));
  }

  function handleDecrementa() {
    setContador(contador - Number(valorIncremento));
  }

  console.log(valorIncremento);
  console.log(contador);

  return (
    <>
      <div className="grid w-50">
        <div className="flex items-center justify-center mb-4">
          <input
            type="number"
            className="px-2 py-2 rounded-full w-15 bg-amber-300 border-0 outline-0"
            onChange={(e) => setValorIncremento(e.target.value)}
            value={valorIncremento}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 p-2 h-15 text-white cursor-pointer"
            onClick={handleIncremento}
          >
            Incrementa
          </button>
          <button
            className="bg-red-500 p-2 h-15 text-white cursor-pointer"
            onClick={handleDecrementa}
          >
            Decrementa
          </button>
        </div>
        <div className="bg-gray-900 p-5 h-50 flex items-center justify-center">
          <div className="text-5xl text-gray-100">{contador}</div>
        </div>
      </div>
    </>
  );
}

export default App;
