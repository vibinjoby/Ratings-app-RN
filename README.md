## Creating new components

For convenience reasons this project uses template generator to simplify creation of new
components. For example, to generate a new `Button` component run:

`npm run component Button`

This will create a new `Button` directory inside `src/components` with following files:

```
src/components/Button/index.ts
src/components/Button/stories.ts
src/components/Button/styles.ts
```

It will also update `src/stories/index.js` with a newly created comoonent storybook entry.
