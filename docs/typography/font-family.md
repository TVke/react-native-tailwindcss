---
layout: post
title: "Font Family"
description: "Utilities for controlling the font family of an element."
classes:
  name: font
  key: fontFamily
  values: 
      [
      ['Sans', "'-apple-system'"],
      ['Serif', "'Georgia'"],
      ['Mono', "'Menlo'"],
      ]
---

<div class="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
<div class="lg:max-h-sm overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
<table class="w-full text-left table-collapse mb-0">
    <thead>
    <tr>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Class</th>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Properties</th>
    </tr>
    </thead>
    <tbody class="align-baseline">
    {%- for value in page.classes.values -%}
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.key }}: {{ value[1] }}</td>
        </tr>
    {%- endfor -%}
    </tbody>
</table>
</div>
</div>



### Sans-serif

Use <code class="language-plaintext"><span class="rnt-object">t</span>.fontSans</code> to apply a web safe sans-serif font family:

<p class="font-sans text-lg text-gray-800 text-center bg-gray-200 p-2 rounded">
  I'm a sans-serif paragraph.
</p>

### Serif

Use <code class="language-plaintext"><span class="rnt-object">t</span>.fontSerif</code> to apply a web safe serif font family:

<p class="font-serif text-lg text-gray-800 text-center bg-gray-200 p-2 rounded">
  I'm a serif paragraph.
</p>

### Monospaced

Use <code class="language-plaintext"><span class="rnt-object">t</span>.fontMono</code> to apply a web safe monospaced font family:

<p class="font-mono text-lg text-gray-800 text-center bg-gray-200 p-2 rounded">
  I'm a monospaced paragraph.
</p>

## Custom fonts

When you want to add custom fonts to a `react-native` project you need to collect them in a folder inside your project directory.
(e.g.: `/App/Fonts/Custom-Font.ttf`)

Add this folder path to your `react-native.config.js` file.

```js
// react-native.config.js

module.exports = {
  assets: ['./App/Fonts'],
};
```

Link the assets in `react-native` with: 

```bash
react-native link
```

Now you can add the filename of the fonts in your `tailwind.config.js` file like this to use them with `react-native-tailwindcss`.

```js
// tailwind.config.js

module.exports = {
  theme: {
    fontFamily: {
      calibre: [
        'Calibre-Regular'
      ],
      calibreMedium: [
        'Calibre-Medium'
      ],
      calibreBold: [
        'Calibre-Bold'
      ],
    }
  }
}
```

When you add style to a `<Text>` tag, you can set the font-family like this. (e.g.: <code class="language-plaintext"><span class="rnt-object">t</span>.fontCalibre</code>)
