import { gql } from 'graphql-request';

export const ADD_NEWSLETTER = gql`
  mutation AddNewsletter($name:String!, $email:String!, $track:String!) {
  createNewsletter(data: {name: $name, email: $email, track: $track}) {
    id
  }
}
`;
