import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.main`
  max-width: 124rem;
  margin: 0 auto;
`;

export const CarList = styled.ul`
  width: 100%;
  padding: 2.4rem 0.8rem 24rem;

  display: grid;
  gap: 2.4rem;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
`;
