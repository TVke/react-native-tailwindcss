---
layout: post
title: "Border Style"
description: "Utilities for controlling the style of an element's borders."
classes:
  name: border
  key: borderStyle
  values: 
      [
      ['Solid', "'solid'"],
      ['Dotted', "'dotted'"],
      ['Dashed', "'dashed'"],
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

Use <code class="language-plaintext"><span class="rnt-object">t</span>.border{style}</code> to control an element's border style.

<div class="block sm:flex">
  <div class="sm:w-3/5 sm:mb-0 flex justify-between mb-6">
    <div class="flex-1">
      <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderSolid</p>
      <div class="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-solid"></div>
    </div>
    <div class="flex-1">
      <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderDotted</p>
      <div class="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-dotted"></div>
    </div>
    <div class="flex-1">
      <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.borderDashed</p>
      <div class="mx-auto w-24 h-24 bg-gray-400 border-4 border-gray-600 border-dashed"></div>
    </div>
  </div>
</div>
