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
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://docs.google.com/spreadsheets/d/1etQoqC8FWvHQbP5V5e4_2WAF2bq1eBz7pTD1f7ouc4M"
          >
            Spreadsheet
          </a>
        </div>
        {data.allGoogleSpreadsheetSheet1.edges.map(edge => (
          <div key={edge.node.id || ''}>{edge.node.name}</div>
        ))}
      </div>
    )}
  />
);

export default Index;
