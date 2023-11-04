import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="green-navbar">
      <Link to="/"> 🏠 Home </Link> | <Link to="/favoritos"> 🩷 Favoritos </Link>
    </nav>
  );
}
