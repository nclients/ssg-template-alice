# Astro Starter Kit

## 🚀 Getting Started
Create a new website with the template:
```sh
npm create astro@latest -- --template nclients/ssg-template-alice
```
**Head to the project folder, then** add a theme via git's submodule:
```sh
rm -rf theme/ && git submodule add https://github.com/nclients/ssg-theme-astro.git theme
```
Then change module's url to `git@github.com:nclients/ssg-theme-astro.git` (in `.gitmodules` file). This is for deploying to CloudFlare Pages.

Finally, install all dependencies with `npm i` and commit the initial setup to git.

**Note**: make sure you have installed [Node.js](https://nodejs.org/en) (the latest LTS version), [GitHub Desktop](https://github.com/apps/desktop) and [VS Code](https://code.visualstudio.com).


## 🗂️ Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   |── index.mdx
│   │   |── another-page.astro
│   ├── content/
│   │   └── content-collection/
│   │       |── some.md
│   │       |── some.mdx
│   └── some-other-files-or-folders/
├── theme/
└── package.json
```

Astro looks for `.astro`, `.md`, `.mdx` and `.html` files in the `website/pages` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

`theme/` directory links to the a git sub-module where we put our theme. **DO NOT touch it if you are not the theme developer.** Please keep it up-to-date by regularly pulling updates from upstream repository.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

