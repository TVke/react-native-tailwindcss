---
layout: post
title: "Min-Width"
description: "Utilities for setting the minimum width of an element"
classes:
  name: minW
  key: minWidth
  values: 
      [
      ['0', '0'],
      ['Full', "'100%'"],
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

Set the minimum width of an element using the 
<code class="language-plaintext"><span class="rnt-object">t</span>.minW0</code> or 
<code class="language-plaintext"><span class="rnt-object">t</span>.minWFull</code> utilities.


<div class="w-24 min-w-full text-center p-6 bg-gray-300">
  <span class="rnt-object">t</span><span>.minWFull</span>
</div>



---
