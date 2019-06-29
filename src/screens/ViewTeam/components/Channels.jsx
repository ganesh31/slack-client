import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Channels = ({
  teamName, userName, users, channels,
}) => (
  <StyledChannels>
    <div>
      <PushLeft>
        <TeamNameHeader>{teamName}</TeamNameHeader>
        {userName}
      </PushLeft>
    </div>
    <div>
      <SideBarList>
        <SideBarListHeader>Channels</SideBarListHeader>
        {channels.map(({ id, name }) => (
          <SideBarListItem key={`channel-${id}`}>{`# ${name}`}</SideBarListItem>
        ))}
      </SideBarList>
    </div>
    <div>
      <SideBarList>
        <SideBarListHeader>Direct Messages</SideBarListHeader>
        {users.map(({ id, name }) => (
          <SideBarListItem key={`user-${id}`}>
            <Bubble />
            {' '}
            {name}
          </SideBarListItem>
        ))}
      </SideBarList>
    </div>
  </StyledChannels>
);

const paddingLeft = 'padding-left: 10px';

const StyledChannels = styled.div`
  grid-column: 2;
  grid-row: 1 / 4;
  background-color: #4e3a4c;
  color: #958993;
`;

const PushLeft = styled.div`
  ${paddingLeft};
`;

const SideBarListHeader = styled.li`
  ${paddingLeft};
`;

const TeamNameHeader = styled.h1`
  color: #ffffff;
  font-size: 20px;
`;

const SideBarList = styled.ul`
  width: 100%;
  list-style: none;
  padding-left: 0;
`;

const SideBarListItem = styled.li`
  ${paddingLeft};
  :hover {
    background: #3e313c;
  }
`;

const Green = styled.span`
  color: #38978d;
`;

// eslint-disable-next-line react/prop-types
const Bubble = ({ on = true }) => (on ? <Green>●</Green> : '○');

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
