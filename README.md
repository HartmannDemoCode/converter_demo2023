# repo auto created

## Convert to typescript

1. Add TypeScript
  - `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
2. Add tsconfig.json
  - `npx tsc --init`
  - update the tsconfig.json file by comment out the "strict": true line. We will add this later.
3. Start simple
  - change file extension to `.ts` and `.tsx`
  - add type annotations
    - create a type: `type TemperatureUpdaterProps = { temperature?: number, setTemperature?: React.ChangeEventHandler<HTMLInputElement> //React.Dispatch<React.SetStateAction<number>> }`
    - use this type in both Fahrenheit and Celsius components.
    - the update method takes an event argument: `event: React.ChangeEvent<HTMLInputElement> `
    - evt.target.value is a string, so we need to convert it to a number: `const temperature = Number(evt.target.value)`.
4. Convert all files
- Do this one at a time, and make sure the app still works after each file.
5. Increase strictness in the tsconfig.json file.
- Iteratively with 3 steps for each added strictness rule. The steps are:
  1. enable rule
  2. start project locally
  3. fix errors
- The strict rules are:
```json 
    "noImplicitAny": true
    "strictNullChecks": true
    "noImplicitThis": true
    "alwaysStrict": true
```
- The "noImplicitAny" rule is the most important one. It will force you to add types to all variables and functions. This is a good thing, because it will make your code more robust.
- In case it is hard to find the right type you can temporarily use: `export type FixMeLater = any
` in order not to get stuck, but you should fix it later.
- When it all works, add the strict rule to the tsconfig.json file (the one we commented out earlier in step 2).
6. Clean it up
- Now fix the FixMeLater types.
- Fix if you used the `@ts-ignore` directive to get around a type error.
7. Celebrate


