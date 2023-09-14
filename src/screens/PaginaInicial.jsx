import { useNavigate } from "react-router-dom";

export default function PaginaInicial() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Página Inicial</h1>

      <button onClick={() => navigate("/contato")}>Contato</button>
      <button onClick={() => navigate("/sobre")}>Sobre</button>
    </div>
  );
}
