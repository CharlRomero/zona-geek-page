import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="Navbar">
      <section className="Navbar-links">
        <img src={logo} alt="zonageek" className="Navbar-logo" />
        <Link className="Navbar-link" to="/">Home</Link>
        <Link className="Navbar-link" to="/phone">Phones</Link>
      </section>
      <section className="Navbar-login"></section>
    </nav>
  );
};
