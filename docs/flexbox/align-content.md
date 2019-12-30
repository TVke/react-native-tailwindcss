---
layout: post
title: "Align Content"
description: "Utilities for controlling how lines are positioned in multi-line flex containers."
classes:
  name: content
  key: alignContent
  values: 
      [
      ['Start', "'flex-start'"],
      ['End', "'flex-end'"],
      ['Center', "'center'"],
      ['Stretch', "'stretch'"],
      ['Between', "'space-between'"],
      ['Around', "'space-around'"],
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

Use <code class="language-plaintext"><span class="rnt-object">t</span>.contentStart</code> to pack lines in a flex container against the start of the cross axis:

<div class="flex content-start flex-wrap bg-gray-200 h-48">
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
  </div>
</div>

## End

Use <code class="language-plaintext"><span class="rnt-object">t</span>.contentEnd</code> to pack lines in a flex container against the end of the cross axis:

<div class="flex content-end flex-wrap bg-gray-200 h-48">
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
  </div>
</div>

## Center

Use <code class="language-plaintext"><span class="rnt-object">t</span>.contentCenter</code> to pack lines in a flex container in the center of the cross axis:

<div class="flex content-center flex-wrap bg-gray-200 h-48">
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
  </div>
</div>

## Stretch

Use <code class="language-plaintext"><span class="rnt-object">t</span>.contentStretch</code> to stretch lines in a flex container such that there is an no amount of space between the lines:

<div class="flex content-stretch flex-wrap bg-gray-200 h-48">
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2 h-full">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2 h-full">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2 h-full">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2 h-full">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2 h-full">5</div>
  </div>
</div>

## Space between

Use <code class="language-plaintext"><span class="rnt-object">t</span>.contentBetween</code> to distribute lines in a flex container such that there is an equal amount of space between each line:

<div class="flex content-between flex-wrap bg-gray-200 h-48">
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
  </div>
</div>

## Space around

Use <code class="language-plaintext"><span class="rnt-object">t</span>.contentAround</code> to distribute lines in a flex container such that there is an equal amount of space around each line:

<div class="flex content-around flex-wrap bg-gray-200 h-48">
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">1</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">2</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">3</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">4</div>
  </div>
  <div class="w-1/3 p-2">
    <div class="text-gray-700 text-center bg-gray-400 p-2">5</div>
  </div>
</div>
