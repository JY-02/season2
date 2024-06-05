// NavbarStyle.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Navbar = styled.div`
  background-color: #fff;
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: large;
`;

export const LogoImage = styled.img`
  width: 160px;
  height: 145px;
  margin-left: -30px;
  margin-right: -100px;
`;

export const MainMenu = styled.div`
  display: flex;
  margin-left: 8px;
  top: 4px;
  align-items: center;
  padding: 19px 18px;
  white-space: nowrap;
  gap: 145px;
  position: relative; 
  &:hover {
    color: #42655B;
  }
`;

export const MenuItem = styled.div`
  position: relative;
  text-decoration: none;
  color: #9d9d9d;
  display: block;
  font-size: 23px;
  padding: 25px;
  cursor: pointer;

  &:hover {
    color: #42655B;
  }
`;

export const SubMenu = styled.div`
  position: absolute;
  top: 81px;
  left: -6px;
  width: 150px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  overflow: hidden;
  animation: slideDown 0.4s ease forwards;
  opacity: 0;
  display: none;

  ${MenuItem}:hover & {
    display: block;
    opacity: 1;
  }
`;

export const SubMenuItem = styled(Link)`
  display: block;
  padding: 20px 15px;
  color: #000;
  text-align: center;
  text-decoration: none;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
    font-weight: bold;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #9d9d9d;

  &:hover {
    color: #42655B;
  }
`;

export const StyledMypageLink = styled(Link)`
  text-decoration: none;
  color: #8DD1BD;

  &:hover {
    color: #42655B;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Idname = styled.div`
  margin-right: 20px;
  font-size: 24px;
  font-weight: bold;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 25px;
`;
