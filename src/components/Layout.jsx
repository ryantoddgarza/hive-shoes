import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import GlobalFooter from '../components/GlobalFooter';

const Layout = ({ children }) => (
  <>
    <GlobalHeader />
    <main>{children}</main>
    <GlobalFooter />
  </>
);

export default Layout;
