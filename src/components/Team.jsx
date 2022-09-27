import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Team = () => {
  const {
    allTeamJson: { team },
  } = useStaticQuery(graphql`
    query TeamQuery {
      allTeamJson {
        team: nodes {
          id
          name
        }
      }
    }
  `);

  return (
    <div>
      {team.map(({ id, name }) => (
        <div className="p" key={id}>
          {name}
        </div>
      ))}
    </div>
  );
};

export default Team;
