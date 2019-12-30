---
layout: post
title: "Align Self"
description: "Utilities for controlling how an individual flex item is positioned along its container's cross axis."
classes:
  name: self
  key: alignSelf
  values: 
      [
      ['Auto', "'auto'"],
      ['Start', "'flex-start'"],
      ['End', "'flex-end'"],
      ['Center', "'center'"],
      ['Stretch', "'stretch'"],
      ['Baseline', "'baseline'"],
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

Use <code class="language-plaintext"><span class="rnt-object">t</span>.selfAuto</code> to align an item based on the value of the flex container's `align-items` property:


<div class="flex items-stretch bg-gray-200 h-24">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="self-auto flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">2</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


## Start

Use <code class="language-plaintext"><span class="rnt-object">t</span>.selfStart</code> to align an item to the start of the flex container's cross axis, despite the container's `align-items` value:


<div class="flex items-stretch bg-gray-200 h-24">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="self-start flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">2</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


## Center

Use <code class="language-plaintext"><span class="rnt-object">t</span>.selfCenter</code> to align an item along the center of the flex container's cross axis, despite the container's `align-items` value:


<div class="flex items-stretch bg-gray-200 h-24">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="self-center flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">2</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


## End

Use <code class="language-plaintext"><span class="rnt-object">t</span>.selfEnd</code> to align an item to the end of the flex container's cross axis, despite the container's `align-items` value:

<div class="flex items-stretch bg-gray-200 h-24">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="self-end flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">2</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


## Stretch

Use <code class="language-plaintext"><span class="rnt-object">t</span>.selfStretch</code> to stretch an item to fill the flex container's cross axis, despite the container's `align-items` value:

<div class="flex items-start bg-gray-200 h-24">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="self-stretch flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">2</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


## Baseline

Use <code class="language-plaintext"><span class="rnt-object">t</span>.selfBaseline</code> to align an item along the flex container's cross axis, despite the container's `align-items` value:

<div class="flex items-center bg-gray-200 h-24">
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="self-start flex-1 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">2</div>
  <div class="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


