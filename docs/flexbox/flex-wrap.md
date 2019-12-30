---
layout: post
title: "Flex Wrap"
description: "Utilities for controlling how flex items wrap."
classes:
  name: flex
  key: flexWrap
  values: 
      [
      ['Wrap', "'wrap'"],
      ['WrapReverse', "'wrap-reverse'"],
      ['NoWrap', "'nowrap'"],
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

## Don't wrap

Use <code class="language-plaintext"><span class="rnt-object">t</span>.flexNoWrap</code> to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:


<div class="flex flex-no-wrap bg-gray-200">
  <div class="w-2/5 flex-none p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
  </div>
  <div class="w-2/5 flex-none p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
  </div>
  <div class="w-2/5 flex-none p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
  </div>
</div>


## Wrap normally

Use <code class="language-plaintext"><span class="rnt-object">t</span>.flexWrap</code> to allow flex items to wrap:


<div class="flex flex-wrap bg-gray-200">
  <div class="w-2/5 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
  </div>
  <div class="w-2/5 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
  </div>
  <div class="w-2/5 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
  </div>
</div>


## Wrap reversed

Use <code class="language-plaintext"><span class="rnt-object">t</span>.flexWrapReverse</code> to wrap flex items in the reverse direction:


<div class="flex flex-wrap-reverse bg-gray-200">
  <div class="w-2/5 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
  </div>
  <div class="w-2/5 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
  </div>
  <div class="w-2/5 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
  </div>
</div>


