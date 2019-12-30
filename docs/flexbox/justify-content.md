---
layout: post
title: "Justify Content"
description: "Utilities for controlling how flex items are positioned along a container's main axis."
classes:
  name: justify
  key: justifyContent
  values: 
      [
        ['Start', "'flex-start'"],
        ['End', "'flex-end'"],
        ['Center', "'center'"],
        ['Between', "'space-between'"],
        ['Around', "'space-around'"],
        ['Evenly', "'space-evenly'"],
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

## Start

Use <code class="language-plaintext"><span class="rnt-object">t</span>.justifyStart</code> to justify items against the start of the flex container's main axis:


<div class="flex justify-start bg-gray-200">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


## Center

Use <code class="language-plaintext"><span class="rnt-object">t</span>.justifyCenter</code> to justify items along the center of the flex container's main axis:


<div class="flex justify-center bg-gray-200">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


## End

Use <code class="language-plaintext"><span class="rnt-object">t</span>.justifyEnd</code> to justify items against the end of the flex container's main axis:


<div class="flex justify-end bg-gray-200">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


## Space between

Use <code class="language-plaintext"><span class="rnt-object">t</span>.justifyBetween</code> to justify items along the flex container's main axis such that there is an equal amount of space between each item:


<div class="flex justify-between bg-gray-200">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


## Space around

Use <code class="language-plaintext"><span class="rnt-object">t</span>.justifyAround</code> to justify items along the flex container's main axis such that there is an equal amount of space around each item:


<div class="flex justify-around bg-gray-200">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>

## Space evenly

Use <code class="language-plaintext"><span class="rnt-object">t</span>.justifyEvenly</code> to justify items along the flex container's main axis such that there is an equal amount of space between and around each item:


<div class="flex justify-around bg-gray-200">
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>
  <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>
</div>


