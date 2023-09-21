import { Link } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    return (
    <header>
      <nav>
        <ul>

      <li><Link to="/">Home</Link></li>
      <li><Link to="/contato">Contato</Link></li>
      <li><a href onClick={() => navigate("/sobre")}>Sobre</Link>
    </ul>
    </nav>
    </header>
  );
} 