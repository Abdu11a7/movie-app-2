import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import { MoviesList } from "../MoviesList/MoviesList";
import { useEffect, useRef, useState } from "react";
export default function AppNavbar() {
  const [isSearching, setIsSearching] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const searchRef = useRef(null);
  const getInputValue = (e) => setInputVal(e.target.value);
  const showResult = () => setIsSearching(true);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearching(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <Navbar expand="lg">
      <Container className="position-relative" ref={searchRef}>
        <Link className="logo text-decoration-none h4" to="/">
          Movie App🍿
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <NavLink to="/" className="nav-link text-white ">
              Home
            </NavLink>
            <NavLink to="/movies&shows" className="nav-link text-white">
              Movies & Shows
            </NavLink>
            <NavLink to="support" className="nav-link text-white">
              Support
            </NavLink>
            <NavLink to="/contact-us" className="nav-link text-white">
              Contact Us
            </NavLink>
            <NavLink to="about" className="nav-link text-white">
              About
            </NavLink>
          </Nav>
          {isSearching && <MoviesList query={inputVal} />}
          <Form className="search-nav" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={inputVal}
              onChange={getInputValue}
              onFocus={showResult}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
