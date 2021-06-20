<!-- @format -->

Here are some things I learned while building this website:

<br>

🌴 Topic

🥥 Tip to remember

🌿 Better code practice

📖 Reading resourses

<br>

## Gatsby

- 🥥 used gatsby-plugin-layout for setting consisten layouts across routes

- 🌴 APOLLO
  - 🥥`useLazyQuery() ` function to query on click
  - 🥥`qql` to write the query
  - 🥥 had to run `npm i @apollo/react-hooks`
  - 📖 [More about LazyQuery](https://www.apollographql.com/docs/react/api/react/hooks/#uselazyquery)

Gatsby apollo client

## Sass

- 🥥 change `import s from "./header.module.scss"` to `import * as s from "./header.module.scss` due to recent changes
- 🥥 store color varibles in a `global.scss` file for easy reuse

## Git

- 🥥 🌿 store acess token in .env file and add .env to .gitignore otherwise github removes token
