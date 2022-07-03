import { motion } from "framer-motion";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BsMoon, BsSun } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import themeSlice from "../../features/themeSlice/themeSlice";
import "./customNavbar.scss";

export const CustomNavbar = () => {
  const [navLinks, setNavLinks] = useState([
    { name: "HOME", active: false, href: "#" },
    { name: "ABOUT", active: false, href: "#" },
    { name: "PROJECTS", active: false, href: "#" },
    { name: "CONTACT", active: false, href: "#" },
  ]);

  const [navExpanded, setNavExpanaded] = useState(false);
  const theme = useSelector((state) => state.theme.defaultTheme);
  const dispatch = useDispatch();

  const navLinkOnClick = (index) => {
    var links = navLinks.map((v, i) => {
      return { name: v.name, active: i === index ? true : false, href: "#" };
    });
    setNavLinks(links);
    setNavExpanaded(false);
  };

  const changeTheme = () => dispatch(themeSlice.actions.changeTheme());

  return (
    <Navbar collapseOnSelect expand="lg" className="px-0 py-3 navbarContainer">
      <Container className="px-0">
        <Navbar.Brand style={{ fontWeight: "bold", color: theme.green, width: 100 }}>Name Lastname</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbarTogglerButton px-0" onClick={() => setNavExpanaded(!navExpanded)}>
          {navExpanded ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: -180, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <IoMdClose color={theme.carbon} size="1.3em" />
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <HiOutlineMenuAlt3 color={theme.carbon} size="1.3em" />
            </motion.div>
          )}
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto pt-3 py-lg-0">
            {navLinks.map((v, i) => {
              return (
                <Nav.Link
                  onClick={() => navLinkOnClick(i)}
                  className="pb-3 pt-0 py-lg-0"
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
          <Nav className="changeThemeButton pt-3 py-lg-0">
            {theme.type === "light" && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 180, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <BsSun className="sunIcon" color={theme.green} size="1.5em" onClick={changeTheme} />
              </motion.div>
            )}
            {theme.type === "dark" && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
              >
                <BsMoon className="moonIcon" color="white" size="1.5em" onClick={changeTheme} />
              </motion.div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
