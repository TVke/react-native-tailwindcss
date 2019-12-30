---
layout: post
title: "Placeholder Color"
description: "Utilities for controlling the color of placeholder text."
classes:
  name: content
  key: alignContent
  values: 
      [
      ['Start', 'flex-start'],
      ['End', 'flex-end'],
      ['Center', 'center'],
      ['Stretch', 'stretch'],
      ['Between', 'space-between'],
      ['Around', 'space-around'],
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

Control the placeholder color of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.placeholder-{color}</code> utilities.

<div class="max-w-xs">
  <input class="block appearance-none placeholder-gray-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">
  <input class="mt-4 block appearance-none placeholder-red-300 border border-red-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="jane@example.com">
</div>
@slot('code')
<input class="placeholder-gray-500 border" placeholder="jane@example.com">
<input class="placeholder-red-300 border border-red-400" placeholder="jane@example.com">
@endslot


