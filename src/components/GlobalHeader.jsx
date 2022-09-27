import React from 'react';
import { Link } from 'gatsby';

const GlobalHeader = () => (
  <header className="g-header">
    <div className="inner container site">
      <div className="site-name">
        <Link to="/">Hive Shoes</Link>
      </div>
    </div>
  </header>
);

export default GlobalHeader;
