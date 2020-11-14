import React from 'react';
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
  const signatures = allContentfulSignature.edges.map((item) => item.node);

  const renderSignatures = () => (
    <ul>
      {signatures.map((signature) => (
        <li key={signature.id}>
          <Signature data={signature} />
        </li>
      ))}
    </ul>
  );

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Signature Compta Plan</h1>
      {renderSignatures()}
    </Layout>
  );
};

export default Home;
