import styled, { css } from "styled-components";
import Grid from "@material-ui/core/Grid";

const ImageCardWrapper = styled(Grid)`
  .card-image {
    height: 0;
    padding-top: 56.25%;
  }
  .MuiCardContent-root {
    background-color: rgba(0, 0, 0, 0.65);
  }
  &.MuiGrid-item {
    margin-bottom: 24px;
  }
  .MuiTypography-colorTextSecondary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffae42;
    font-size: 18px;
    padding-bottom: 8px;
    border-bottom: solid 1px rgba(191, 191, 191, 0.35);
    margin-bottom: 8px;
    .image-text-label {
      word-break: normal;
      text-align: end;
    }
    .image-text-status {
      color: #fff;
    }
    @media (min-width: 1280px) {
      font-size: 12px;
      .image-text-status {
        max-width: 95px;
      }
    }
  }
  @media (min-width: 1280px) {
    &.MuiGrid-item {
      margin-bottom: 0;
    }
  }
`;

export default ImageCardWrapper;
