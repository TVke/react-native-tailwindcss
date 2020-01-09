---
layout: post
title: "Directional layout"
description: "Utilities for styling text for directional layout."
classes:
  name: dir
  key: direction
  values: 
      [
      ['Inherit', 'inherit'],
      ['Ltr', 'ltr'],
      ['Rtl', 'rtl'],
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

## Usage

When the direction is changed some element should change direction. 
`react-native` offers for some styles directional correct options.

 - [borderRadius](https://tvke.github.io/react-native-tailwindcss/borders/border-radius#directional)
 - [borderWidth](https://tvke.github.io/react-native-tailwindcss/borders/border-width#directional)
 - [inset](https://tvke.github.io/react-native-tailwindcss/layout/top-right-bottom-left#directional)
 - [start - end](https://tvke.github.io/react-native-tailwindcss/layout/top-right-bottom-left#directional)
 - [textAlign](https://tvke.github.io/react-native-tailwindcss/typography/text-align#directional)
 - [margin](https://tvke.github.io/react-native-tailwindcss/spacing/margin#directional)
 - [padding](https://tvke.github.io/react-native-tailwindcss/spacing/padding#directional)
