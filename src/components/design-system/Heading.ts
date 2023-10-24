import styled, { css } from 'styled-components';

const commonHeadingStyles = css`
  margin: 0.5rem 0 0.5rem 0;
  text-align: center;
`;

export const H1 = styled.h1`
  ${commonHeadingStyles};
`;

export const H3 = styled.h3`
  ${commonHeadingStyles}
`;

export const HeadingBox = styled.div`
  margin-bottom: 2rem;
`;