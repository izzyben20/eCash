import React, { useState } from 'react';
import { Video } from './Header.Styled';
import video from '../../video/video.mp4';
import {
  HeaderContainer,
  HeaderContent,
  BtnWrapper,
  ArrowRight,
  ArrowForward,
} from './Header.Styled';
import { Button } from '../CTA';

const Header = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeaderContainer >
      <Video src={video} loop autoPlay muted type="video" />
      <HeaderContent>
        <h1>Virtual Banking Made Easy</h1>
        <p>
          Sign up for a new account today and receive $350 in credit towards
          your next payment
        </p>
        <BtnWrapper>
        <img src="../../images/svg1.svg" alt="" />
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}{' '}
          </Button>
        </BtnWrapper>
        
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
