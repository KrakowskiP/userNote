import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

export default function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">List</Nav.Link>
            <NavDropdown title="Add new" id="basic-nav-dropdown">
              <NavDropdown.Item href="/create/admin">Admin</NavDropdown.Item>
              <NavDropdown.Item href="/create/user">User</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
