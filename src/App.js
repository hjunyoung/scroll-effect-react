import React, { useRef } from 'react';
import GlobalStyle from './GlobalStyle';

import Header from './Header';
import Pages from './Pages';
import ScrollToTop from './ScrollToTop';
import QuickMenu from './QuickMenu';

const headerHeight = 80;
const backgroundColors = ['#c49797', '#b6c497', '#97c4c1', '#aa97c4'];

const App = () => {
  const firstPage = useRef();
  const secondPage = useRef();
  const thirdPage = useRef();
  const fourthPage = useRef();

  const pageRefs = [firstPage, secondPage, thirdPage, fourthPage];

  return (
    <>
      <GlobalStyle />
      <Header
        headerHeight={headerHeight}
        backgroundColors={backgroundColors}
        pageRefs={pageRefs}
      />
      <Pages
        headerHeight={headerHeight}
        backgroundColors={backgroundColors}
        pageRefs={pageRefs}
      />
      <ScrollToTop />
      <QuickMenu />
    </>
  );
};

export default App;
