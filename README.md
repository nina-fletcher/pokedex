# Pokédex

The Pokèdex app allows you to view, sort and favourite Pokémon from the original 151 Pokémon.*

This is a [Next.js](https://nextjs.org/) project. To learn more about Next.js check out the [Next.js Documentation](https://nextjs.org/docs).

*I chose to only fetch the first 151 so that the app wasn't fetching 100s of items, however in a production app we would either need to load the whole dataset or have a API which allowed pagination.

## Getting started

1. Install node v17.1.0
2. Install yarn
3. Install package dependencies with `yarn install`

## Local development

First, run the development server:
```bash
$ yarn dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Linting

To run the linter:

```bash
$ yarn lint
```

And to automatically fix problems:
```bash
$ yarn lint:fix
```
