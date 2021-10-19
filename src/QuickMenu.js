import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
  height: ${(props) => props.quickMenuHeight}px;

  background-color: #cfb593;
  font-size: 40px;

  writing-mode: vertical-lr;
  user-select: none;
  cursor: pointer;

  will-change: transform;
  transition: transform 0.2s linear;
`;

const QuickMenu = ({ quickMenuHeight }) => {
  const initialOffset = window.innerHeight - (quickMenuHeight + menuMargin);
  const [topOffset, setTopOffset] = useState(initialOffset);

  useEffect(() => {
    const moveQuickMenu = () => {
      const windowHeight = window.innerHeight;
      const scroll = window.scrollY;
      let offset = scroll + (windowHeight - quickMenuHeight) / 2;

      if (scroll < windowHeight / 2) {
        offset = initialOffset;
      }

      setTopOffset(offset);
    };

    window.addEventListener('scroll', moveQuickMenu);
    window.addEventListener('resize', moveQuickMenu);

    return () => {
      window.removeEventListener('scroll', moveQuickMenu);
      window.removeEventListener('resize', moveQuickMenu);
    };
  }, [initialOffset, quickMenuHeight]);

  return (
    <Container topOffset={topOffset} quickMenuHeight={quickMenuHeight}>
      <span>Quick Menu</span>
    </Container>
  );
};

export default QuickMenu;
