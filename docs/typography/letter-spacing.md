---
layout: post
title: "Letter Spacing"
description: "Utilities for controlling the tracking (letter spacing) of an element."
classes:
  name: tracking
  key: letterSpacing
  values: 
      [
      ['Tighter', '-0.8'],
      ['Tight', '-0.4'],
      ['Normal', '0'],
      ['Wide', '0.4'],
      ['Wider', '0.8'],
      ['Widest', '1.6'],
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

Control the letter spacing of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.tracking{Size}</code> utilities.


<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.trackingTighter</p>
  <p class="tracking-tighter text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.trackingTight</p>
  <p class="tracking-tight text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.trackingNormal</p>
  <p class="tracking-normal text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.trackingWide</p>
  <p class="tracking-wide text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div class="mb-6">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.trackingWider</p>
  <p class="tracking-wider text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
<div>
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.trackingWidest</p>
  <p class="tracking-widest text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>



