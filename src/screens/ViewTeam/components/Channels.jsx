import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Channels = ({
  teamName, userName, users, channels,
}) => (
  <StyledChannels>
    <div>
      {teamName}
      {userName}
    </div>
    <div>
      <ul>
        <li>Channels</li>
        {channels.map(({ id, name }) => (
          <li key={`channel-${id}`}>{`# ${name}`}</li>
        ))}
      </ul>
    </div>
    <div>
      <ul>
        <li>Direct Messages</li>
        {users.map(({ id, name }) => (
          <li key={`user-${id}`}>{name}</li>
        ))}
      </ul>
    </div>
  </StyledChannels>
);

const StyledChannels = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  background-color: #4e3a4c;
  color: #958993;
`;

export default Channels;

Channels.propTypes = {
  teamName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  channels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

Channels.defaultProps = {
  users: [],
};
