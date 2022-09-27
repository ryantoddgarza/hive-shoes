import React from 'react';

const GlobalFooter = () => {
  const links = {
    github: {
      name: 'GitHub',
      url: 'https://github.com/ryantoddgarza/hive-shoes',
    },
  };

  return (
    <footer className="g-footer">
      <div className="inner container site">
        <div className="weak-text">
          © {new Date().getFullYear()} Hive Shoes x ENGR1320
        </div>
      </div>
      <div className="inner container site">
        <div className="weak-text">
          {`View site code on `}
          <a className="link" href={links.github.url} target="blank">
            {links.github.name}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default GlobalFooter;
