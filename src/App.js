import React, { useState, useEffect, useRef } from 'react';
import GlobalStyle from './GlobalStyle';

import Header from './Header';
import Pages from './Pages';
import ScrollToTop from './ScrollToTop';
import QuickMenu from './QuickMenu';

const headerHeight = 80;
const quickMenuHeight = 360;
const backgroundColors = ['#c49797', '#b6c497', '#97c4c1', '#aa97c4'];

const App = () => {
  const [quickMenuVisibility, setQuickMenuVisibility] = useState(
    window.innerHeight > quickMenuHeight
  );
  const firstPage = useRef();
  const secondPage = useRef();
  const thirdPage = useRef();
  const fourthPage = useRef();

  // Make the page scroll to top when refreshed.
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      window.scrollTo(0, 0);
    });
    window.addEventListener('resize', () => {
      setQuickMenuVisibility(window.innerHeight > quickMenuHeight);
    });

    return () => {
      window.removeEventListener('beforeunload', () => {
        window.scrollTo(0, 0);
      });
      window.removeEventListener('resize', () => {
        setQuickMenuVisibility(window.innerHeight > quickMenuHeight);
      });
    };
  }, []);

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
      {quickMenuVisibility && <QuickMenu quickMenuHeight={quickMenuHeight} />}
    </>
  );
};

export default App;
