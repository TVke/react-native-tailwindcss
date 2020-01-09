---
layout: post
title: "Flex"
description: "Utilities for controlling how flex items both grow and shrink."
classes:
  name: flex
  key: flex
  values: 
      [
      ['None', '0'],
      ['1', '1'],
      ['Initial', '0'],
      ['Auto', '1'],
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

## None

Use <code class="language-plaintext"><span class="rnt-object">t</span>.flexNone</code> to prevent a flex item from growing or shrinking:

<div class="flex bg-gray-200">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Item that can grow or shrink if needed
  </div>
  <div class="flex-none text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">
    Item that cannot grow or shrink
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Item that can grow or shrink if needed
  </div>
</div>

## Flex 1

Use <code class="language-plaintext"><span class="rnt-object">t</span>.flex1</code> to allow a flex item to grow and shrink as needed, ignoring its initial size:

<p class="text-sm text-gray-600 mb-1">Default behavior</p>
<div class="flex bg-gray-200 mb-6">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Short
  </div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Medium length
  </div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Significantly larger amount of content
  </div>
</div>
<p class="text-sm text-gray-600 mb-1">With <code class="language-plaintext"><span class="rnt-object">t</span>.flex1</code></p>
<div class="flex bg-gray-200">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Short
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Medium length
  </div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
    Significantly larger amount of content
  </div>
</div>
