import React from 'react';
import Icon from '../../images/svg5.svg';
import Icon2 from '../../images/svg1.svg';
import Icon3 from '../../images/svg7.svg';
import { ServicesContainer, ServicesWrapper, ServicesCard, ServicesIcon } from './Services.Styled';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <h1>Our Services</h1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon} alt="" />
          <h2>Reduce Expense</h2>
          <p>We help reduce your fees and increase your overall revenue.</p>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} alt="" />
          <h2>Virtual Offices</h2>
          <p>You can access our platform online anywhere in the world.</p>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} alt="" />
          <h2>Premium Benefits</h2>
          <p>Unlock our special membership card that returns 5% cash back.</p>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
