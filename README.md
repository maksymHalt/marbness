# Marbness Digital Agency

(based on Next.js)

## Start commands

**For development:**

- `yarn dev`

**For server production:**

- once `yarn build` (repeat after changes)
- to start `yarn start`

**For static production:**

- once `yarn build-static`
- to start `serve ./src/out`
  - *Note:* you should install `serve` globally before, by command `yarn global add serve`

## Project structure

All code is stored in folder `src`. Inside we have the following structure:

- **components** - react elements that are atomic and are used to construct containers or pages
- **containers** - react elements that contains components and are huge part of layout
- **pages** - pages of site, name of file is used as url path (e.g. to load `about-us.jsx` you should use url path `/about-us`)
- **styles** - some global styles
- **store** - redux store
- **models** - redux/rematch models ([more info here](https://github.com/rematch/rematch#step-2-models))
- **utils** - util functions like validators, checkers etc.
- **fonts**
