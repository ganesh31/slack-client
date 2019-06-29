import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

const SendMessage = ({ channelName }) => (
  <StyledSendMessage>
    <Input fluid placeholder={`Message # ${channelName}`} />
  </StyledSendMessage>
);

const StyledSendMessage = styled.div`
  grid-column: 3;
  grid-row: 3;
`;

SendMessage.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export default SendMessage;
