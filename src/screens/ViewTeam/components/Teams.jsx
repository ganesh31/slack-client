import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Teams = ({ teams }) => (
  <StyledTeamsWrapper>
    <StyledTeamList>
      {teams.map(({ id, letter }) => (
        <StyledTeamItem key={`team-${id}`}>{letter}</StyledTeamItem>
      ))}
    </StyledTeamList>
  </StyledTeamsWrapper>
);

const StyledTeamList = styled.ul`
  width: 100%;
  padding-left: 0;
  list-style: none;
`;

const StyledTeamItem = styled.li`
  height: 50px;
  width: 50px;
  background-color: #676066;
  color: #ffffff;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 11px;
  :hover {
    border-style: solid;
    border-color: #767676;
    border-width: thick;
  }
`;

const StyledTeamsWrapper = styled.div`
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
