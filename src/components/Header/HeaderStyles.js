import styled from 'styled-components';

export const CustomHeaderWrapper = styled.div`
  background-color: #333;
  color: white;
  padding: 20px 0;
`;

export const CustomHeaderTitle = styled.h1`
  font-size: 24px;
  cursor: pointer;
  margin-left: 1rem;
`;

export const StyledIconButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 24px;
  cursor: pointer;
  margin-right: 1rem;
  @media (min-width: 901px) {
    display: none;
  }
`;

export const BigScreenNavLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
  @media (min-width: 901px) {
    display: flex;
  }
`;

export const NavLink = styled.div`
  margin-right: 20px;
  cursor: pointer;
  position: relative;
  @media (max-width: 900px) {
    margin: 10px;
  }
`;

export const NavItemDropdown = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  min-width: 150px;
  padding: 10px;
  color: white;
`;

export const CustomNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
`;
