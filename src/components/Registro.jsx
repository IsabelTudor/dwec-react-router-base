import { useState } from "react";
import { registro } from "../services/usuarios.registro.service";

export default function Registro() {
  const [alias, setAlias] = useState("");
  const [password, setPassword] = useState("");

  const doRegistro = (e) => {
    e.preventDefault();
    registro(alias,password)
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={doRegistro}>
        <input
          name="alias"
          type="text"
          placeholder="Alias"
          value={alias}
          onChange={(e) => {
            setAlias(e.target.value);
          }}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Registro</button>
      </form>
    </div>
  );
}
