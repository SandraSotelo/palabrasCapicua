import React, { useState } from "react";

export default function InputCapicua() {
  const [inputValue, setInputValue] = useState("");
  const [esCapicua, setComparacionCapicua] = useState(false);
  const [mensaje, setMensaje] = useState(false);

  const verificarPalabra = () => {
    const limpiarPalabra = inputValue.replace(/\s/g, "").toLowerCase();
    const palabraAlReves = limpiarPalabra.split("").reverse().join("");
    const esCapicua = limpiarPalabra === palabraAlReves;

    setComparacionCapicua(esCapicua);
    setMensaje(true);
  };

  return (
    <div className="App">
      <h2>Verifica si la palabra ingresada es capicua</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(evento) => setInputValue(evento.target.value)}
        placeholder="Escribe la palabra o numero"
      />
      <div>
        <button onClick={verificarPalabra}>Validar</button>
      </div>

      {inputValue && esCapicua ? (
        <p>¡El texto digitado es capicúa!</p>
      ) : inputValue && mensaje ? (
        <p>¡El texto digitado no es capicúa!.</p>
      ) : null}
    </div>
  );
}
