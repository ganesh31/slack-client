import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Teams = ({ teams }) => (
  <StyledTeams>
    <ul>
      {teams.map(({ id, letter }) => (
        <li key={`team-${id}`}>{letter}</li>
      ))}
    </ul>
  </StyledTeams>
);

const StyledTeams = styled.div`
  grid-column: 1;
  grid-row: 1 / 4;
  background-color: #362234;
  color: #958993;
`;

Teams.propTypes = {
  teams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      letter: PropTypes.string,
    }),
  ).isRequired,
};

export default Teams;
