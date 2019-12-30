---
layout: post
title: "Vertical Alignment (Android)"
description: "Utilities for controlling the vertical alignment of an inline or table-cell box."
classes:
  name: align
  key: textAlignVertical
  values: 
      [
      ['Auto', "'auto'"],
      ['Top', "'top'"],
      ['Bottom', "'bottom'"],
      ['Center', "'center'"],
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

## Auto

Use <code class="language-plaintext"><span class="rnt-object">t</span>.alignAuto</code> to align the top of an element with the top of the parent element's font.

<div class="leading-none relative">
  <span class="w-1 h-8 inline-block align-top bg-blue-300">
    <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
    <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
  </span>
  <span class="relative z-10"><span class="rnt-object">t</span>.alignAuto</span>
</div>

## Top

Use <code class="language-plaintext"><span class="rnt-object">t</span>.alignTop</code> to align the top of an element and its descendants with the top of the entire line.

<div class="leading-none relative">
  <span class="w-1 h-8 inline-block align-top bg-blue-300">
    <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
    <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
  </span>
  <span class="relative z-10"><span class="rnt-object">t</span>.alignTop</span>
</div>

## Center

Use <code class="language-plaintext"><span class="rnt-object">t</span>.alignCenter</code> to align the middle of an element with the baseline plus half the x-height of the parent.

<div class="leading-none relative">
  <span class="w-1 h-8 inline-block align-middle bg-blue-300">
    <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
    <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
  </span>
  <span class="relative z-10"><span class="rnt-object">t</span>.alignCenter</span>
</div>

## Bottom

Use <code class="language-plaintext"><span class="rnt-object">t</span>.alignBottom</code> to align the bottom of an element and its descendants with the bottom of the entire line.

<div class="leading-none relative">
  <span class="w-1 h-8 inline-block align-bottom bg-blue-300">
    <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>
    <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>
  </span>
  <span class="relative z-10"><span class="rnt-object">t</span>.alignBottom</span>
</div>
