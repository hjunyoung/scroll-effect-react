import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 24px;
  bottom: 16px;

  width: 40px;
  height: 40px;

  font-size: 40px;
  z-index: 1;

  border-radius: 50%;
  border: none;
  outline: none;

  transition: transform 1s ease-in-out, opacity 1s ease-in-out;
  ${(props) =>
    props.visible
      ? css`
          opacity: 0.7;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          transform: translateY(80px);
        `}

  &:active {
    font-size: 38px;
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Container
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      visible={visible}
    >
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </Container>
  );
};

export default ScrollToTop;
