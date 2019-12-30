---
layout: post
title: "Border Radius"
description: "Utilities for controlling the border radius of an element."
classes:
  name: content
  key: alignContent
  values: 
      [
      ['Start', 'flex-start'],
      ['End', 'flex-end'],
      ['Center', 'center'],
      ['Stretch', 'stretch'],
      ['Between', 'space-between'],
      ['Around', 'space-around'],
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

## Rounded corners

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.rounded-sm</code>, <code class="language-plaintext"><span class="rnt-object">t</span>.rounded</code>, or <code class="language-plaintext"><span class="rnt-object">t</span>.rounded-lg</code> utilities to apply different border radius sizes to an element.


<div class="bg-gray-400 mr-3 p-4 rounded-sm">.rounded-sm</div>
<div class="bg-gray-400 mr-3 p-4 rounded">.rounded</div>
<div class="bg-gray-400 p-4 rounded-lg">.rounded-lg</div>



<a id="test" style="position: relative; top: -64px; display: block; visibility: hidden;"></a>
## Pills and circles

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.rounded-full</code> utility to create pills and circles.


<div class="bg-gray-400 mr-3 py-2 px-4 rounded-full">Pill shape</div>
<div class="bg-gray-400 h-16 w-16 rounded-full flex items-center justify-center">Circle</div>



## No rounding

Use <code class="language-plaintext"><span class="rnt-object">t</span>.rounded-none</code> to remove an existing border radius from an element.

This is most commonly used to remove a border radius that was applied at a smaller breakpoint.


<div class="p-4 rounded-none bg-gray-400">.rounded-none</div>



## Rounding sides separately

Use <code class="language-plaintext"><span class="rnt-object">t</span>.rounded-{t|r|b|l}{-size?}</code> to only round one side an element.


<div class="bg-gray-400 mr-3 p-4 rounded-t-lg">.rounded-t-lg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-r-lg">.rounded-r-lg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-b-lg">.rounded-b-lg</div>
<div class="bg-gray-400 p-4 rounded-l-lg">.rounded-l-lg</div>



## Rounding corners separately

Use <code class="language-plaintext"><span class="rnt-object">t</span>.rounded-{tl|tr|br|bl}{-size?}</code> to only round one corner an element.


<div class="bg-gray-400 mr-3 p-4 rounded-tl-lg">.rounded-tl-lg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-tr-lg">.rounded-tr-lg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-br-lg">.rounded-br-lg</div>
<div class="bg-gray-400 p-4 rounded-bl-lg">.rounded-bl-lg</div>



