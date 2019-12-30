---
layout: post
title: "Special cases"
description: "Overview of all the fallback situations in react-native-tailwindcss and how to customize them."
---

Because `react-native` uses Yoga as styling engine and the native platforms differs from some CSS standards there are some special cases.

`react-native` uses flex-box styling as base, the rules are: 
 - every element is `display: flex`
 - the whole layout is `flex-direction: column`
  
 This makes it a bit different from styling a site but it is a bit of an improvement as it has no backwards compatibility issues.
 
The golden advise: 
 > When there looks something strange use <code class="language-plaintext"><span class="rnt-object">t</span>.flex1</code>.

## Fallback customization

### Shadows

- Android does not use the shadow props to cast shadows, just an `elevation` value.
    - The `elevation` value in `react-native-tailwindcss` is by default the `shadowRadius / 2`
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

direction

## React Native differences

### Added properties

In `react-native` there are some extra style props then Tailwind CSS implements.
`react-native-tailwindcss` does support these with the available options:

Style property | Options | `react-native-tailwindcss` | docs link
--- | --- | --- | ---
backfaceVisibility | 'visible', 'hidden' | <code class="language-plaintext"><span class='rnt-object'>t</span>.backfaceHidden</code> | [backface-visibility](https://tvke.github.io/react-native-tailwindcss/backgrounds/backface-visibility)
resizeMode | 'contain', 'cover', 'stretch', 'center', 'repeat' | <code class="language-plaintext"><span class='rnt-object'>t</span>.resizeCover</code> | [object-fit](https://tvke.github.io/react-native-tailwindcss/layout/object-fit)
tintColor | (colors) | <code class="language-plaintext"><span class='rnt-object'>t</span>.tintBlack</code> | [tint-color](https://tvke.github.io/react-native-tailwindcss/layout/tint-color)
textShadow | (boxShadow) | <code class="language-plaintext"><span class='rnt-object'>t</span>.textShadowMd</code> | [text-shadow](https://tvke.github.io/react-native-tailwindcss/effects/text-shadow)
includeFontPadding | <code class="language-plaintext">true</code>, <code class="language-plaintext">false</code> | <code class="language-plaintext"><span class='rnt-object'>t</span>.fontPaddingFalse</code> | [font-padding](https://tvke.github.io/react-native-tailwindcss/typography/font-padding)
direction | 'inherit', 'ltr', 'rtl' | <code class="language-plaintext"><span class='rnt-object'>t</span>.directionRtl</code> | [direction](https://tvke.github.io/react-native-tailwindcss/directional)

### Not supported properties

#### Layout

CSS property | Reason
--- | --- 
object-position | can be easily recreated
visibility | display: flex or none
float | not needed by <code class="language-plaintext"><span class="rnt-object">t</span>.flexRow</code>

#### Typography

CSS property | Reason
--- | --- 
font-smoothing | not supported
white-space | usable as [prop](https://facebook.github.io/react-native/docs/text#numberoflines) not styles 
word-break | usable as [prop](https://facebook.github.io/react-native/docs/text#numberoflines) not styles 

#### Backgrounds

CSS property | Reason
--- | --- 
background-attachment | not supported
background-position | not supported
background-repeat | use the [object-fit](https://tvke.github.io/react-native-tailwindcss/layout/object-fit) style
background-size | use the [object-fit](https://tvke.github.io/react-native-tailwindcss/layout/object-fit) style

#### Tables

CSS property | Reason
--- | --- 
border-collapse | no tables
table-layout | no tables

#### Interactivity

CSS property | Reason
--- | --- 
pointer-events | usable as [prop](https://facebook.github.io/react-native/docs/view#pointerevents) not styles
order | not supported
user-select | not supported
resize | not supported
cursor | not supported
appearance | not supported

#### SVG

CSS property | Reason
--- | --- 
fill | svg styling is not supported ([react-native-svg](https://github.com/react-native-community/react-native-svg))
stroke | svg styling is not supported ([react-native-svg](https://github.com/react-native-community/react-native-svg))

#### Accessibility

CSS property | Reason
--- | --- 
screen-readers | not used in styles [check the docs](https://facebook.github.io/react-native/docs/accessibility)


If there is anything not working or working different then expected please [create an issue]('https://github.com/TVke/react-native-tailwindcss/issues').
