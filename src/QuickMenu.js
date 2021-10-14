import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const menuHeight = 360;
const menuMargin = 48;

const Container = styled.article.attrs((props) => ({
  style: {
    transform: `translateY(${props.topOffset}px)`,
  },
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 16px;
  top: 0;

  width: 88px;
  height: ${menuHeight}px;

  background-color: #cfb593;
  font-size: 40px;

  writing-mode: vertical-lr;
  user-select: none;
  cursor: pointer;

  will-change: transform;
  transition: transform 0.2s linear;
`;

const QuickMenu = () => {
  const windowHeight = window.innerHeight;
  const initialOffset = windowHeight - (menuHeight + menuMargin);
  const [topOffset, setTopOffset] = useState(initialOffset);

  useEffect(() => {
    const moveQuickMenu = () => {
      const scroll = window.scrollY;
      let offset = scroll + (windowHeight - menuHeight) / 2;

      if (scroll < windowHeight / 2) {
        offset = initialOffset;
      }

      setTopOffset(offset);
    };

    window.addEventListener('scroll', moveQuickMenu);

    return () => window.removeEventListener('scroll', moveQuickMenu);
  }, [initialOffset, windowHeight]);

  return (
    <Container topOffset={topOffset}>
      <span>Quick Menu</span>
    </Container>
  );
};

export default QuickMenu;
