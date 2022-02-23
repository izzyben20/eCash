import styled from 'styled-components';

export const ServicesContainer = styled.section`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  h1 {
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 10px;

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  @media screen and (max-width: 760px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 1rem;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  max-height: 340px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
