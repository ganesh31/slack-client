import React from 'react';
import { Messages, AppLayout } from './ViewTeam.styles';
import { Header, SendMessage } from './components';
import { SideBar } from './container';

const ViewTeam = () => (
  <AppLayout>
    <SideBar currentTeamId={3} />
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
