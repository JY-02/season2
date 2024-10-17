// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import * as Styles from './NavbarStyle';

const Navbar: React.FC = () => {
  return (
    <Styles.Navbar>
      <Styles.MainMenu>
        <Styles.MenuItem>
          <Link to="/MainHome">
          <Styles.LogoImage src={`src/assets/images/logo.png`} alt="Logo" /></Link>
        </Styles.MenuItem>

        <Styles.MenuItem>
          주요기능
          <Styles.SubMenu>
            <Styles.SubMenuItem to="/CreateStory">동화제작</Styles.SubMenuItem>
            <Styles.SubMenuItem to="/Store">씨앗상점</Styles.SubMenuItem>
          </Styles.SubMenu>
        </Styles.MenuItem>

        <Styles.MenuItem>
          동화찾기
          <Styles.SubMenu>
            <Styles.SubMenuItem to="/PopularBook">인기동화</Styles.SubMenuItem>
            <Styles.SubMenuItem to="/Search">검색</Styles.SubMenuItem>
          </Styles.SubMenu>
        </Styles.MenuItem>
        <Styles.MenuItem>
          <Styles.StyledLink to="/Service">고객센터</Styles.StyledLink>
          </Styles.MenuItem>
        <Styles.MenuItem>
          <Styles.StyledMypageLink to="/Mypage">마이페이지</Styles.StyledMypageLink>
          </Styles.MenuItem>
      </Styles.MainMenu>

      <div className="login-signup">
        <Link to="/Login">
          <Styles.LoginSignupButton>Login</Styles.LoginSignupButton>
        </Link>
        <Link to="/SignUp">
          <Styles.LoginSignupButton>회원가입</Styles.LoginSignupButton>
        </Link>
      </div>
    </Styles.Navbar>
  );
};

export default Navbar;
