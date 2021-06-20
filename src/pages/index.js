/** @format */

import * as React from 'react';
import * as s from '../styles/index.module.scss';

// markup
const IndexPage = () => {
  return (
    <div>
      <h1>Welcome 👋 </h1>
      <h2>Objective</h2>
      <p>
        The goal of this project is to create a web
        application that shows git commit history of this
        project.
      </p>

      <h2>Requirements</h2>
      <ul className={s.list}>
        <li> ✅ Must use the GitHub API</li>
        <li>
          ✅ The app should have at least 3 routes.
          <ul className={s.sublist}>
            <li> One route for the repo/commits</li>
            <li>
              One route should contain profile information
            </li>
            <li>
              Additional information that you find could be
              useful from the API
            </li>
          </ul>
        </li>
        <li>
          ✅ You MUST provide instructions in the README on
          how to install and run your project.
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
