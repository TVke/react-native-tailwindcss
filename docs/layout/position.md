---
layout: post
title: "Position"
description: "Utilities for controlling how an element is positioned in the DOM."
classes:
  name: ''
  key: position
  values: 
      [
      ['relative', "'relative'"],
      ['absolute', "'absolute'"],
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

In `react-native` everything is set to relative by default, so absolute positioning is always relative to the parent. [more details on the default positioning](https://facebook.github.io/react-native/docs/layout-props#position)

## Relative

Use <code class="language-plaintext"><span class="rnt-object">t</span>.relative</code> to position an element according to the normal flow of the document.

Offsets are calculated relative to the element's normal position and the element *will* act as a position reference for absolutely positioned children.

<div class="relative h-32 bg-gray-600 p-4 text-gray-900">
  <p>Relative parent</p>
  <div class="absolute bottom-0 right-0 bg-gray-800 p-4 text-gray-400">
    <p>Absolute child</p>
  </div>
</div>

## Absolute

Use <code class="language-plaintext"><span class="rnt-object">t</span>.absolute</code> to position an element *outside* of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist.

Offsets are calculated relative to the nearest parent and the element *will* act as a position reference for other absolutely positioned children.

<p class="text-sm text-gray-600 mb-1">With regular positioning</p>
<div class="relative bg-gray-500 p-4 text-gray-700">
  <p class="mb-2">Relative parent</p>
  <div class="relative bottom-0 left-0 bg-gray-800 p-4 text-gray-400 inline-block">
    <p>Relative child</p>
  </div>
  <div class="bg-gray-400 p-4 text-gray-700 inline-block relative">
    <p>Relative sibling</p>
  </div>
</div>

<p class="text-sm text-gray-600 mb-1">With absolute positioning</p>
<div class="relative bg-gray-500 p-4 text-gray-700">
  <p class="mb-2">Relative parent</p>
  <div class="absolute top-0 right-0 bg-gray-800 p-4 text-gray-400 inline-block">
    <p>Absolute child</p>
  </div>
  <div class="bg-gray-400 p-4 relative text-gray-700 inline-block relative">
    <p>Relative sibling</p>
  </div>
</div>
