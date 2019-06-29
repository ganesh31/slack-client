import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

export const ChannelHeader = ({ channelName }) => (
  <StyledHeader>
    <Header textAlign="center">{`#${channelName}`}</Header>
  </StyledHeader>
);

const StyledHeader = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

ChannelHeader.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default ChannelHeader;
