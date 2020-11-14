import React, { useState } from 'react';
import { css, Global } from '@emotion/react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/helpers/seo';
import Signature from '../components/signature';

import { SignatureType } from '../types/signature';

export const query = graphql`
  {
    allContentfulSignature {
      edges {
        node {
          id
          firstName
          lastName
          title
          legal
        }
      }
    }
  }
`;

interface HomeProps {
  data: {
    allContentfulSignature: {
      edges: {
        node: SignatureType;
      }[];
    };
  };
}

const Home: React.FC<HomeProps> = ({ data: { allContentfulSignature } }) => {
  const [value, setValue] = useState<string>(``);

  const signatures = allContentfulSignature.edges.map((item) => item.node);

  const renderSignatures = () => (
    <ul
      css={css`
        list-style: none;
        margin: 0;
        padding: 0;

        @media (min-width: 992px) {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }

        & > li {
          margin-bottom: 50px;
        }
      `}
    >
      {signatures
        .filter(
          (signature) =>
            signature.firstName.toLowerCase().includes(value.toLowerCase()) ||
            signature.lastName.toLowerCase().includes(value.toLowerCase())
        )
        .map((signature) => (
          <li key={signature.id}>
            <Signature data={signature} />
          </li>
        ))}
    </ul>
  );

  return (
    <Layout>
      <Global
        styles={css`
          *,
          *:after,
          *:before {
            box-sizing: inherit;
          }
          html {
            font-family: sans-serif;
            height: 100%;
          }
          body {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <SEO title="Home" />
      <section
        css={css`
          padding: 20px;
        `}
      >
        <h1>Signature Compta Plan</h1>
        <form
          css={css`
            margin-bottom: 50px;
          `}
        >
          <label htmlFor="value">Rechercher : </label>
          <input
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        {renderSignatures()}
      </section>
    </Layout>
  );
};

export default Home;
