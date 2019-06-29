import React from 'react';
import {
  Channels, Teams, Header, Messages, Input, AppLayout,
} from './ViewTeam.styles';
// import { Test } from './ViewTeam.styles';

const ViewTeam = () => (
  <AppLayout>
    <Teams>Teams</Teams>
    <Channels>Channels</Channels>
    <Header>Header</Header>
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <Input>
      <input type="text" placeholder="CSS Grid Layout Module" />
    </Input>
  </AppLayout>
);

ViewTeam.propTypes = {
  // bla: PropTypes.string,
};

ViewTeam.defaultProps = {
  // bla: 'test',
};

export default ViewTeam;
