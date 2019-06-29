import React from 'react';
import { Messages, AppLayout } from './ViewTeam.styles';
import {
  Channels, Teams, Header, SendMessage,
} from './components';

const ViewTeam = () => (
  <AppLayout>
    <Teams teams={[{ id: 0, letter: 'T' }, { id: 1, letter: 'B' }]} />
    <Channels
      teamName="TeamName"
      userName="UserName"
      channels={[{ id: 0, name: 'general' }, { id: 1, name: 'random' }]}
      users={[{ id: 0, name: 'slack-bot' }, { id: 1, name: 'jack' }]}
    />
    <Header channelName="general" />
    <Messages>
      <ul className="message-list">
        <li />
        <li />
      </ul>
    </Messages>
    <SendMessage channelName="general" />
  </AppLayout>
);

ViewTeam.propTypes = {
  // bla: PropTypes.string,
};

ViewTeam.defaultProps = {
  // bla: 'test',
};

export default ViewTeam;
