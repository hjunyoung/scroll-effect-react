import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  z-index: 10;

  width: 100%;
  min-width: 360px;
  height: ${(props) => props.headerHeight}px;
  padding: 0 32px;

  background-color: #565656;

  border-bottom: 1px solid #494949;

  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

const Logo = styled.article`
  font-size: 32px;
  font-weight: 700;

  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;

const Navigation = styled.nav`
  width: 50%;
  height: 100%;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    height: 100%;
  }

  @media screen and (max-width: 992px) {
    display: none;
  }
`;

const Menu = styled.button`
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  transition: font-size 0.5s ease-in-out, color 0.5s ease-in-out;

  &.selected {
    font-size: 18px;
    color: ${(props) => props.color};
  }
`;

const navItem = ['Recommended Items', 'Best Items', 'About', 'Contact'];

const Header = ({ headerHeight, backgroundColors, pageRefs }) => {
  const [menuIndex, setMenuIndex] = useState(0);

  useEffect(() => {
    const scrollTo = () => {
      if (window.scrollY >= pageRefs[3].current.offsetTop) {
        setMenuIndex(3);
      } else if (window.scrollY >= pageRefs[2].current.offsetTop) {
        setMenuIndex(2);
      } else if (window.scrollY >= pageRefs[1].current.offsetTop) {
        setMenuIndex(1);
      } else {
        setMenuIndex(0);
      }
    };

    window.addEventListener('scroll', scrollTo);

    return () => window.removeEventListener('scroll', scrollTo);
  }, [pageRefs]);

  const scrollToPage = (index) => {
    let topOffset = pageRefs[index].current.offsetTop;
    window.scrollTo({ top: topOffset, behavior: 'smooth' });
  };

  return (
    <Container headerHeight={headerHeight}>
      <Logo>
        <a href="/">
          <h1>React Scroll Project</h1>
        </a>
      </Logo>
      <Navigation>
        <ul>
          {navItem.map((item, index) => {
            const className = index === menuIndex ? 'selected' : '';

            return (
              <div key={index}>
                <Menu
                  onClick={() => scrollToPage(index)}
                  className={className}
                  color={backgroundColors[index]}
                >
                  {item}
                </Menu>
              </div>
            );
          })}
        </ul>
      </Navigation>
    </Container>
  );
};

export default Header;
