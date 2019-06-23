import { gql } from 'apollo-boost';

export const RegisterUser = gql`
mutation($username: String!, $email: String!, $password: String!){
  register(username:$username, password: $password, email: $email){
    ok
    errors{
      path
      message
    }
  }
}`;

export const ALL = '';
