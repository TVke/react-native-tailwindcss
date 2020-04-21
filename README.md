# react-native-tailwindcss [![npm](https://img.shields.io/npm/v/react-native-tailwindcss.svg)](https://github.com/TVke/react-native-tailwindcss/releases) [![npm](https://img.shields.io/npm/dt/react-native-tailwindcss.svg)](https://www.npmjs.com/package/react-native-tailwindcss) [![docs](https://img.shields.io/badge/read-docs-38b2ac)](https://tvke.github.io/react-native-tailwindcss)
## A react-native styling system, based on [TailwindCSS](https://tailwindcss.com/docs/what-is-tailwind/)
Easily apply styles to react native components in a <a href='https://tailwindcss.com/docs/what-is-tailwind/'>tailwindCSS</a>-like fashion.
The utility classes are transformed to valid object names and are all children of an object ( `t`, `tw`, `theme` or `tailwind`).

```jsx harmony
import { t } from 'react-native-tailwindcss';

<View style={[t.absolute, t.inset0, t.p4, t.bgBlue500]} />
```

Use the `tailwind.config.js` file you know and love, to customize your styles or just use default tailwind styles.

In react native, sometimes you only need a color value. We've got you covered.
The `color` object contains all your defined colors.

```jsx harmony
import { color } from 'react-native-tailwindcss';

<StatusBar backgroundColor={color.blue500} />
```

React native has no default css styling so there are some *special cases*.
Some elements like breakpoints, plugins, corePlugin disabling, prefixes, separators, variation and the important toggle are not necessary and are ignored.

You should also take a look at some special cases:
 - [separator handling (`-m-5` and `w-1/5`)](#general-conventions)
 - [shadows](#shadows)
 - [directional layout](#directional-layout)
 - [more details](https://tvke.github.io/react-native-tailwindcss/special-cases.html)

## Usage
Install this package

```
# Using npm
npm install react-native-tailwindcss

# Using Yarn
yarn add react-native-tailwindcss
```


Then initialize a new tailwindCSS config file

```
npx RNtailwindcss
```

or use an existing one.

## Usage with `styled-components`

`react-native-tailwindcss` plays nicely with the popular [`styled-components` library](https://styled-components.com/docs/basics#react-native).

Simply use the array syntax within the interpolated template literal:

```jsx harmony
import { Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import styled from 'styled-components/native';

const SView = styled(View)`
  ${[t.mB4, t.bgGray200, t.rounded, t.p3]}
`;

<SView>
  <Text>Some unstyled text in a styled view</Text>
</SView>
```

## General Conventions

Every 'class' uses the *camelCase* naming convention instead of tailwindCSS's *kebab-case*.
```
border-t-2 => t.borderT2
```

A `-` in the beginning of a 'class' becomes a `_`.
```
-mt-2 => t._mT2
```

A `/` also becomes a `_` to separate the numbers.
```
w-1/3 => t.w1_3
```

 - [more information in the docs](https://tvke.github.io/react-native-tailwindcss/translations.html)

## Special cases

### Shadows

 - Android does not use the shadow props to cast shadows, just an `elevation` value.
    - The `elevation` value is by default the `shadowRadius / 2`
    - It can be changed by adding the `elevation` value after the shadow separated by a `,`. <br>
        (eg.: `default: '0 1px 3px 0 rgba(0, 0, 0, .1), 5'`)

 - Text shadows use the same shadows as box shadows
 - Multiple shadows are not supported in React native. (the first shadow will be used)
 - `inner` and `outline` shadows are ignored

### Directional Layout

When you need directional layout, React Native offers some variations to make life easier.
Instead of using 'left' or 'right', 'start' and 'end' can be used.

`react-native-tailwindcss` offers classes to embrace this way of directional layout.
Every 'class' with `L` or `R`, also has a corresponding `S` and `E` 'class' for start and end.

## Testing

```
npm run test
```
