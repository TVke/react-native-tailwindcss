---
layout: post
title: "Z-Index"
description: "Utilities for controlling the stack order of an element."
classes:
  name: z
  key: zIndex
  values: 
      [
      ['auto', 'auto'],
      ['0', '0'],
      ['10', '10'],
      ['20', '20'],
      ['30', '30'],
      ['40', '40'],
      ['50', '50'],
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

Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the <code class="language-plaintext"><span class="rnt-object">t</span>.z{index}</code> utilities.

<div class="relative h-32 text-center">
  <div class="z-50 absolute w-24 h-24 -ml-2 -mt-2 bg-gray-300 flex justify-center items-center">z50</div>
  <div class="z-40 absolute w-24 h-24 ml-0 mt-0 bg-gray-400 flex justify-center items-center">z40</div>
  <div class="z-30 absolute w-24 h-24 ml-2 mt-2 bg-gray-500 flex justify-center items-center">z30</div>
  <div class="z-20 absolute w-24 h-24 ml-4 mt-4 bg-gray-600 flex justify-center items-center">z20</div>
  <div class="z-10 absolute w-24 h-24 ml-6 mt-6 bg-gray-700 flex justify-center items-center">z10</div>
  <div class="z-0 absolute w-24 h-24 ml-8 mt-8 bg-gray-800 flex justify-center items-center">z0</div>
</div>



