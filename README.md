# Astro Starter Kit

## 🚀 Getting Started
Create a directory `cd ~ && mkdir -p Websites`.

Head to the directory `cd Websites`.

Create a new website with the template:
```sh
npm create astro@latest -- --template nclients/ssg-template-alice
```
Then follow settings bellow:
```text
 astro   Launch sequence initiated.

   dir   Where should we create your new project?
         ./my-lovely-restaurant
      ◼  tmpl Using nclients/ssg-template-alice as project template

    ts   Do you plan to write TypeScript?
         Yes

   use   How strict should TypeScript be?
         Strict

  deps   Install dependencies?
         No
      ◼  No problem! Remember to install dependencies after setup.

   git   Initialize a new git repository?
         Yes

      ✔  Project initialized!
         ■ Template copied
         ■ TypeScript customized
         ■ Git initialized

  next   Liftoff confirmed. Explore your project!

         Enter your project directory using cd ./my0-test 
         Run npm run dev to start the dev server. CTRL+C to stop.
         Add frameworks like react or tailwind using astro add.

         Stuck? Join us at https://astro.build/chat

╭─────╮  Houston:
│ ◠ ◡ ◠  Good luck out there, astronaut! 🚀
╰─────╯
```
Now you just created a folder `my-lovely-restaurant`, **Head to the project folder `cd my-lovely-restaurant`, then** add a theme via git's submodule:
```sh
rm -rf theme/ && git submodule add https://github.com/ntddigital/ssg-theme-astro.git theme
```

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

