import { NavLink } from 'react-router-dom';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import styles from './NavbarRB.module.css';

import Designby from '../Designby/Designby';

export default function NavbarRB() {
  return (
    <Navbar bg="dark" expand="md" sticky="top" variant="dark">
      <Container>
        <Navbar.Brand className={styles.NavTitle} data-testid="nav-brand">
          <NavLink to="/">&#60;</NavLink>
          <NavLink to="/">Movies</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${styles.NavBar}`} data-testid="nav-links">
            <NavLink to="/" className={styles.NavSubTitle}>Home</NavLink>
            <NavLink to="/about" className={styles.NavSubTitle}>About</NavLink>
          </Nav>
          <Designby />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
