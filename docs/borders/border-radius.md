---
layout: post
title: "Border Radius"
description: "Utilities for controlling the border radius of an element."
classes:
  name: rounded
  key: borderRadius
  values: 
      [
      ['None', '0'],
      ['Sm', '2'],
      ['', '4'],
      ['Lg', '8'],
      ['Full', '9999'],
      ]
  directions:
      [
      ['T', {borderTopLeftRadius, borderTopRightRadius}],
      ['R', {borderTopRightRadius, borderBottomRightRadius}],
      ['B', {borderBottomLeftRadius, borderBottomRightRadius}],
      ['L', {borderTopLeftRadius, borderBottomLeftRadius}],
      ['Tl', {borderTopLeftRadius}],
      ['Tr', {borderTopRightRadius}],
      ['Br', {borderBottomRightRadius}],
      ['Bl', {borderBottomLeftRadius}],
      ['S', {borderTopStartRadius, borderBottomStartRadius}],
      ['E', {borderTopEndRadius, borderBottomEndRadius}],
      ['Ts', {borderTopStartRadius}],
      ['Te', {borderTopEndRadius}],
      ['Be', {borderBottomEndRadius}],
      ['Bs', {borderBottomStartRadius}],
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
            {%- for direction in page.classes.directions -%}
                <tr>
                <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name }}{{ direction[0] }}{{ value[0] }}</td>
                <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">
                {%- for directionItem in direction[1] -%}
                    <p class="m-0">{{ directionItem }}: {{ value[1] }} </p>
                {%- endfor -%}
                </td>
                </tr>
            {%- endfor -%}
    {%- endfor -%}
    </tbody>
</table>
</div>
</div>

## Rounded corners

Use the 
<code class="language-plaintext"><span class="rnt-object">t</span>.roundedSm</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.rounded</code>, or 
<code class="language-plaintext"><span class="rnt-object">t</span>.roundedLg</code> utilities to apply different border radius sizes to an element.

<div class="bg-gray-400 mr-3 p-4 rounded-sm"><span class="rnt-object">t</span>.roundedSm</div>
<div class="bg-gray-400 mr-3 p-4 rounded"><span class="rnt-object">t</span>.rounded</div>
<div class="bg-gray-400 mr-3 p-4 rounded-lg"><span class="rnt-object">t</span>.roundedLg</div>

## Pills and circles

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.roundedFull</code> utility to create pills and circles.

<div class="bg-gray-400 mr-3 py-2 px-4 rounded-full">Pill shape</div>
<div class="bg-gray-400 h-16 w-16 rounded-full flex items-center justify-center">Circle</div>

## No rounding

Use <code class="language-plaintext"><span class="rnt-object">t</span>.roundedNone</code> to remove an existing border radius from an element.

This is most commonly used to remove a border radius that was applied at a smaller breakpoint.

<div class="p-4 rounded-none bg-gray-400"><span class="rnt-object">t</span>.roundedNone</div>

## Rounding sides separately

Use <code class="language-plaintext"><span class="rnt-object">t</span>.rounded{T|R|B|L|S|E}{Size?}</code> to only round one side an element.

<div class="bg-gray-400 mr-3 p-4 rounded-t-lg"><span class="rnt-object">t</span>.roundedTLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-r-lg"><span class="rnt-object">t</span>.roundedRLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-b-lg"><span class="rnt-object">t</span>.roundedBLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-l-lg"><span class="rnt-object">t</span>.roundedLLg</div>

## Rounding corners separately

Use <code class="language-plaintext"><span class="rnt-object">t</span>.rounded{Tl|Tr|Br|Bl|Ts|Te|Bs|Be}{Size?}</code> to only round one corner an element.

<div class="bg-gray-400 mr-3 p-4 rounded-tl-lg"><span class="rnt-object">t</span>.roundedTlLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-tr-lg"><span class="rnt-object">t</span>.roundedTrLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-br-lg"><span class="rnt-object">t</span>.roundedBrLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-bl-lg"><span class="rnt-object">t</span>.roundedBlLg</div>

## Directional

### Sides

Use <code class="language-plaintext"><span class="rnt-object">t</span>.rounded{S|E}{Size?}</code> to only round one side an element.

#### ltr

<div class="bg-gray-400 mr-3 p-4 rounded-l-lg"><span class="rnt-object">t</span>.roundedSLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-r-lg"><span class="rnt-object">t</span>.roundedELg</div>

<br>

#### rtl

<div class="bg-gray-400 mr-3 p-4 rounded-r-lg"><span class="rnt-object">t</span>.roundedSLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-l-lg"><span class="rnt-object">t</span>.roundedELg</div>

### Corners

Use <code class="language-plaintext"><span class="rnt-object">t</span>.rounded{Ts|Te|Bs|Be}{Size?}</code> to only round one corner an element.

#### ltr

<div class="bg-gray-400 mr-3 p-4 rounded-tl-lg"><span class="rnt-object">t</span>.roundedTsLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-tr-lg"><span class="rnt-object">t</span>.roundedTeLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-bl-lg"><span class="rnt-object">t</span>.roundedBsLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-br-lg"><span class="rnt-object">t</span>.roundedBeLg</div>

<br>

#### rtl

<div class="bg-gray-400 mr-3 p-4 rounded-tr-lg"><span class="rnt-object">t</span>.roundedTsLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-tl-lg"><span class="rnt-object">t</span>.roundedTeLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-br-lg"><span class="rnt-object">t</span>.roundedBsLg</div>
<div class="bg-gray-400 mr-3 p-4 rounded-bl-lg"><span class="rnt-object">t</span>.roundedBeLg</div>

<br>

[More info about directional layout](https://tvke.github.io/react-native-tailwindcss/directional)
