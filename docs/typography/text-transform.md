---
layout: post
title: "Text Transform"
description: "Utilities for controlling the transformation of text."
classes:
  name: ''
  key: textTransform
  values: 
      [
      ['normalCase', "'none'"],
      ['uppercase', "'uppercase'"],
      ['lowercase', "'lowercase'"],
      ['capitalize', "'capitalize'"],
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

## Normal Case

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.normalCase</code> utility to preserve the original casing. This is typically used to reset capitalization at different breakpoints.

<div class="bg-gray-200 p-2 rounded">
<p class="normal-case text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>

## Uppercase

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.uppercase</code> utility to uppercase text.

<div class="bg-gray-200 p-2 rounded">
<p class="uppercase text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>

## Lowercase

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.lowercase</code> utility to lowercase text.

<div class="bg-gray-200 p-2 rounded">
<p class="lowercase text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>

## Capitalize

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.capitalize</code> utility to capitalize text.

<div class="bg-gray-200 p-2 rounded">
<p class="capitalize text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>
</div>
