import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Query } from '../../graphql-types';

export const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allStrapiProduct {
          edges {
            node {
              name
            }
          }
        }
      }
    `}
    render={(data: Query) => (
      <div>
        {data.allStrapiProduct.edges.map(edge => (
          <div key={edge.node.name || ''}>{edge.node.name}</div>
        ))}
      </div>
    )}
  />
);

export default Index;
