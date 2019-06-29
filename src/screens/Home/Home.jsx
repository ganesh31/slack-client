import React from 'react';
import { graphql } from 'react-apollo';
import PropTypes from 'prop-types';

import { AllUsers } from './HomeQuery';

const Home = ({ data: { allUsers = [] } }) => (
  <div>
    {allUsers.map(({ id, email }) => (
      <div key={id}>
        {email}
      </div>
    ))}
  </div>
);

export default graphql(AllUsers)(Home);

Home.propTypes = {
  data: PropTypes.shape({
    loading: PropTypes.bool,
    allUsers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
    })),
  }).isRequired,
};
