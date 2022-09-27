import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const About = () => {
  const { about } = useStaticQuery(graphql`
    query AboutQuery {
      about: markdownRemark(frontmatter: { title: { eq: "about" } }) {
        html
      }
    }
  `);

  return (
    <div
      className="rich-text"
      dangerouslySetInnerHTML={{ __html: about.html }}
    />
  );
};

export default About;
