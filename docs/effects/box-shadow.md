---
layout: post
title: "Box Shadow"
description: "Utilities for controlling the box shadow of an element."
classes:
  name: shadow
  key: shadow
  values:    
    [
      ['', {
      shadowColor: "'rgba(0, 0, 0, 0.1)'",
      shadowOffset: '{width: 0, height: 1}',
      shadowRadius: '3',
      elevation: '1.5'
      }],
      ['Md', {
      shadowColor: "'rgba(0, 0, 0, 0.1)'", 
      shadowOffset: '{width: 0, height: 4}',
      shadowRadius: '6',
      elevation: '3',
      }],
      ['Lg', {
      shadowColor: "'rgba(0, 0, 0, 0.1)'", 
      shadowOffset: '{width: 0, height: 10}',
      shadowRadius: '15',
      elevation: '7.5',
      }],
      ['Xl', {
      shadowColor: "'rgba(0, 0, 0, 0.1)'", 
      shadowOffset: '{width: 0, height: 20}',
      shadowRadius: '25',
      elevation: '12.5',
      }],
      ['2xl', {
      shadowColor: "'rgba(0, 0, 0, 0.25)'", 
      shadowOffset: '{width: 0, height: 25}',
      shadowRadius: '50',
      elevation: '25',
      }],
      ['Inner', {
      shadowColor: "'rgba(0, 0, 0, 0.06)'", 
      shadowOffset: '{width: 0, height: 2}',
      shadowRadius: '4',
      elevation: '2',
      }],
      ['Outline', {
      shadowColor: "'rgba(66, 153, 225, 0.5)'", 
      shadowOffset: '{width: 0, height: 0}',
      shadowRadius: '0',
      elevation: '0',
      }],
      ['None', {
      shadowColor: "'rgba(0, 0, 0, 0)'", 
      shadowOffset: '{width: 0, height: 0}',
      shadowRadius: '0',
      elevation: '0',
      }],
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
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">
        {%- for item in value[1] -%}
            <p class="m-0">{{ item[0] }}: {{ item[1] }}, </p>
        {%- endfor -%}
        </td>
        </tr>
    {%- endfor -%}
    </tbody>
</table>
</div>
</div>

## Outer shadow

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.shadow</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.shadowMd</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.shadowLg</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.shadowXl</code>, 
or <code class="language-plaintext"><span class="rnt-object">t</span>.shadow2xl</code> utilities to apply different sized outer box shadows to an element.

#### iOS

<div class="flex flex-wrap justify-between items-center bg-gray-200 rounded p-8">
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">base</div>
      <div class="h-8 w-8 text-xs bg-white rounded p-4" style="box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)"></div>
    </div>
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">md</div>
      <div class="h-10 w-10 text-xs bg-white rounded p-4" style="box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)"></div>
    </div>
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">lg</div>
      <div class="h-12 w-12 text-xs bg-white rounded p-4" style="box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1)"></div>
    </div>
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">xl</div>
      <div class="h-16 w-16 text-xs bg-white rounded p-4" style="box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1)"></div>
    </div>
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">2xl</div>
      <div class="h-20 w-20 text-xs bg-white rounded p-4" style="box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25)"></div>
    </div>
</div>

#### Android

<div class="flex flex-wrap justify-between items-center bg-gray-200 rounded p-8">
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">base</div>
      <div class="h-8 w-8 text-xs bg-white rounded p-4" style="box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.2), 0 0 1.5px rgba(0, 0, 0, 0.1)"></div>
    </div>
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">md</div>
      <div class="h-10 w-10 text-xs bg-white rounded p-4" style="box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.2), 0 0 3px rgba(0, 0, 0, 0.1)"></div>
    </div>
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">lg</div>
      <div class="h-12 w-12 text-xs bg-white rounded p-4" style="box-shadow: 0 4px 7.5px rgba(0, 0, 0, 0.2), 0 0 7.5px rgba(0, 0, 0, 0.1)"></div>
    </div>
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">xl</div>
      <div class="h-16 w-16 text-xs bg-white rounded p-4" style="box-shadow: 0 7px 12.5px rgba(0, 0, 0, 0.2), 0 0 12.5px rgba(0, 0, 0, 0.1)"></div>
    </div>
    <div class="text-center px-2">
      <div class="mb-1 text-xs text-gray-600">2xl</div>
      <div class="h-20 w-20 text-xs bg-white rounded p-4" style="box-shadow: 0 12.5px 25px rgba(0, 0, 0, 0.2), 0 0 25px rgba(0, 0, 0, 0.1)"></div>
    </div>
</div>

## Inner shadow

Inner shadows are not supported in `react-native`. When the default 
<code class="language-plaintext"><span class="rnt-object">t</span>.shadowInner</code> is used, the inner keyword is ignored.

## Outline shadow

Outline shadows are not supported in `react-native`. When the default 
<code class="language-plaintext"><span class="rnt-object">t</span>.shadowOutline</code> is used, the outline value will be ignored.

## No shadow

Use <code class="language-plaintext"><span class="rnt-object">t</span>.shadowNone</code> to remove an existing box shadow from an element. 



