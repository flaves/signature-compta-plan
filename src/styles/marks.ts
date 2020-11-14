import { css } from '@emotion/react';

import mq from './mq';

const marks = css`
  body {
    border: 10px solid red;
    ${mq(`sm`)} {
      border-color: pink;
    }
    ${mq(`md`)} {
      border-color: orange;
    }
    ${mq(`lg`)} {
      border-color: green;
    }
    ${mq(`xl`)} {
      border-color: blue;
    }
  }
`;

export default marks;
