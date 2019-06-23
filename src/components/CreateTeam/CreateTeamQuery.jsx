import { gql } from 'apollo-boost';

export const CreateTeamMutation = gql`mutation($name: String!){
  createTeam(name: $name){
    ok
    errors{
      path
      message
    }
  }
}
`;

export default {};
