// @flow
import gql from 'graphql-tag';

export const AllUsers = gql`
  query getAllUsers {
    allUsers {
      id
      email
    }
  }
`;

export const getUser = gql`
  {
    getUser(id: 2) {
      id
      username
    }
  }
`;
