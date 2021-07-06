# portfolio

Hyejung Lim's Portfolio as of 2021

---

## Table of Contents

1. <b>[Run the server](https://github.com/aspynlim/portfolio#1-run-the-server)</b>
2. <b>[Settings](https://github.com/aspynlim/portfolio#2-settings)</b>
3. <b>[Tips](https://github.com/aspynlim/portfolio#3-tips)</b>

---

# 1. Run the server

| Mode            | Command                                    |
| --------------- | ------------------------------------------ |
| **Development** | `npm start`                                |
| **Production**  | `npm run build` > `cd build` > `npx serve` |
| **Deployment**  | `npm run deploy`                           |

| Plugin     | Command        |
| ---------- | -------------- |
| **ESLint** | `npm run lint` |

# 2. Settings

## 2-1. React + TypeScript + Webpack

- Codevolution's "React TypeScript Webpack Setup" [Tutorial Series](https://www.youtube.com/playlist?list=PLC3y8-rFHvwiWPS2RO3BKotLRfgg_8WEo)

  - Part 1 : Basic Webpack settings
  - Part 2 : Uploading image files
  - Part 3 : Configuring Webpack for multiple environments (development & production)
  - Part 4 : 'React Refresh Webpack' plugin
  - Part 5 : 'ESLint' plugin
  - Part 6 : 'Prettier' plugin
  - Part 7 : 'Husky' & 'lint-staged' plugins
  - Part 8 : Others...

- CSS Modules with TypeScript
  - [Solution](https://stackoverflow.com/a/68011107/10021131)

---

# 3. Tips

## 3-1. Git

- [Changing a commit message](https://docs.github.com/en/github/committing-changes-to-your-project/creating-and-editing-commits/changing-a-commit-message)

## 3-2 GitHub

- [Deploying a React app to GitHub Pages](https://www.pluralsight.com/guides/deploying-github-pages-with-create-react-app)

## 3-3 NPM

- Fixing NPM errors

  - What worked for me
    - `sudo rm -rf /usr/local/lib/node_modules/` & Installed Node by running the package that I downloaded from the offcial [website](https://nodejs.org/en/download/)
  - Installing node & npm by using Homebrew didn't work
    - `brew update` => `brew uninstall node` & `brew install node` [출처](https://stackoverflow.com/a/46048072/10021131)
    - `sudo chmod -R 777 /usr/local/lib` => `brew postinstall node` [출처](https://stackoverflow.com/a/46048072/10021131)

- `NPM Install`

  - Install the dependencies in the local `node_modules` folder

- [How to use font awesome icons with react](https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react)

## 3-4. CSS

- [Hover Effects](https://dev.to/mike37/15-css-hover-effects-example-3pbh)

## 3-5 Etc

- [FREE Image Hosting](https://imgbb.com/)

2021 © Aspyn Lim
