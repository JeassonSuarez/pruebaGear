import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [veces, setVeces] = useState(null);
  const [asteriscosText, setAsteriscosText] = useState([]);
  const [arrAsteriscos, setArrAsteriscos] = useState([]);
  const [vecesDos, setVecesDos] = useState(null);
  const [resultado, setResultado] = useState(null);
  const [matrizOrdenada, setMatrizOrdenada] = useState(null);


  /** punto 1 */
  const handleChange = (e) => {
    setVeces(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    let asteriscos = "";
    let arrAsteriscosPrimero = [];
    for (let index = 0; index < veces; index++) {
      asteriscos = asteriscos + "*";
      console.log(asteriscos);
      arrAsteriscosPrimero.push(asteriscos);
      setAsteriscosText(arrAsteriscosPrimero);
    }
  }, [veces]);


  /** punto 2 */
  const handleChangeDos = (e) => {
    let asteriscos = "";
    let arr = [];
    for (let index = 0; index < e.target.value; index++) {
      asteriscos = asteriscos + "*";
      arr.push(asteriscos);
      console.log(asteriscos);
    }
    reverse(arr);
  }

  const reverse = (arr) => {
    for (let i = arr.length-2; i >= 0; i--) {
      arr.push(arr[i]);
      // console.log(arr[i]);
    }

    // console.log(arr);
    setArrAsteriscos(arr);
  }


  /**punto 3 */
  const calcularResultado = () => {
    let arr = [2,4,6,7,2,3];
    let suma = 0;
    let mayor = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i<arr.length-1) {
        suma = arr[i] + arr [i+1]
        console.log();
        if (suma>mayor) {
          mayor = suma;
        }
      }
    }
    setResultado(mayor);
  }

  /** punto 4 */
  const ordenarMenorMayor = () => {
    let matriz = [9,8,2,3,3,9,1];
    setMatrizOrdenada([...new Set(matriz.sort())].toString())
  }

  return (
    <div className="App">
      <h2>Punto 1</h2>
      <input type="number" className="numerVeces" onChange={handleChange} />
      {
        asteriscosText.map((e, i) => {
          return <p key={i}>{e}</p>
        })
      }
      <h2>Punto 2</h2>
      <input type="number" className="numerVeces" onChange={handleChangeDos} />
      {
        arrAsteriscos.map((e, i) => {
          return <p key={i}>{e}</p>
        })
      }
      <h2>Punto 3</h2>
      <p>{resultado}</p>
      <button onClick={calcularResultado}>Calcula suma mayor contiguos</button>
      <h2>Punto 4</h2>
      <p>Matriz Ordenada</p>
      <p>{matrizOrdenada}</p>
      <button onClick={ordenarMenorMayor}>Calcula suma mayor contiguos</button>
    </div>
  );
}

export default App;
