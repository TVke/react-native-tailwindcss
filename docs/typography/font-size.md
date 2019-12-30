---
layout: post
title: "Font Size"
description: "Utilities for controlling the font size of an element."
classes:
  name: text
  key: fontSize
  values: 
      [
      ['Xs', '12'],
      ['Sm', '14'],
      ['Base', '16'],
      ['Lg', '18'],
      ['Xl', '20'],
      ['2xl', '24'],
      ['3xl', '30'],
      ['4xl', '36'],
      ['5xl', '48'],
      ['6xl', '64'],
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

Control the font size of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.text{Size}</code> utilities.


<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textXs</p>
  <p class="text-xs truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textSm</p>
  <p class="text-sm truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textBase</p>
  <p class="text-base truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textLg</p>
  <p class="text-lg truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textXl</p>
  <p class="text-xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.text2xl</p>
  <p class="text-2xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.text3xl</p>
  <p class="text-3xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.text4xl</p>
  <p class="text-4xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div>
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.text5xl</p>
  <p class="text-5xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div>
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.text6xl</p>
  <p class="text-6xl truncate text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>



