/** @format */

import React from 'react';
import { graphql } from 'gatsby';
import * as s from '../styles/profile.module.scss';

export default function Profile({ data }) {
  console.log(data);

  const repoes = data.github.user.repositories.edges;
  console.log(repoes);
  return (
    <div className={s.page}>
      <h1>Profile info</h1>
      <img
        className={s.avatar}
        src={data.github.user.avatarUrl}
        alt=''
      />
      <p>
        <span className={s.highlited}>Name: </span>
        {data.github.user.name}
      </p>
      <p>
        <span className={s.highlited}>Email: </span>{' '}
        {data.github.user.email}
      </p>
      <p>
        {' '}
        <span className={s.highlited}>Login:</span>{' '}
        {data.github.user.login}
      </p>
      <p>
        <span className={s.highlited}>Bio:</span>{' '}
        {data.github.user.bio}
      </p>
      <p>
        <span className={s.highlited}>Location: </span>
        {data.github.user.location}
      </p>

      <div>
        <h2>Repositories</h2>
        <ul className={s.flexbox}>
          {repoes.map((repo) => (
            <a href={repo.node.url}>
              <li className={s.box}>
                <p className={s.repo_name}>
                  {repo.node.name}
                </p>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const query = graphql`
  {
    github {
      user(login: "liuba-larousse") {
        avatarUrl
        bioHTML
        email
        login
        name
        bio
        location
        repositories(
          orderBy: { field: CREATED_AT, direction: DESC }
          first: 15
        ) {
          edges {
            node {
              name
              url
              id
            }
          }
        }
      }
    }
  }
`;
