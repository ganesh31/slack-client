import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import findIndex from 'lodash/findIndex';
import decode from 'jwt-decode';
import { Channels, Teams } from '../components';

const SideBar = ({ data: { loading, allTeams }, currentTeamId }) => {
  if (loading) {
    return null;
  }
  const teamIndex = findIndex(allTeams, ['id', currentTeamId]);
  const team = allTeams[teamIndex];

  const {
    user: { username },
  } = decode(localStorage.getItem('token'));
  return [
    <Teams
      key="teams-sidebar"
      teams={allTeams.map(({ id, name }) => ({
        id,
        letter: name.charAt(0).toUpperCase(),
      }))}
    />,
    <Channels
      key="channels-sidebar"
      teamName={team.name}
      userName={username || ''}
      channels={team.channels}
      users={[{ id: 0, name: 'slack-bot' }, { id: 1, name: 'jack' }]}
    />,
  ];
};

const allTeamsQuery = gql`
  {
    allTeams {
      id
      name
      channels {
        name
        id
      }
    }
  }
`;

SideBar.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    allTeams: PropTypes.arrayOf({
      id: PropTypes.number,
      name: PropTypes.string,
      channels: PropTypes.arrayOf({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default graphql(allTeamsQuery)(SideBar);
