import React from 'react';
import GlobalStyle from './GlobalStyle';

import ScrollToTop from './ScrollToTop';
import QuickMenu from './QuickMenu';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <QuickMenu />
    </>
  );
};

export default App;
