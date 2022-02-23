import React, { useEffect, useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  Logo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './Navbar.Styled';

export const toggleHome = () => {
  scroll.scrollToTop();
};

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <Logo to="/" onClick={toggleHome}>
            eCash
          </Logo>

          <MobileIcon onClick={toggle}>
            <RiMenu3Line size='2rem' />
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Discover
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Services
              </NavLink>
            </NavItem>
          </NavMenu>

          <NavBtn>
          <NavItem>
              <NavLink
                to="signup"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Sign up
              </NavLink>
            </NavItem>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
