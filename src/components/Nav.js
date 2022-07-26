import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";

export default function TopNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">List</Nav.Link>
            <NavDropdown title="Add user" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/create">
                Add admin
              </NavDropdown.Item>
              <NavDropdown.Item href="/user/create">Add user</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
