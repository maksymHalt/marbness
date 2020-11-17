# Marbness Digital Agency

[**Live preview**](http://marbness.tecnologica.agency)

(based on Next.js)

## Start commands

**For development:**

- `yarn dev`

**For production:**

- once `yarn build` (repeat after changes)
- `yarn deploy` to deploy static files to server

## Project structure

All code is stored in folder `src`. Inside we have the following structure:

- **components** - react elements that are atomic and are used to construct containers or pages
- **containers** - react elements that contains components and are huge part of layout
- **pages** - pages of site, name of file is used as url path (e.g. to load `about-us.jsx` you should use url path `/about-us`)
- **styles** - some global styles and style variables
- **store** - redux store
- **models** - redux/rematch models ([more info here](https://github.com/rematch/rematch#step-2-models))
- **utils** - util functions like validators, checkers etc.
- **fonts** - fonts that are used to generate lighter formats (woff, woff2) in public folder.
- **img** - images that are used to generate lighter format (wepb) in public folder.

There stored static files, like favicon, in folder `public`

## Styles

It is recommended to use styled component way to style react elements

```javascript
import styled from '@emotion/styled';

const StyledComponent = styled.div`
  text-align: center;
  font-size: 20vh;
  line-height: 100vh;
`;

const Home = () => {
  return <StyledComponent>Hello, Marbness!</StyledComponent>;
};
```

## Code Style

It is used ESLint Code Style here. So please install `eslint` and `prettier` plugins to make code style errors visible and some of them will be fixed on save (probably for you need to set setting `formatOnSave` to `true` in your editor)
