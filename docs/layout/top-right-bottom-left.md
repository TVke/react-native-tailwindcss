---
layout: post
title: "Top / Right / Bottom / Left"
description: "Utilities for controlling the placement of positioned elements."
classes:
  name: inset
  values: 
      [
      ['0', '0'],
      ['Auto',  "'auto'"],
      ]
  directions:
      [
      ['', {top, bottom, left, right}],
      ['Y', {top, bottom}],
      ['X', {left, right}],
      ]
  name2: top
  name3: right
  name4: bottom
  name5: left
  name6: start
  name7: end
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
    {%- for direction in page.classes.directions -%}
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name }}{{ direction[0] }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">
        {%- for directionItem in direction[1] -%}
            <p class="m-0">{{ directionItem }}: {{ value[1] }}, </p>
        {%- endfor -%}
        </td>
        </tr>
    {%- endfor -%}
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.name }}: {{ value[1] }}</td>
        </tr>
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name2 }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.name2 }}: {{ value[1] }}</td>
        </tr>
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name3 }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.name3 }}: {{ value[1] }}</td>
        </tr>
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name4 }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.name4 }}: {{ value[1] }}</td>
        </tr>
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name5 }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.name5 }}: {{ value[1] }}</td>
        </tr>
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name6 }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.name6 }}: {{ value[1] }}</td>
        </tr>
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name7 }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.name7 }}: {{ value[1] }}</td>
        </tr>
    {%- endfor -%}
    </tbody>
</table>
</div>
</div>

## Usage

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.{top|right|bottom|left|start|end|inset}0</code> utilities to anchor absolutely positioned elements against any of the edges of the nearest positioned parent.

Combined with Tailwind's padding and margin utilities, you'll probably find that these are all you need to precisely control absolutely positioned elements.


<div class="flex justify-around mb-8">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1">[<span class="rnt-object">t</span>.insetX0, <span class="rnt-object">t</span>.top0]</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute inset-x-0 top-0 h-8 bg-gray-700"></div>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1">[<span class="rnt-object">t</span>.insetY0, <span class="rnt-object">t</span>.right0]</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute inset-y-0 right-0 w-8 bg-gray-700"></div>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1">[<span class="rnt-object">t</span>.insetX0, <span class="rnt-object">t</span>.bottom0]</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute inset-x-0 bottom-0 h-8 bg-gray-700"></div>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1">[<span class="rnt-object">t</span>.insetY0, <span class="rnt-object">t</span>.left0]</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute inset-y-0 left-0 w-8 bg-gray-700"></div>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1">[<span class="rnt-object">t</span>.inset0]</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute inset-0 bg-gray-700"></div>
    </div>
  </div>
</div>
<div class="flex justify-around">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1">[<span class="rnt-object">t</span>.left0, <span class="rnt-object">t</span>.top0]</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute left-0 top-0 h-8 w-8 bg-gray-700"></div>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1">[<span class="rnt-object">t</span>.top0, <span class="rnt-object">t</span>.right0]</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute top-0 right-0 h-8 w-8 bg-gray-700"></div>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1">[<span class="rnt-object">t</span>.right0, <span class="rnt-object">t</span>.bottom0]</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute right-0 bottom-0 h-8 w-8 bg-gray-700"></div>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1">[<span class="rnt-object">t</span>.bottom0, <span class="rnt-object">t</span>.left0]</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute bottom-0 left-0 h-8 w-8 bg-gray-700"></div>
    </div>
  </div>
  <div class="relative h-24 w-24 opacity-0"></div>
</div>

## Start - End

These directional positioning style options are available in `react-native`. 

#### direction ltr

<div class="flex justify-around">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.start0</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute left-0 top-0 h-8 w-8 bg-gray-700"></div>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.end0</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute top-0 right-0 h-8 w-8 bg-gray-700"></div>
    </div>
  </div>
</div>

#### direction rtl

<div class="flex justify-around">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.start0</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute top-0 right-0 h-8 w-8 bg-gray-700"></div>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.end0</p>
    <div class="relative h-24 w-24 bg-gray-400">
      <div class="absolute left-0 top-0 h-8 w-8 bg-gray-700"></div>
    </div>
  </div>
</div>

<br>

[More info about directional layout](https://tvke.github.io/react-native-tailwindcss/directional)
