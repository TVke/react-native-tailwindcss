---
layout: post
title: "Line Height"
description: "Utilities for controlling the leading (line height) of an element."
classes:
  name: leading
  key: lineHeight
  values: 
      [
      ['None', '1'],
      ['Tight', '1.25'],
      ['Snug', '1.375'],
      ['Normal', '1.5'],
      ['Relaxed', '1.625'],
      ['Loose', '2'],
      ]
---

<!-- 
 rems
['None', '16'],
['Tight', '20'],
['Snug', '22'],
['Normal', '24'],
['Relaxed', '26'],
['Loose', '32'],
 
 -->

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

Control the line height of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.leading{Size}</code> utilities.

<div>
{%- for value in page.classes.values -%}
    <div class="mb-6">
      <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.leading{{ value[0] }}</p>
      <p class="leading-{{ value[0] | downcase }} text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, quia temporibus eveniet a libero incidunt suscipit laborum, rerum accusantium modi quidem, ipsam illum quis sed voluptatum quae eum fugit earum.</p>
    </div>
{%- endfor -%}
</div>
