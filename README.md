# fredericosantos/jupyterlab-fsx-monokai-theme

Jupyterlab theme extension inspired by Monokai and Tailwind

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @fredericosantos/jupyterlab-fsx-monokai-theme
```

## Video

[![](https://raw.githubusercontent.com/fredericosantos/jupyterlab-fsx-monokai-theme/main/fsx_monokai_theme.gif "Video")


## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

Note to self: 
*Updating packages on npm*
Commit all changes to github, open terminal and open theme directory. Then run `npm login` and enter credentials. Run `npm publish` and check https://npmjs.com/package/@fredericosantos/jupyterlab-fsx-monokai-theme to see if everything went well. Check if there's an Update option on JupyterLab
