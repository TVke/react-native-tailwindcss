---
layout: post
title: "Flex Shrink"
description: "Utilities for controlling how flex items shrink."
classes:
  name: flexShrink
  key: flexShrink
  values: 
      [
      ['', '1'],
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

## Shrink

Use <code class="language-plaintext"><span class="rnt-object">t</span>.flexShrink</code> to allow a flex item to shrink if needed:


<div class="flex bg-gray-200">
  <div class="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Longer content that cannot flex
  </div>
  <div class="flex-shrink text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
    Item that will shrink even if it causes the content to wrap
  </div>
  <div class="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Longer content that cannot flex
  </div>
</div>


## Don't shrink

Use <code class="language-plaintext"><span class="rnt-object">t</span>.flexShrink0</code> to prevent a flex item from shrinking:


<div class="flex bg-gray-200">
  <div class="flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Item that can shrink if needed
  </div>
  <div class="flex-shrink-0 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
    Item that cannot shrink below its initial size
  </div>
  <div class="flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Item that can shrink if needed
  </div>
</div>


