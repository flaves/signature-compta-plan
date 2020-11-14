import { css } from '@emotion/react';

import { BiennaleFont } from './fonts';
import marks from './marks';

const reset = css`
  ${process.env.NODE_ENV === `development` && marks}

  ${BiennaleFont};

  *,
  *:after,
  *:before {
    box-sizing: inherit;
  }

  html {
    font-family: Biennale, Helvetica Neue, sans-serif;
    height: 100%;
  }

  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  button {
    font-family: Biennale, Helvetica Neue, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  address {
    font-style: normal;
  }
`;

export default reset;
