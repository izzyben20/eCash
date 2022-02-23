import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeaderContainer = styled.header`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
      content:"";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(180deg, rgba(0,0,0,.5) 0%, rgba(0,0,0, 0.4) 100%), linear-gradient(180deg, rgba(0,0,0,.3) 0%, transparent 100%) ;
      z-index: 2;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100vh;
  --o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  overflow: hidden;
`;

export const HeaderContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 0.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;

  h1 {
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760px) {
      font-size: 40px;
    }

    @media screen and (max-width: 480px) {
      font-size: 32px;
    }
  }

  p {
    margin-top: 1.5rem;
    color: #fff;
    font-size: 2rem;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }

    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 0.5rem;
  font-size: 1.4rem;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.5rem;
  font-size: 1.4rem;
`;
