/** @format */

import React from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import * as s from '../styles/search.module.scss';
import { RiGitRepositoryCommitsFill } from 'react-icons/ri';

const SEARCH = gql`
  query queryRepositories($query: String!) {
    github {
      search(type: REPOSITORY, query: $query, first: 100) {
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

export default function Search() {
  const [query, setQuery] = React.useState('g');
  const [getRepositories, { loading, data }] =
    useLazyQuery(SEARCH);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Search repositories </h1>
      <h2>Search your favourite library</h2>
      <div className={s.search}>
        <div className={s.input}>
          <input
            type='text'
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder='type something'
          />
        </div>
        <button
          onClick={() =>
            getRepositories({
              variables: { query },
            })
          }
        >
          Search
        </button>
      </div>
      <ul className={s.flexbox}>
        {data
          ? data.github.search.edges
              .slice(0, 10)
              .map((repo) => (
                <li
                  key={repo.node.id}
                  className={s.flex_item}
                >
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
              ))
          : null}
      </ul>
    </div>
  );
}
