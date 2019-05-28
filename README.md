# material-ui-hooks-issue

## Build instructions

```
npx lerna link && npx lerna bootstrap
```

In packages/library
```
npm start
```

Open the console and observe the the theme is printing fine. 

```
npm run build
```

(Build the library for app to use). 

In packages/app


Comment out the `@material-ui...` line in `config-overrides.js`
```
npm start
```

Observe that the theme isn't coming through. 

Uncomment it, npm start again, it is now coming through. 

**Is there a way to share context, without doing this alias configuration?**
