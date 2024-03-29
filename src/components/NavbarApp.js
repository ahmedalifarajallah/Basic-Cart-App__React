import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NavbarApp() {
  const cart = useSelector((state) => state.cart);

  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-5">
      <Container>
        <Link to="/" className="navbar-brand">
          Basic-Cart-App
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className="nav-link">
              Products
            </Link>
            <Link to="/cart" className="nav-link">
              Cart-{cart.length}
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
