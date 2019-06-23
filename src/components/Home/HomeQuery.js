// @flow
import { gql } from 'apollo-boost';

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
