# fredericosantos/jupyterlab-fsx-monokai-theme

Jupyterlab theme extension inspired by Monokai and Tailwind

Alpha stages of what I hope will become a great dark theme! I'm new to coding, new to GitHub (to actually use it) and I apologise if you're installing this and it breaks everything. Be very welcome to give me a helping hand and/or guide me. Thanks :)

## Prerequisites

* JupyterLab

## Installation

```bash
jupyter labextension install @fredericosantos/jupyterlab-fsx-monokai-theme
```

## Video

[![](http://img.youtube.com/vi/n3GrOvEzXyI/0.jpg)](http://www.youtube.com/watch?v=n3GrOvEzXyI "Video")


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
