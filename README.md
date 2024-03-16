## Creating a ReactJS project from scratch

```
npm create vite@latest
```

## Install dependencies pnpm

```
pnpm install
```

## Format files with Prettier

We create a **.prettierrc** file in the root of the project

## Styles with TailwindCSS

We need to install the next dependencies

```
pnpm add -D tailwindcss autoprefixer postcss
```

and finally we set up taiwindCSS with the next command line

```
npx tailwindcss init -p
```

We need to add the extensions that will be affected by TailwindCSS.
We achieve this adding the next line in our **tailwind.config.js** file

```ts
content: ["./src/**/*.{js,ts,jsx,tsx,html}"],
```

## Test Driven Development

We will need to install the next dependencies

```
pnpm add -D vitest @testing-library/react
```
