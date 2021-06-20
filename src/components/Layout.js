/** @format */

import React from 'react';
import { Link } from 'gatsby';
import './layout.scss';

export default function Layout({ children }) {
  return (
    <>
      <div className='layout_container'>
        <nav className='layout_nav'>
          <Link className='layout_link' to='/'>
            Home
          </Link>
          <Link className='layout_link' to='/profile/'>
            Profile
          </Link>
          <Link className='layout_link' to='/commits/'>
            Commits
          </Link>
          <Link className='layout_link' to='/additional/'>
            Gatsby repositories
          </Link>
          <Link className='layout_link' to='/search/'>
            Search
          </Link>
        </nav>
        <main className='layout_main'>{children}</main>
      </div>
    </>
  );
}
