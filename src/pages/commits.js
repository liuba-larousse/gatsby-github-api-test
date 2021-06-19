/** @format */

import React from 'react';
import { graphql } from 'gatsby';
import * as s from '../styles/commits.module.scss';

export default function Commits({ data }) {
  console.log(data);

  const commits =
    data.github.repository.ref.target.history.edges;

  console.log('commits :', commits);

  return (
    <div className={s.page}>
      <h1>Repository Commits</h1>
      <h2 className={s.total}>
        Total commits : {commits.length}
      </h2>
      <ul className={s.flexbox}>
        {commits.map((commit, i) => (
          <li className={s.flexrow}>
            <span className={s.order}>{i + 1}</span>
            <div className={s.flexcolumn}>
              <span className={s.date}>
                {commit.node.committedDate.slice(0, 10)} at{' '}
                {commit.node.committedDate.slice(11, 16)}
              </span>

              <p className={s.message}>
                {' '}
                {commit.node.message}
              </p>
              <span className={s.id}>
                {commit.node.oid}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const query = graphql`
  {
    github {
      repository(
        name: "gatsby-github-api-test"
        owner: "liuba-larousse"
      ) {
        id
        ref(qualifiedName: "main") {
          target {
            ... on GitHub_Commit {
              id
              history {
                pageInfo {
                  hasNextPage
                }
                edges {
                  node {
                    oid
                    message
                    committedDate
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
