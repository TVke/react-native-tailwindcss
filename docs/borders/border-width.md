---
layout: post
title: "Border Width"
description: "Utilities for controlling the width an element's borders."
classes:
  name: border
  key: borderWidth
  values: 
      [
      ['', '1'],
      ['0', '0'],
      ['2', '2'],
      ['4', '4'],
      ['8', '8'],
      ]
  directions:
      [
      ['X', {borderRightWidth, borderLeftWidth}],
      ['Y', {borderTopWidth, borderBottomWidth}],
      ['T', {borderTopWidth}],
      ['R', {borderRightWidth}],
      ['B', {borderBottomWidth}],
      ['L', {borderLeftWidth}],
      ['E', {borderEndWidth}],
      ['S', {borderStartWidth}],
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
    {%- endfor -%}
    </tbody>
</table>
</div>
</div>

## All sides

Use the 
<code class="language-plaintext"><span class="rnt-object">t</span>.border</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.border0</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.border2</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.border4</code>, or 
<code class="language-plaintext"><span class="rnt-object">t</span>.border8</code> utilities to set the border width for all sides of an element.

<div class="flex">
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.border0</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-0 border-gray-600"></div>
  </div>
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.border</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border border-gray-600"></div>
  </div>
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.border2</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-2 border-gray-600"></div>
  </div>
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.border4</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-4 border-gray-600"></div>
  </div>
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.border8</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-8 border-gray-600"></div>
  </div>
</div>

## Individual sides

Use the 
<code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}0</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}2</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}4</code>, or 
<code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}8</code> utilities to set the border width for one side of an element.

<div class="flex">
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderT2</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-t-2 border-gray-600"></div>
  </div>
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderR2</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-r-2 border-gray-600"></div>
  </div>
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderB2</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-b-2 border-gray-600"></div>
  </div>
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderL2</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-l-2 border-gray-600"></div>
  </div>
</div>

## Directional

Use the 
<code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}0</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}2</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}4</code>, 
or <code class="language-plaintext"><span class="rnt-object">t</span>.border{Side}8</code> utilities to set the border width for one side of an element.

### ltr

<div class="flex">
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderS2</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-l-2 border-gray-600"></div>
  </div>
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderE2</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-r-2 border-gray-600"></div>
  </div>
</div>

### rtl

<div class="flex">
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderS2</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-r-2 border-gray-600"></div>
  </div>
  <div class="w-1/2 sm:flex-1">
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderE2</p>
    <div class="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-l-2 border-gray-600"></div>
  </div>
</div>

<br>

[More info about directional layout](https://tvke.github.io/react-native-tailwindcss/directional)
