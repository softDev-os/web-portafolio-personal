import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo_header" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#proyects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("proyects")}
            >
              Proyects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src={navIcon1} alt="inlik" />
              </a>
              <a href="#">
                <img src={navIcon2} alt="facebook" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="instagram" />
              </a>
              <a href="#">
                <img src={navIcon4} alt="github" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Get my cv</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
