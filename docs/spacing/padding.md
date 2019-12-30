---
layout: post
title: "Padding"
description: "Utilities for controlling an element's padding."
classes:
  name: p
  key: padding
  values: 
      [
      ['Auto', 'auto'],
      ['0', '0'],
      ['px', '1'],
      ['1', '4'],
      ['2', '8'],
      ['3', '12'],
      ['4', '16'],
      ['5', '20'],
      ['6', '24'],
      ['8', '32'],
      ['10', '40'],
      ['12', '48'],
      ['16', '64'],
      ['20', '80'],
      ['24', '96'],
      ['32', '128'],
      ['40', '160'],
      ['48', '192'],
      ['56', '224'],
      ['64', '256'],
      ]
  directions:
      [
      ['', {padding}],
      ['X', {paddingHorizontal}],
      ['Y', {paddingVertical}],
      ['T', {paddingTop}],
      ['R', {paddingRight}],
      ['B', {paddingBottom}],
      ['L', {paddingLeft}],
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
    {%- for direction in page.classes.directions -%}
    {%- for value in page.classes.values -%}
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name }}{{ direction[0] }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">
        {%- for directionItem in direction[1] -%}
            <p class="m-0">{{ directionItem }}: {{ value[1] }} </p>
        {%- endfor -%}
        </td>
        </tr>
    {%- endfor -%}
    {%- endfor -%}
    </tbody>
</table>
</div>
</div>

## Add padding to a single side

Control the padding on one side of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.p{T|R|B|L}{Size}</code> utilities.

For example, 
<code class="language-plaintext"><span class="rnt-object">t</span>.pT6</code> would add `24` of padding to the top of an element, 
<code class="language-plaintext"><span class="rnt-object">t</span>.pR4</code> would add `16` of padding to the right of an element, 
<code class="language-plaintext"><span class="rnt-object">t</span>.pB8</code> would add `32` of padding to the bottom of an element, and 
<code class="language-plaintext"><span class="rnt-object">t</span>.pL2</code> would add `8` of padding to the left of an element.


<div class="flex justify-around items-start">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.pT8</p>
    <div class="flex pt-8 bg-gray-400">
      <span class="bg-yellow-200">Target</span>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.pR8</p>
    <div class="flex pr-8 bg-gray-400">
      <span class="bg-yellow-200">Target</span>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.pB8</p>
    <div class="flex pb-8 bg-gray-400">
      <span class="bg-yellow-200">Target</span>
    </div>
  </div>
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.pL8</p>
    <div class="flex pl-8 bg-gray-400">
      <span class="bg-yellow-200">Target</span>
    </div>
  </div>
</div>



## Add horizontal padding

Control the horizontal padding of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.pX{Size}</code> utilities.


<div class="flex justify-around items-center">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.pX8</p>
    <div class="flex px-8 bg-gray-400">
      <span class="bg-yellow-200">Target</span>
    </div>
  </div>
</div>



## Add vertical padding

Control the vertical padding of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.pY{Size}</code> utilities.


<div class="flex justify-around items-center">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.pY8</p>
    <div class="flex py-8 bg-gray-400">
      <span class="bg-yellow-200">Target</span>
    </div>
  </div>
</div>



## Add padding to all sides

Control the padding on all sides of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.p{Size}</code> utilities.


<div class="flex justify-around items-center">
  <div>
    <p class="text-center text-sm text-gray-600 mb-1"><span class="rnt-object">t</span>.p8</p>
    <div class="flex p-8 bg-gray-400">
      <span class="bg-yellow-200">Target</span>
    </div>
  </div>
</div>
