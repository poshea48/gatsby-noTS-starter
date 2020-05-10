import React from 'react';

import Layout from '../components/layout/Layout';
import SEO from '../components/layout/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Sorry this page doesn&lsquot exist</p>
  </Layout>
);

export default NotFoundPage;
