---
layout: post
title: "Margin"
description: "Utilities for controlling an element's margin."
classes:
  name: m
  key: margin
  values: 
      [
      ['Auto', 'auto'],
      ['0', '0'],
      ['Px', '1'],
      ['1', '4'],
      ['2', '8'],
      ['3', '12'],
      ['4', '16'],
      ['5', '20'],
      ['6', '24'],
      ['8', '32'],
      ['10', '40'],
      ['12', '48'],
      ['16', '64'],
      ['20', '80'],
      ['24', '96'],
      ['32', '128'],
      ['40', '160'],
      ['48', '192'],
      ['56', '224'],
      ['64', '256'],
      ]
  directions:
        [
        ['', {margin}],
        ['X', {marginHorizontal}],
        ['Y', {marginVertical}],
        ['T', {marginTop}],
        ['R', {marginRight}],
        ['B', {marginBottom}],
        ['L', {marginLeft}],
        ['S', {marginStart}],
        ['E', {marginEnd}],
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
    {%- for direction in page.classes.directions -%}
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name }}{{ direction[0] }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">
        {%- for directionItem in direction[1] -%}
            <p class="m-0">{{ directionItem }}: {{ value[1] }} </p>
        {%- endfor -%}
        </td>
        </tr>
    {%- endfor -%}
    {%- for direction in page.classes.directions -%}
        {%- if value[1] != 'auto' -%}
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>._{{ page.classes.name }}{{ direction[0] }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">
        {%- for directionItem in direction[1] -%}
            <p class="m-0">{{ directionItem }}: -{{ value[1] }} </p>
        {%- endfor -%}
        </td>
        </tr>
        {%- endif -%}
    {%- endfor -%}
    {%- endfor -%}
    </tbody>
</table>
</div>
</div>

## Add margin to a single side

Control the margin on one side of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.m{T|R|B|L|S|E}{Size}</code> utilities.

For example, 
<code class="language-plaintext"><span class="rnt-object">t</span>.mT6</code> would add `24` of margin to the top of an element, 
<code class="language-plaintext"><span class="rnt-object">t</span>.mR4</code> would add `16` of margin to the right of an element, 
<code class="language-plaintext"><span class="rnt-object">t</span>.mB8</code> would add `32` of margin to the bottom of an element, 
<code class="language-plaintext"><span class="rnt-object">t</span>.mL2</code> would add `8` of margin to the left of an element, 
<code class="language-plaintext"><span class="rnt-object">t</span>.mS1</code> would add `4` of margin to the start of an element, 
and <code class="language-plaintext"><span class="rnt-object">t</span>.mE0</code> would add `0` of margin to the end of an element.


<div class="flex justify-around items-start">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mT8</p>
    <div class="flex bg-gray-400">
      <span class="mt-8 bg-yellow-200">Target</span>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mR8</p>
    <div class="flex bg-gray-400">
      <span class="mr-8 bg-yellow-200">Target</span>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mB8</p>
    <div class="flex bg-gray-400">
      <span class="mb-8 bg-yellow-200">Target</span>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mL8</p>
    <div class="flex bg-gray-400">
      <span class="ml-8 bg-yellow-200">Target</span>
    </div>
  </div>
</div>

## Add horizontal margin

Control the horizontal margin of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.mX{Size}</code> utilities.

<div class="flex justify-around items-center">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mX8</p>
    <div class="flex bg-gray-400">
      <span class="mx-8 bg-yellow-200">Target</span>
    </div>
  </div>
</div>



## Add vertical margin

Control the vertical margin of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.mY{Size}</code> utilities.


<div class="flex justify-around items-center">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mY8</p>
    <div class="flex bg-gray-400">
      <span class="my-8 bg-yellow-200">Target</span>
    </div>
  </div>
</div>



## Add margin to all sides

Control the margin on all sides of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.m{Size}</code> utilities.


<div class="flex justify-around items-center">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.m8</p>
    <div class="flex bg-gray-400">
      <span class="m-8 bg-yellow-200">Target</span>
    </div>
  </div>
</div>



## Negative margins

Control the negative margin of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>._m{Side?}{Size}</code> utilities.


<div class="flex justify-around items-center">
  <div>
    <div class="bg-gray-400 h-16 w-32"></div>
    <div class="bg-yellow-200 h-16 mx-auto -mt-8 w-24 flex items-center justify-center">
      <span class="rnt-object">t</span>._mT8
    </div>
  </div>
</div>

## Directional

Control the margin on one side of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.m{S|E}{Size}</code> utilities.

For example, 
<code class="language-plaintext"><span class="rnt-object">t</span>.mS1</code> would add `4` of margin to the start of an element, 
and <code class="language-plaintext"><span class="rnt-object">t</span>.mE0</code> would add `0` of margin to the end of an element.

### ltr

<div class="flex justify-around items-start">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mS8</p>
    <div class="flex bg-gray-400">
      <span class="ml-8 bg-yellow-200">Target</span>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mE8</p>
    <div class="flex bg-gray-400">
      <span class="mr-8 bg-yellow-200">Target</span>
    </div>
  </div>
</div>

### rtl

<div class="flex justify-around items-start">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mS8</p>
    <div class="flex bg-gray-400">
      <span class="mr-8 bg-yellow-200">Target</span>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.mE8</p>
    <div class="flex bg-gray-400">
      <span class="ml-8 bg-yellow-200">Target</span>
    </div>
  </div>
</div>

<br>

[More info about directional layout](https://tvke.github.io/react-native-tailwindcss/directional)
