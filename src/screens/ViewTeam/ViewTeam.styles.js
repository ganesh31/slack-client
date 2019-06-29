import styled from 'styled-components';

export const Messages = styled.div`
  grid-column: 3;
  grid-row: 2;
`;

export const Input = styled.div`
  grid-column: 3;
  grid-row: 3;
`;

export const AppLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 100px 250px 1fr;
  grid-template-rows: auto 1fr auto;
`;
