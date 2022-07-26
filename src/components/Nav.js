import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

export default function TopNav() {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/">List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
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
