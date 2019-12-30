---
layout: post
title: "Width"
description: "Utilities for setting the width of an element"
classes:
  name: w
  key: width
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
      ['1_2', "'50%'"],
      ['1_3', "'33.333333%'"],
      ['2_3', "'66.666667%'"],
      ['1_4', "'25%'"],
      ['2_4', "'50%'"],
      ['3_4', "'75%'"],
      ['1_5', "'20%'"],
      ['2_5', "'40%'"],
      ['3_5', "'60%'"],
      ['4_5', "'80%'"],
      ['1_6', "'16.666667%'"],
      ['2_6', "'33.333333%'"],
      ['3_6', "'50%'"],
      ['4_6', "'66.666667%'"],
      ['5_6', "'83.333333%'"],
      ['1_12', "'8.333333%'"],
      ['2_12', "'16.666667%'"],
      ['3_12', "'25%'"],
      ['4_12', "'33.333333%'"],
      ['5_12', "'41.666667%'"],
      ['6_12', "'50%'"],
      ['7_12', "'58.333333%'"],
      ['8_12', "'66.666667%'"],
      ['9_12', "'75%'"],
      ['10_12', "'83.333333%'"],
      ['11_12', "'91.666667%'"],
      ['Full', "'100%'"],
      ['Screen', "'100vw'"],
      ]
  fixed:
      [
      ['0', '0'],
      ['Px', '1'],
      ['1', '1'],
      ['2', '2'],
      ['3', '3'],
      ['4', '4'],
      ['5', '5'],
      ['6', '6'],
      ['8', '8'],
      ['10', '10'],
      ['12', '12'],
      ['16', '16'],
      ['20', '20'],
      ['24', '24'],
      ['32', '32'],
      ['40', '40'],
      ['48', '48'],
      ['56', '56'],
      ['64', '64'],
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

Use <code class="language-plaintext"><span class="rnt-object">t</span>.wAuto</code> to let the browser calculate and select the width for the element.


<div class="w-auto bg-gray-400 mb-4 px-2"><span class="rnt-object">t</span>.wAuto on block element</div>
<div class="w-auto inline-block bg-gray-400 px-2"><span class="rnt-object">t</span>.wAuto on inline-block element</div>



## Screen Width

Use <code class="language-plaintext"><span class="rnt-object">t</span>.wScreen</code> to make an element span the entire width of the viewport.


<div class="w-screen bg-gray-400 h-4"></div>


## Fixed Width

Use <code class="language-plaintext"><span class="rnt-object">t</span>.w{number}</code> or <code class="language-plaintext"><span class="rnt-object">t</span>.wPx</code> to set an element to a fixed width.

<!-- <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.key }}: {{ value[1] }}</td>
        </tr> -->

{%- for value in page.classes.fixed -%}
    <div class="flex items-center mb-1">
      <p class="text-sm text-gray-600 w-20 mr-2 m-0"><span class="rnt-object">t</span>.w{{ value[0] }}</p>
      <div class="h-4 bg-gray-400 w-{{ value[1] }}"></div>
    </div>
{%- endfor -%}

## Fluid Width

Use 
<code class="language-plaintext"><span class="rnt-object">t</span>.w{fraction}</code> or 
<code class="language-plaintext"><span class="rnt-object">t</span>.wFull</code> to set an element to a percentage based width.

<div class="bg-gray-200 p-4">
  <div class="flex mb-4">
    <div class="w-1/2 p-2 bg-gray-400 text-center"><span class="rnt-object">t</span>.w1_2</div>
    <div class="w-1/2 p-2 bg-gray-500 text-center"><span class="rnt-object">t</span>.w1_2</div>
  </div>
  <div class="flex mb-4">
    <div class="w-2/5 p-2 bg-gray-400 text-center"><span class="rnt-object">t</span>.w2_5</div>
    <div class="w-3/5 p-2 bg-gray-500 text-center"><span class="rnt-object">t</span>.w3_5</div>
  </div>
  <div class="flex mb-4">
    <div class="w-1/3 p-2 bg-gray-400 text-center"><span class="rnt-object">t</span>.w1_3</div>
    <div class="w-2/3 p-2 bg-gray-500 text-center"><span class="rnt-object">t</span>.w2_3</div>
  </div>
  <div class="flex mb-4">
    <div class="w-1/4 p-2 bg-gray-400 text-center"><span class="rnt-object">t</span>.w1_4</div>
    <div class="w-3/4 p-2 bg-gray-500 text-center"><span class="rnt-object">t</span>.w3_4</div>
  </div>
  <div class="flex mb-4">
    <div class="w-1/5 p-2 bg-gray-400 text-center"><span class="rnt-object">t</span>.w1_5</div>
    <div class="w-4/5 p-2 bg-gray-500 text-center"><span class="rnt-object">t</span>.w4_5</div>
  </div>
  <div class="flex mb-4">
    <div class="w-1/6 p-2 bg-gray-400 text-center"><span class="rnt-object">t</span>.w1_6</div>
    <div class="w-5/6 p-2 bg-gray-500 text-center"><span class="rnt-object">t</span>.w5_6</div>
  </div>
  <div class="w-full p-2 bg-gray-400 text-center"><span class="rnt-object">t</span>.wFull</div>
</div>


