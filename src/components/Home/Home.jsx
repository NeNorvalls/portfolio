import React from 'react';
import ProfileImageSection from '../ProfileImageSection/ProfileImageSection';
import IntroductionSection from '../IntroductionSection/IntroductionSection';
import { Container, Row, Col } from 'react-bootstrap';
import { HomeWrapper, TitleWrapper } from './HomeStyles';

function Home() {
  return (
    <HomeWrapper>
      <ProfileImageSection />
      <Container>
        <Row>
          <Col>
            <TitleWrapper>
              <h4>Welcome to my Portfolio!</h4>
            </TitleWrapper>
          </Col>
        </Row>
      </Container>
      <IntroductionSection />
    </HomeWrapper>
  );
}

export default Home;
