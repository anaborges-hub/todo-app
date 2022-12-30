import styled from 'styled-components';

export const StyledWrapper = styled.div`
  background-color: var(--bg-2);
  padding: 2rem;
  border-radius: 12px;
  @include smallDeviceSize {
    padding: 1.5rem;
  }
`;
