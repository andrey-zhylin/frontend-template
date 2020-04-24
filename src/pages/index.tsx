import React from 'react';
import { graphql } from 'gatsby';
import { ProductsQueryQuery } from '../../graphql-types';

const RootIndex = ({ data }: { data: ProductsQueryQuery }) => {
  const products = data.allContentfulProduct.edges;
  const blocks = data.allContentfulBlock.edges;

  return (
    <div>
      <ul>
        {products.map(({ node }) => {
          return <li key={node.name || ''}>{node.name}</li>;
        })}
      </ul>
      {blocks.map(({ node }) => {
        return (
          <pre key="test">{JSON.stringify(node.body?.json, undefined, 2)}</pre>
        );
      })}
    </div>
  );
};

export default RootIndex;

export const pageQuery = graphql`
  query ProductsQuery {
    allContentfulProduct {
      edges {
        node {
          name
        }
      }
    }
    allContentfulBlock {
      edges {
        node {
          body {
            body
            json
          }
        }
      }
    }
  }
`;
