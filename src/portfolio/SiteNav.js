import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link as ScrollLink } from 'react-scroll';

import './SiteNav.scss';
import brand_logo from 'assets/lt_logo.svg';

export default function SiteNav() {
  return (
    <Navbar expand='lg' fixed='top' data-bs-theme='dark' className='site-nav navbar-dark shadow-5-strong'>
      <Container>
        <ScrollLink className='brand-link' to='home'>
          <Navbar.Brand href='/' >
            <div className='d-flex justify-content-center align-items-center unselectable'>
              <img
                src={brand_logo}
                alt='logo'
                height='40'
                width='40'
                className='rounded'
              />
              <div className='d-inline-block'>
                Liam<strong>Tangney</strong>
              </div>
            </div>
          </Navbar.Brand>
        </ScrollLink>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav>
            <Nav.Link as={ScrollLink} to='about' className='pointer'>
              <div className='unselectable'>ABOUT</div>
            </Nav.Link>
            <Nav.Link as={ScrollLink} to='projects' className='pointer'>
            <div className='unselectable'>PROJECTS</div>
            </Nav.Link>
            <Nav.Link as={ScrollLink} to='resume' className='pointer'>
              <div className='unselectable'>RESUME</div>
            </Nav.Link>
            <Nav.Link as={ScrollLink} to='contact' className='pointer'>
              <div className='unselectable'>CONTACT</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
