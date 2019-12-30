---
layout: post
title: "Max-Height"
description: "Utilities for setting the maximum height of an element"
classes:
  name: maxH
  key: maxHeight
  values: 
      [
      ['Full', "'100%'"],
      ['Screen', "'100vh'"],
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

Set the maximum height of an element using the 
<code class="language-plaintext"><span class="rnt-object">t</span>.maxHFull</code> or 
<code class="language-plaintext"><span class="rnt-object">t</span>.maxHScreen</code> utilities.


<div class="h-24 p-6 bg-gray-300">
  <div class="h-48 max-h-full p-6 bg-gray-400 flex items-center justify-center">
    <span class="rnt-object">t</span><span>.maxHFull</span>
  </div>
</div>



---

