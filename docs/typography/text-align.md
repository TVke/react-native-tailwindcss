---
layout: post
title: "Text Alignment"
description: "Utilities for controlling the alignment of text."
classes:
  name: text
  key: textAlign
  values: 
      [
        ['Auto', 'auto'],
        ['Left', 'left'],
        ['Right', 'right'],
        ['Center', 'center'],
        ['Justify', 'justify'],
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

Control the text alignment of an element using the 
<code class="language-plaintext"><span class="rnt-object">t</span>.textAuto</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.textLeft</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.textCenter</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.textRight</code>, and 
<code class="language-plaintext"><span class="rnt-object">t</span>.textJustify</code> utilities.


### Auto

The <code class="language-plaintext"><span class="rnt-object">t</span>.textAuto</code> style is added by default and will change direction when the `writingDirection` changes .

<div class="mb-6 bg-gray-200 rounded p-2">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textAuto</p>
  <p class="text-left text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit, enim molestiae praesentium eveniet, recusandae et error beatae facilis ex harum consequuntur, quia pariatur non. Doloribus illo, ullam blanditiis ab.</p>
</div>

### Default

<div class="mb-6 bg-gray-200 rounded p-2">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textLeft</p>
  <p class="text-left text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit, enim molestiae praesentium eveniet, recusandae et error beatae facilis ex harum consequuntur, quia pariatur non. Doloribus illo, ullam blanditiis ab.</p>
</div>

<div class="mb-6 bg-gray-200 rounded p-2">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textCenter</p>
  <p class="text-center text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit, enim molestiae praesentium eveniet, recusandae et error beatae facilis ex harum consequuntur, quia pariatur non. Doloribus illo, ullam blanditiis ab.</p>
</div>

<div class="mb-6 bg-gray-200 rounded p-2">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textRight</p>
  <p class="text-right text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit, enim molestiae praesentium eveniet, recusandae et error beatae facilis ex harum consequuntur, quia pariatur non. Doloribus illo, ullam blanditiis ab.</p>
</div>

### Justify

The value 'justify' is only supported on iOS and fallbacks to 'left' on Android.

<div class="mb-6 bg-gray-200 rounded p-2">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.textJustify</p>
  <p class="text-justify text-base text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis fugit, enim molestiae praesentium eveniet, recusandae et error beatae facilis ex harum consequuntur, quia pariatur non. Doloribus illo, ullam blanditiis ab.</p>
</div>
