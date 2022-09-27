import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Features = () => {
  const {
    allFeaturesJson: { features },
  } = useStaticQuery(graphql`
    query FeaturesQuery {
      allFeaturesJson {
        features: nodes {
          id
          heading
          body
        }
      }
    }
  `);

  return (
    <div className="card-grid">
      {features.map(({ id, heading, body }) => (
        <div className="card" key={id}>
          <header className="header">
            <h5 className="heading">{heading}</h5>
          </header>
          <div className="body">{body}</div>
        </div>
      ))}
    </div>
  );
};

export default Features;
