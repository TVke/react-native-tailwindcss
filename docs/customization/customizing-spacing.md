---
layout: post
title: "Customizing Spacing"
description: "Customizing the default spacing scale for your project."
spacings: 
      [
      ['0', '0'],
      ['px', 'px'],
      ['1', '0.25rem'],
      ['2', '0.5rem'],
      ['3', '0.75rem'],
      ['4', '1rem'],
      ['5', '1.25rem'],
      ['6', '1.5rem'],
      ['8', '2rem'],
      ['10', '2.5rem'],
      ['12', '3rem'],
      ['16', '4rem'],
      ['20', '5rem'],
      ['24', '6rem'],
      ['32', '8rem'],
      ['40', '10rem'],
      ['48', '12rem'],
      ['56', '14rem'],
      ['64', '16rem'],
      ]
---

The `theme.spacing` section of your `tailwind.config.js` file allows you to override Tailwind's [default spacing/sizing scale](#default-spacing-scale).

```js
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }
  }
}
```

By default the spacing scale is shared by the [padding](https://tvke.github.io/react-native-tailwindcss/spacing/padding), [margin](https://tvke.github.io/react-native-tailwindcss/spacing/margin), [width](https://tvke.github.io/react-native-tailwindcss/sizing/width), and [height](https://tvke.github.io/react-native-tailwindcss/sizing/height) utilities so the above configuration would generate classes like 
<code class="language-plaintext"><span class="rnt-object">t</span>.p2</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.mT3</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.w5</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.h6</code>, etc.

## Overriding the default spacing scale

As described in the [theme documentation](https://tvke.github.io/react-native-tailwindcss/customization/theme#overriding-the-default-theme), if you'd like to override the default spacing scale, you can do so using the `theme.spacing` section of your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    }
  }
}
```

This will disable Tailwind's default spacing scale and generate classes like 
<code class="language-plaintext"><span class="rnt-object">t</span>.pSm</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.mMd</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.wLg</code>, 
and <code class="language-plaintext"><span class="rnt-object">t</span>.hXl</code> instead.

## Extending the default spacing scale

As described in the [theme documentation](https://tvke.github.io/react-native-tailwindcss/customization/theme#extending-the-default-theme), if you'd like to extend the default spacing scale, you can do so using the `theme.extend.spacing` section of your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      }
    }
  }
}
```

This will generate classes like 
<code class="language-plaintext"><span class="rnt-object">t</span>.p72</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.m84</code>, 
and <code class="language-plaintext"><span class="rnt-object">t</span>.h96</code> in addition to all of Tailwind's default spacing/sizing utilities.

---

## Default spacing scale

By default, Tailwind includes a generous and comprehensive numeric spacing scale. The values are proportional, so `16` is twice as much spacing as `8` for example. One spacing unit is equal to `0.25rem`, which translates to `4px` by default in common browsers.


<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Size</th>
      <th>Pixels</th>
      <th class="hidden sm:table-cell"></th>
    </tr>
  </thead>
  <tbody>
    {%- for spacing in page.spacings -%}
    <tr>
      <td>{{ spacing[0] }}</td>
      <td>{{ spacing[1] }}</td>
      <td>{{ spacing[0] * 4 . 'px' }}</td>
      <td class="hidden sm:table-cell">
        <div class="h-4 bg-gray-400 w-{{ spacing[0] }}"></div>
      </td>
    </tr>
    {%- endfor -%}
  </tbody>
</table>
