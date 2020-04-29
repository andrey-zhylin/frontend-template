import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { Query } from '../../graphql-types';

export const Index = () => (
  <StaticQuery
    query={graphql`
      query {
        allGoogleSpreadsheetSheet1 {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    `}
    render={(data: Query) => (
      <div>
        {data.allGoogleSpreadsheetSheet1.edges.map(edge => (
          <div key={edge.node.id || ''}>{edge.node.name}</div>
        ))}
      </div>
    )}
  />
);

export default Index;
