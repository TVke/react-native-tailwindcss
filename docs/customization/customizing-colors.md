---
layout: post
title: "Customizing Colors"
description: "Customizing the default color palette for your project."
titleBorder: true
---

The `theme.colors` section of your `tailwind.config.js` file allows you to override Tailwind's [default color palette](#default-color-palette).

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
    }
  }
}
```

By default these colors are automatically shared by the `textColor`, `borderColor`, and `backgroundColor` utilities, so the above configuration would generate classes like 
<code class="language-plaintext"><span class="rnt-object">t</span>.textIndigo</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.borderBlue</code>, 
and <code class="language-plaintext"><span class="rnt-object">t</span>.bgRed</code>.

### Nested object syntax

You can define your colors as a simple list of key-value pairs as we've done above, or using a nested object notation where the nested keys are added to the base color name as modifiers:

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      indigo: {
        lighter: '#b3bcf5',
        default: '#5c6ac4',
        dark: '#202e78',
      }
    }
  }
}
```

Like many other places in Tailwind, the `default` key is special and means "no modifier", so this configuration would generate classes like 
<code class="language-plaintext"><span class="rnt-object">t</span>.textIndigoLighter</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.textIndigo</code>, 
and <code class="language-plaintext"><span class="rnt-object">t</span>.textIndigoDark</code>.

Note that you need to use dot notation to access nested colors when using the `theme()` function — the colors are only converted to camelCase for the actual style names.


Don't use the dash or camel syntax to access nested color values with theme()

```css
.btn-blue {
  background-color: theme('colors.blue-500');
}
```

Use dot notation to access nested color values with theme()

```css
.btn-blue {
  background-color: theme('colors.blue.500');
}
```

## Overriding the default color palette

As described in the [theme documentation](https://tvke.github.io/react-native-tailwindcss/docs/theme#overriding-the-default-theme), if you'd like to override the default color palette, you can do so using the `theme.colors` section of your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
    }
  }
}
```

This will disable Tailwind's default color palette and generate classes like 
<code class="language-plaintext"><span class="rnt-object">t</span>.bgIndigo</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.textBlue</code>, 
and <code class="language-plaintext"><span class="rnt-object">t</span>.borderRed</code> instead.

## Extending the default palette

As described in the [theme documentation](https://tvke.github.io/react-native-tailwindcss/docs/theme#extending-the-default-theme), if you'd like to extend the default color palette, you can do so using the `theme.extend.colors` section of your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      }
    }
  }
}
```

This will generate classes like 
<code class="language-plaintext"><span class="rnt-object">t</span>.bgRegalBlue</code> 
in addition to all of Tailwind's default colors.

## Overriding a default color

If you'd like to override one of Tailwind's default colors but preserve the rest, simply provide the new values in the `theme.extend.colors` section of your `tailwind.config.js` file.

For example, here we've replaced the default cool grays with a neutral gray palette:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        }
      }
    }
  }
}
```

### Overriding a single shade

Since values in the `theme.extend` section of your config file are only merged shallowly, overriding a single shade is slightly more complicated.

The easiest option is to import the default theme and [spread](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) in the color you want to customize along with the new shade value:

```js
// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          '900': '#1e3656',
        }
      }
    }
  }
}
```

## Naming your colors

Tailwind uses literal color names _(like red, green, etc.)_ and a numeric scale _(where 100 is light and 900 is dark)_ by default. This ends up being fairly practical for most projects, but there are good reasons to use other naming conventions as well.

For example, if you're working on a project that needs to support multiple themes, it might make sense to use more abstract names like `primary` and `secondary`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      // ...
    }
  }
}
```

You can configure those colors explicitly like we have above, or you could even pull in Tailwind's default colors and alias the ones you need:

```js
// tailwind.config.js
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.gray,
    }
  }
}
```

## Generating custom color palettes

A common question we get is "how do I generate the 100–900 shades of my own custom colors?".

There is a tool for that: [Color Shades Generator for Tailwind CSS](https://javisperez.github.io/tailwindcolorshades)

## Default color palette

Tailwind includes a generous palette of great-looking, well-balanced colors that are perfect for prototyping or for kicking off a brand new project.

<div class="flex flex-wrap -mx-2 mt-0">

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">

<h3 id="black-white">Black & White</h3>

<div class="-mx-2 flex flex-wrap">
  <div class="w-1/2 md:w-1/3 px-2">
    <div class="flex items-center mt-5">
      <div class="h-12 w-12 rounded-lg shadow-inner bg-black"></div>
      <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
        <div class="font-semibold">Black</div>
        <div class="mt-1 font-normal opacity-75">#000000</div>
      </div>
    </div>
  </div>
  <div class="w-1/2 md:w-1/3 px-2">
    <div class="flex items-center mt-5">
      <div class="h-12 w-12 rounded-lg shadow-inner bg-white"></div>
      <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
        <div class="font-semibold">White</div>
        <div class="mt-1 font-normal opacity-75">#FFFFFF</div>
      </div>
    </div>
  </div>
</div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">

<h3 id="Gray">Gray</h3>

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5">
<div class="h-12 w-12 rounded-lg shadow-inner bg-gray-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1">
<div class="font-semibold">100</div> <div class="mt-1 font-normal opacity-75">#F7FAFC</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-gray-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#EDF2F7</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-gray-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#E2E8F0</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-gray-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#CBD5E0</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-gray-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#A0AEC0</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-gray-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#718096</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-gray-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#4A5568</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-gray-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#2D3748</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-gray-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#1A202C</div></div></div></div></div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">
<h3 id="Red">Red</h3> 

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-red-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">100</div> 
<div class="mt-1 font-normal opacity-75">#FFF5F5</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-red-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#FED7D7</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-red-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#FEB2B2</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-red-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#FC8181</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-red-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#F56565</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-red-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#E53E3E</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-red-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#C53030</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-red-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#9B2C2C</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-red-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#742A2A</div></div></div></div></div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">
<h3 id="Orange">Orange</h3> 

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-orange-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">100</div> 
<div class="mt-1 font-normal opacity-75">#FFFAF0</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-orange-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#FEEBC8</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-orange-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#FBD38D</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-orange-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#F6AD55</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-orange-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#ED8936</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-orange-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#DD6B20</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-orange-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#C05621</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-orange-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#9C4221</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-orange-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#7B341E</div></div></div></div></div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">
<h3 id="Yellow">Yellow</h3> 

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-yellow-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">100</div> 
<div class="mt-1 font-normal opacity-75">#FFFFF0</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-yellow-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#FEFCBF</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-yellow-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#FAF089</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-yellow-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#F6E05E</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-yellow-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#ECC94B</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-yellow-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#D69E2E</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-yellow-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#B7791F</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-yellow-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#975A16</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-yellow-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#744210</div></div></div></div></div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">
<h3 id="Green">Green</h3> 

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-green-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">100</div> 
<div class="mt-1 font-normal opacity-75">#F0FFF4</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-green-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#C6F6D5</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-green-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#9AE6B4</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-green-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#68D391</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-green-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#48BB78</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-green-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#38A169</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-green-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#2F855A</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-green-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#276749</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-green-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#22543D</div></div></div></div></div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">
<h3 id="Teal">Teal</h3> 

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-teal-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">100</div> 
<div class="mt-1 font-normal opacity-75">#E6FFFA</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-teal-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#B2F5EA</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-teal-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#81E6D9</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-teal-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#4FD1C5</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-teal-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#38B2AC</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-teal-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#319795</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-teal-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#2C7A7B</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-teal-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#285E61</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-teal-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#234E52</div></div></div></div></div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">
<h3 id="Blue">Blue</h3> 

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-blue-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">100</div> 
<div class="mt-1 font-normal opacity-75">#EBF8FF</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-blue-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#BEE3F8</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-blue-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#90CDF4</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-blue-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#63B3ED</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-blue-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#4299E1</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-blue-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#3182CE</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-blue-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#2B6CB0</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-blue-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#2C5282</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-blue-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#2A4365</div></div></div></div></div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">
<h3 id="Indigo">Indigo</h3> 

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-indigo-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">100</div> 
<div class="mt-1 font-normal opacity-75">#EBF4FF</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-indigo-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#C3DAFE</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-indigo-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#A3BFFA</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-indigo-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#7F9CF5</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-indigo-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#667EEA</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-indigo-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#5A67D8</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-indigo-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#4C51BF</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-indigo-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#434190</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-indigo-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#3C366B</div></div></div></div></div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">
<h3 id="Purple">Purple</h3> 

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-purple-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">100</div> 
<div class="mt-1 font-normal opacity-75">#FAF5FF</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-purple-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#E9D8FD</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-purple-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#D6BCFA</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-purple-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#B794F4</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-purple-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#9F7AEA</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-purple-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#805AD5</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-purple-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#6B46C1</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-purple-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#553C9A</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-purple-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#44337A</div></div></div></div></div>
</div>

<div class="w-1/2 px-2 md:w-full relative mt-4 mb-8">
<h3 id="Pink">Pink</h3> 

<div class="md:-mx-2 md:flex md:flex-wrap"><div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-pink-100"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">100</div> 
<div class="mt-1 font-normal opacity-75">#FFF5F7</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-pink-200"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">200</div> 
<div class="mt-1 font-normal opacity-75">#FED7E2</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-pink-300"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">300</div> 
<div class="mt-1 font-normal opacity-75">#FBB6CE</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-pink-400"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">400</div> 
<div class="mt-1 font-normal opacity-75">#F687B3</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-pink-500"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">500</div> 
<div class="mt-1 font-normal opacity-75">#ED64A6</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-pink-600"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">600</div> 
<div class="mt-1 font-normal opacity-75">#D53F8C</div></div></div></div> 
<div class="md:w-1/3 md:px-2"><div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-pink-700"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">700</div> 
<div class="mt-1 font-normal opacity-75">#B83280</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-pink-800"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">800</div> 
<div class="mt-1 font-normal opacity-75">#97266D</div></div></div> 
<div class="flex items-center mt-5"><div class="h-12 w-12 rounded-lg shadow-inner bg-pink-900"></div> 
<div class="ml-2 text-gray-800 text-xs leading-none pl-1"><div class="font-semibold">900</div> 
<div class="mt-1 font-normal opacity-75">#702459</div></div></div></div></div>

</div>
</div>
