import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/helpers/seo';

const Error: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Page not found</h1>
  </Layout>
);

export default Error;
