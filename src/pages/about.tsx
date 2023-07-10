import * as React from 'react';
import { graphql, PageProps } from 'gatsby';

interface AboutPageData {
  site: {
    siteMetadata: {
      title: string;
    };
  };
}

const AboutPage: React.FC<PageProps<AboutPageData>> = ({ data }) => {
  const { title } = data.site.siteMetadata;

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the {title} website!</p>
    </div>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default AboutPage;
