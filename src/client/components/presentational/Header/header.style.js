import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
    ${() => css`
        display: flex;
        max-width: 1280px;
        margin: 0 auto;
        a {
            margin-right: 20px;
            text-decoration: none;
        }
    `};
`;