import styled from 'styled-components';

const Container = styled.div`
  max-width: 1300px;
  padding-left: var(--size-700);
  padding-right: var(--size-700);
  height: 100%;
  @media screen and (max-width: 1000px) {
    & {
      padding-left: var(--size-400);
      padding-right: var(--size-400);
    }
  }
  ${props => props.full && `
    max-width: inherit;
    margin-left: unset;
     margin-right: unset;
  `}
`;

export default Container;
