import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link as ScrollLink } from 'react-scroll';

import './IntroBody.scss';

export default function IntroBody() {
  return (
    <Container>
      <Row>
        <Col />
        <Col sm='auto' className='intro-bio unselectable'>
          <div className='d-flex justify-content-center'>Hey, I'm Liam.</div>
        </Col>
        <Col />
      </Row>
      <Row className='divider'>
        <Col lg={4} md={3} xs={2} />
        <Col lg={4} md={6} xs={8}><hr /></Col>
        <Col lg={4} md={3} xs={2} />
      </Row>
      <Row className='justify-content-center unselectable'>
        <Col xs='auto'>
          <ScrollLink to='about'>
            <Button variant='secondary'
                    className='shadow btn-md-lg'>
              <FontAwesomeIcon icon={faCircleInfo} />
              {' '}About Me
            </Button>
          </ScrollLink>
        </Col>
        <Col xs='auto'>
          <Button href='https://www.linkedin.com/in/liam-tangney/'
                  target='_blank'
                  variant='secondary'
                  className='shadow btn-md-lg'>
            <FontAwesomeIcon icon={faLinkedinIn} />
            {' '}LinkedIn
          </Button>
        </Col>
        <Col xs='auto'>
          <Button href='https://github.com/ldtags'
                  target='_blank'
                  variant='secondary'
                  className='shadow btn-md-lg'>
            <FontAwesomeIcon icon={faGithub} />
            {' '}Github
          </Button>
        </Col>
      </Row>
    </Container>
  );
}