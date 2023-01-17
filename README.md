# repo auto created

## Convert to typescript

1. Add TypeScript
  - `npm install --save typescript @types/node @types/react @types/react-dom @types/jest`
2. Add tsconfig.json
  - `npx tsc --init`
3. Start simple
  - change file extension to `.ts` and `.tsx`
  - add type annotations
    - create a type: `type TemperatureUpdaterProps = { temperature?: number, setTemperature?: React.ChangeEventHandler<HTMLInputElement> //React.Dispatch<React.SetStateAction<number>> }`
    - use this type in both Fahrenheit and Celsius components.
    - the update method takes an event argument: `event: React.ChangeEvent<HTMLInputElement> `
    - evt.target.value is a string, so we need to convert it to a number: `const temperature = Number(evt.target.value)`.
4. Convert all files
5. Increase strictness
6. Clean it up
7. Celebrate

