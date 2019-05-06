# react-native-tailwindcss ![npm](https://img.shields.io/npm/dt/react-native-tailwindcss.svg)
## A react native styling system, based on [TailwindCSS](https://tailwindcss.com/docs/what-is-tailwind/)
Easily apply styles to react native components in a <a href='https://tailwindcss.com/docs/what-is-tailwind/'>tailwindCSS</a>-like fashion.
The utility classes are transformed to object valid names and are all children from an object `t` or `tw`.

```jsx harmony
import {t} from 'react-native-tailwindcss';

<View style={[t.absolute, t.inset0, t.p4, t.bgBlue500]} />
```

Use the `tailwind.config.js` file as you know and love to customize or just use the default tailwind styles. 

In react native sometimes you only need a color value, we've got you covered.
The `color` object contains all your defined colors.

```jsx harmony
import {color} from 'react-native-tailwindcss';

<StatusBar backgroundColor={color.blue500} />
```

React native is no css styling so there are some "special cases".
Some elements are not necessary and are ignored.
Things like breakpoints, plugins, corePlugin disabling, prefixes, separators, variation and the important toggle.

You should also take a look at some special cases:
 - [separator handling (`-m-5` and `w-1/5`)](#general-conversion)
 - [shadows](#shadows)
 - [directional layout](#directional-layout)

## Usage
Install this package

```
npm install react-native-tailwindcss
```

Initialize a new tailwindCSS config file

```
npx tailwind init
```

or the complete tailwindCSS config file

```
npx tailwind init --full
```

or just use an existing one.

## General conversions

Every 'class' becomes CamelCase instead of tailwindCSS default `-` separated. 
```
border-t-2 => tw.borderT2
```

A `-` in the beginning of a 'class' becomes a `_`. 
```
-mt-2 => tw._mt2
```

A `/` also becomes a `_` to separate the numbers. 
```
w-1/3 => tw.w1_3
```

These conversions happen also when adding new items to the config file. 
If there is anything not working or working different then expected please [create an issue]('https://github.com/TVke/react-native-tailwindcss/issues').

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

When you need directional layout React Native offers variations to make life easier.
Instead of using 'left' or 'right', 'start' and 'end' can be used.

`react-native-tailwindcss` offers classes to embrace this way of directional layout.
every 'class' with `L` or `R`, has also an `S` and `E` 'class' for start and end.

## Testing

```
npm run test
```
