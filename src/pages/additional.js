/** @format */

import React from 'react';
import { graphql } from 'gatsby';
import * as s from '../styles/additional.module.scss';
import { RiGitRepositoryCommitsFill } from 'react-icons/ri';

export default function Additional({ data }) {
  console.log('additional data:', data);
  const repoes = data.github.search.edges;

  return (
    <div className={s.page}>
      <h1> GitHub Repositories List</h1>
      <ul className={s.flexbox}>
        {repoes.slice(0, 10).map((repo) => (
          <li key={repo.node.id} className={s.flex_item}>
            <div className={s.profile}>
              <img
                className={s.profile_img}
                src={repo.node.owner.avatarUrl}
                alt=''
              />

              <a
                href={repo.node.owner.url}
                aria-label='git profile link'
              >
                <p className={s.profile_login}>
                  {repo.node.owner.login}
                </p>
              </a>
            </div>
            <div className={s.repo_info}>
              <h3>{repo.node.name}</h3>
              <p>{repo.node.description}</p>
              <a
                aria-label='repository link'
                className={s.repo_link}
                href={repo.node.url}
              >
                <RiGitRepositoryCommitsFill />
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const query = graphql`
  query Search($repo: String = "gatsby") {
    github {
      search(type: REPOSITORY, query: $repo, first: 100) {
        edges {
          node {
            ... on GitHub_Repository {
              id
              name
              description
              url
              owner {
                avatarUrl
                url
                login
              }
            }
          }
        }
      }
    }
  }
`;
