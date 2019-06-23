import { gql } from 'apollo-boost';

export const LoginUser = gql`mutation($username: String!, $password: String!){
  login(username:$username, password: $password){
    token
    ok
    refreshToken
    errors{
      path
      message
    }
  }
}
`;

export default {};
