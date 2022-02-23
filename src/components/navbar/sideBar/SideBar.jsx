import React from 'react';
import { CloseIcon, Icon, Container } from './SideBar.Styled';
import {
  SideBarWrapper,
  SideBarMenu,
  SideBarItem,
  SideBtnWrap,
  SideBarRouter,
} from './SideBar.Styled';

const SideBar = ({ toggle, isOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SideBarWrapper>
        <SideBarMenu>
          <SideBarItem to="about" onClick={toggle}>
            About
          </SideBarItem>
          <SideBarItem to="discover" onClick={toggle}>
            Discover
          </SideBarItem>
          <SideBarItem to="services" onClick={toggle}>
            Services
          </SideBarItem>
          <SideBarItem to="signin" onClick={toggle}>
            Sign In
          </SideBarItem>
        </SideBarMenu>

        <SideBtnWrap>
          <SideBarRouter to="/signin">Sign Up</SideBarRouter>
        </SideBtnWrap>
      </SideBarWrapper>
    </Container>
  );
};

export default SideBar;
