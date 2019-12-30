---
layout: post
title: "Height"
description: "Utilities for setting the height of an element"
classes:
  name: h
  key: height
  values: 
      [
       ['Auto', "'auto'"],
       ['Px', '1'],
       ['0', '0'],
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

## Auto

Use <code class="language-plaintext"><span class="rnt-object">t</span>.hAuto</code> to let the browser determine the height for the element.

<div class="h-auto w-32 text-center mx-auto bg-gray-400 p-6"><span class="rnt-object">t</span>.hAuto</div>

## Screen height

Use <code class="language-plaintext"><span class="rnt-object">t</span>.hScreen</code> to make an element span the entire height of the viewport.

<div class="bg-gray-400 h-screen"></div>

## Fixed height

Use <code class="language-plaintext"><span class="rnt-object">t</span>.h{number}</code> or <code class="language-plaintext"><span class="rnt-object">t</span>.hPx</code> to set an element to a fixed height.

<div class="flex justify-around items-end">
<div class="mr-3">
  <div class="h-8 w-8 bg-gray-400"></div>
  <p class="text-center mt-2 text-sm"><span class="rnt-object">t</span>.h8</p>
</div>
<div class="mr-3">
  <div class="h-12 w-12 bg-gray-400"></div>
  <p class="text-center mt-2 text-sm"><span class="rnt-object">t</span>.h12</p>
</div>
<div>
  <div class="h-16 w-16 bg-gray-400"></div>
  <p class="text-center mt-2 text-sm"><span class="rnt-object">t</span>.h16</p>
</div>
</div>

## Full height

Use <code class="language-plaintext"><span class="rnt-object">t</span>.hFull</code> to set an element's height to 100% of its parent, as long as the parent has a defined height.

<div class="h-48">
  <div class="h-full p-6 bg-gray-400"><span class="rnt-object">t</span>.hFull</div>
</div>
