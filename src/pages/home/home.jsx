import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import { BsSun, BsMoon } from "react-icons/bs";
import "./home.scss";
import themeSlice from "../../features/themeSlice/themeSlice";

export const Home = () => {
  const [navLinks, setNavLinks] = useState([
    { name: "HOME", active: false, href: "#" },
    { name: "ABOUT", active: false, href: "#" },
    { name: "PROJECTS", active: false, href: "#" },
    { name: "CONTACT", active: false, href: "#" },
  ]);
  const theme = useSelector((state) => state.theme.defaultTheme);
  const dispatch = useDispatch();

  const navLinkOnClick = (index) => {
    var links = navLinks.map((v, i) => {
      return { name: v.name, active: i === index ? true : false, href: "#" };
    });
    setNavLinks(links);
  };

  const changeTheme = () => dispatch(themeSlice.actions.changeTheme());

  return (
    <Container fluid className="mainContainer" style={{ backgroundColor: theme.lightGrey }}>
      <Container className="px-0 px-lg-5">
        <Navbar collapseOnSelect expand="lg" className="px-0 py-4 py-lg-3">
          <Container>
            <Navbar.Brand href="#home" style={{ fontWeight: "bold", color: theme.green, width: 100 }}>
              Name Lastname
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                {navLinks.map((v, i) => {
                  return (
                    <Nav.Link
                      onClick={() => navLinkOnClick(i)}
                      className="py-0"
                      href={v.href}
                      key={i}
                      active={v.active}
                      style={{ color: v.active ? theme.green : theme.carbon, fontWeight: v.active ? "bold" : "normal" }}
                    >
                      {v.name}
                      {v.active && <div className="activeCircle d-none d-lg-block"></div>}
                    </Nav.Link>
                  );
                })}
              </Nav>
              <Nav style={{ width: 100, display: "flex", alignItems: "center", justifyContent: "end" }}>
                {theme.type === "light" && <BsSun style={{ cursor: "pointer" }} color={theme.green} size="1.5em" onClick={changeTheme} />}
                {theme.type === "dark" && <BsMoon style={{ cursor: "pointer" }} color={theme.green} size="1.5em" onClick={changeTheme} />}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </Container>
  );
};
