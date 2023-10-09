import React from 'react';
import ProfileImageSection from '../ProfileImageSection/ProfileImageSection';
import IntroductionSection from '../IntroductionSection/IntroductionSection';
import { Container, Row, Col } from 'react-bootstrap';
import { HomeWrapper, TitleWrapper, FlexWrapper } from './HomeStyles';

function Home() {
  return (
    <HomeWrapper>
      <FlexWrapper>
        <ProfileImageSection />
        <Container>
          <Row>
            <Col>
              <TitleWrapper>
                <h4 className='introTitle'>Welcome to my Portfolio!</h4>
              </TitleWrapper>
            </Col>
          </Row>
        </Container>
      </FlexWrapper>
      <IntroductionSection />
    </HomeWrapper>
  );
}

export default Home;
