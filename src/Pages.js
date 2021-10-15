import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
  position: relative;
  margin-top: ${(props) => props.headerHeight}px;
`;

const Page = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  padding-top: 32px;

  background-color: ${(props) => props.backgroundColor};

  font-size: 60px;
`;

const RecommendedItems = styled(Page)`
  height: 1000px;
`;

const BestItems = styled(Page)`
  height: 2000px;
`;

const About = styled(Page)`
  height: 3000px;
`;

const Contact = styled(Page)`
  height: 3500px;
`;

const Pages = ({ headerHeight, backgroundColors, pageRefs }) => {
  return (
    <Container headerHeight={headerHeight}>
      <RecommendedItems ref={pageRefs[0]} backgroundColor={backgroundColors[0]}>
        Recommended Items
      </RecommendedItems>
      <BestItems ref={pageRefs[1]} backgroundColor={backgroundColors[1]}>
        Best Items
      </BestItems>
      <About ref={pageRefs[2]} backgroundColor={backgroundColors[2]}>
        About
      </About>
      <Contact ref={pageRefs[3]} backgroundColor={backgroundColors[3]}>
        Contact
      </Contact>
    </Container>
  );
};

export default Pages;
