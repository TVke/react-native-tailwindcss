---
layout: post
title: "Opacity"
description: "Utilities for controlling the opacity of an element."
classes:
  name: opacity
  key: opacity
  values: 
      [
      ['100', '1'],
      ['75', '0.75'],
      ['50', '0.5'],
      ['25', '0.25'],
      ['0', '0'],
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

## Example

<div class="flex -mx-2 my-4">
    {%- for value in page.classes.values -%}
        <div class="text-sm flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 mx-2 opacity-{{ value[0] }}">.opacity{{ value[0] }}</div>
    {%- endfor -%}
</div>
