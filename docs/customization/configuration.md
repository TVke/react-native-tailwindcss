---
layout: post
title: "Configuration"
description: "A guide to configuring and customizing your Tailwind installation."
titleBorder: true
---

Because Tailwind is a framework for building bespoke user interfaces, it has been designed from the ground up with customization in mind.

By default, Tailwind will look for an `tailwind.config.js` file at the root of your project where you can define any customizations.

```js
// Example `tailwind.config.js` file

module.exports = {
  theme: {
    fontFamily: {
      display: 'Gilroy',
      body: 'Graphik',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      margin: {
        '96': '24rem',
        '128': '32rem',
      },
    }
  },
}
```

Every section of the config file is optional, so you only have to specify what you'd like to change. Any missing sections will fall back to Tailwind's [default configuration](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js).

## Creating your configuration file

Generate a Tailwind config file for your project using the Tailwind CLI utility included when you install the `tailwindcss` npm package:

```bash
npx tailwind init
```

This will create a minimal `tailwind.config.js` file at the root of your project:

```js
// tailwind.config.js
module.exports = {
  theme: {},
  variants: {},
  plugins: [],
}
```

> After the `tailwind.config.js` file has been newly created using `npx tailwind init` make sure to rebuild your app.

### Scaffolding the entire default configuration

For most users we encourage you to keep your config file as minimal as possible, and only specify the things you want to customize.

If you'd rather scaffold a complete configuration file that includes all of Tailwind's default configuration, use the `--full` option:

```bash
npx tailwind init --full
```

You'll get a file that matches the [default configuration file](https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js) Tailwind uses internally.

## Theme

The `theme` section is where you define your color palette, font stacks, type scale, border sizes, breakpoints — anything related to the visual design of your site.

```js
// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      display: 'Gilroy',
      body: 'Graphik',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      }
    }
  }
}
```

Learn more about the default theme and how to customize it in the [theme configuration guide](https://tvke.github.io/react-native-tailwindcss/docs/theme).
