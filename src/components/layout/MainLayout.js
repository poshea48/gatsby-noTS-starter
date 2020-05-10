import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';
import { Global, css } from '@emotion/core';
import { useStaticQuery, graphql } from 'gatsby';
import globalTheme from './globalStyles';

import theme from '../../../config/theme';
// import Header from '../header'
import SEO from './SEO';

const MainLayout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Global
          styles={css`
            ${globalTheme()}
            a {
              color: ${theme.colors.black.blue};
            }
            a:hover {
              color: ${theme.colors.primary.light};
            }
            h1 {
              font-family: ${theme.fontFamily.heading};
            }
          `}
        />
        <SEO title={site.siteMetadata.title} />
        {children}
      </React.StrictMode>
    </ThemeProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
