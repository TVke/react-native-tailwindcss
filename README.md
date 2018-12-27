# tailwindcss-react-native
## A react native translation of TailwindCSS.

Style your react native components with same structure as you know from TailwindCSS.
```
style={[
    tw.m4,
    tw.pb2, 
    tw.mt0, 
    tw._mr3, 
    tw.wFull, 
    tw.maxWmd, 
    tw.borderT2, 
    tw.bgRedLight, 
    ]}
```

## Usage
Install this package
```
npm install react-native-tailwindcss
```

Install the default tailwind config file
```
./node_modules/.bin/tailwind init
```

### Translations

every 'class' gets `tw.` or `t.` in front of it. 
```
rounded => tw.rounded
```

every 'class' becomes CamelCase instead of the `-`'s. 
```
border-t-2 => tw.borderT2
```

a `-` in the frontbecomes a `_`. 
```
-mt-2 => tw._mt2
```

a `/` becomes a `_` as well. 
```
w-1/3 => tw.w1_3
```

### Special cases
#### Colors
If you only need the color value, just use the `color` object.

#### Text size
The default font-size in React Native is `14px` instead of `16px` on the web.
The `em` and `rem` values are calculated on a `16px` font-size to have expected values.

My suggestion is to chagnge the names when it get's confusing. This is what I made of it.

```
  textSizes: {
    'xs': '.625rem',    // 10px
    'sm': '.75rem',     // 12px
    'base': '.875rem',  // 14px
    'md': '1rem',       // 16px
    'lg': '1.125rem',   // 18px
    'xl': '1.25rem',    // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
  },
```

In React Native `zIndex` can only have a number, so `auto` will become `0`.
In React Native multiple shadows are not supported. when you use `shadow` it wil only apply the first one.
I made versions of the shadows as close to the original tailwind: 

```
  shadows: {
    default: '0 2px 4px 0 rgba(0,0,0,0.1)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.2)',
    'lg': '0 7px 15px 0 rgba(0,0,0,0.4)',
    'none': 'none',
  },
```

On android shadows are not supported only the `elevation` property casts a shadow.
The `elevation` value get's calculated in this package by `shadowRadius / 2`.

You can specify a custom `elevation` value on each shadow by seperating it with a `,`.
eg.: `default: '0 2px 4px 0 rgba(0,0,0,0.1), 4',`
