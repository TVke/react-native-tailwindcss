---
layout: post
title: "Text Decoration"
description: "Utilities for controlling the decoration of text."
classes:
  name: ''
  key: textDecorationLine
  values: 
      [
      ['noUnderline', "'none'"],
      ['underline', "'underline'"],
      ['lineThrough', "'line-through'"],
      ['underlineLineThrough', "'underline line-through'"],
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

## Underline

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.underline</code> utility to underline text.

<p class="underline text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>

## Line Through

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.lineThrough</code> utility to strike out text.

<p class="line-through text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>

## No Underline

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.noUnderline</code> utility to remove underline or line-through styling.

<div class="text-center">
  <a href="#" class="no-underline text-blue-500 text-lg">Link with no underline</a>
</div>
