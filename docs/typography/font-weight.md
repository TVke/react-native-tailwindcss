---
layout: post
title: "Font Weight"
description: "Utilities for controlling the font weight of an element."
classes:
  name: font
  key: fontWeight
  values: 
      [
      ['Hairline', 100],
      ['Thin', 200],
      ['Light', 300],
      ['Normal', "'normal'"],
      ['Medium', 500],
      ['Semibold', 600],
      ['Bold', "'bold'"],
      ['Extrabold', 800],
      ['Black', 900],
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

## Usage

Control the font weight of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.font{weight}</code> utilities.


<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.fontHairline</p>
  <p class="font-hairline text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.fontThin</p>
  <p class="font-thin text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.fontLight</p>
  <p class="font-light text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.fontNormal</p>
  <p class="font-normal text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.fontMedium</p>
  <p class="font-medium text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.fontSemibold</p>
  <p class="font-semibold text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.fontBold</p>
  <p class="font-bold text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.fontExtrabold</p>
  <p class="font-extrabold text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div>
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.fontBlack</p>
  <p class="font-black text-xl text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>



