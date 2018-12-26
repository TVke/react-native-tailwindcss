# tailwindcss-react-native
## A react native translation of TailwindCSS.

Style your react native components with same structure as you know from TailwindCSS.
```
style={[
    tw.bgRedLight, 
    tw.borderT2, 
    tw.maxWmd, 
    tw.wFull, 
    tw._mr3, 
    tw.mt0, 
    tw.pb2, 
    tw.m4,
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

every 'class' gets `tw.` in front of it. 
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
#### Text size
The default font-size in React Native is `14px` instead of `16px` on the web.
The `em` and `rem` values are calculated on a `16px` font-size to have expected values.

In React Native `zIndex` can only have a number, so `auto` will become `0`.
In React Native multiple shadows are not supported. when you use `shadow.sm` it wil only apply the first one.
I made versions of the shadows as close to the original tailwind: 
```
 default: '0 2px 4px 0 rgba(0,0,0,0.1)',
    'md': '0 4px 8px 0 rgba(0,0,0,0.2)',
    'lg': '0 7px 15px 0 rgba(0,0,0,0.4)',
```
On android shadows are not supported only the `elevation` casts a shadow. The elevation value is calculated like this:
`shadowRadius / 2`
You can set the elevation property specificly behind each shadow.
```
default: '0 2px 4px 0 rgba(0,0,0,0.1), 4',
```
