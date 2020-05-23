import styled, { css } from "styled-components";
import Grid from "@material-ui/core/Grid";

export const LayoutContainer = styled.div`
  ${() => css`
    max-width: 1280px;
    margin: 0 auto;
  `};
`;

export const LeftSection = styled(Grid)`
  ${() => css``};
`;

export const RightSection = styled(Grid)``;
