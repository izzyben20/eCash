import { RiCloseLine } from 'react-icons/ri';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const Container = styled.aside`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: #0d0d0d;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  z-index: 1000;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(RiCloseLine)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

export const SideBarWrapper = styled.div`
  color: #fff;
`;

export const SideBarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 760px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SideBarItem = styled(LinkS)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  list-style: none;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SideBarRouter = styled(LinkR)`
  border-radius: 25px;
  white-space: nowrap;
  padding: 1rem 1.5rem;
  color: #010606;
  background: #01bf71;
  font-size: 1.2rem;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
