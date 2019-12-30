---
layout: post
title: "Text Shadow"
description: "Utilities for controlling the text shadow of a text."
classes:
  name: textShadow
  key: textShadow
  values:    
    [
      ['', {
      textShadowColor: "'rgba(0, 0, 0, 0.1)'",
      textShadowOffset: '{width: 0, height: 1}',
      textShadowRadius: '3',
      }],
      ['Md', {
      textShadowColor: "'rgba(0, 0, 0, 0.1)'", 
      textShadowOffset: '{width: 0, height: 4}',
      textShadowRadius: '6',
      }],
      ['Lg', {
      textShadowColor: "'rgba(0, 0, 0, 0.1)'", 
      textShadowOffset: '{width: 0, height: 10}',
      textShadowRadius: '15',
      }],
      ['Xl', {
      textShadowColor: "'rgba(0, 0, 0, 0.1)'", 
      textShadowOffset: '{width: 0, height: 20}',
      textShadowRadius: '25',
      }],
      ['2xl', {
      textShadowColor: "'rgba(0, 0, 0, 0.25)'", 
      textShadowOffset: '{width: 0, height: 25}',
      textShadowRadius: '50',
      }],
      ['Inner', {
      textShadowColor: "'rgba(0, 0, 0, 0.06)'", 
      textShadowOffset: '{width: 0, height: 2}',
      textShadowRadius: '4',
      }],
      ['Outline', {
      textShadowColor: "'rgba(66, 153, 225, 0.5)'", 
      textShadowOffset: '{width: 0, height: 0}',
      textShadowRadius: '0',
      }],
      ['None', {
      textShadowColor: "'rgba(0, 0, 0, 0)'", 
      textShadowOffset: '{width: 0, height: 0}',
      textShadowRadius: '0',
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

## Text shadows

Use the 
<code class="language-plaintext"><span class="rnt-object">t</span>.textShadow</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.textShadowMd</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.textShadowLg</code>, 
<code class="language-plaintext"><span class="rnt-object">t</span>.textShadowXl</code>, 
or <code class="language-plaintext"><span class="rnt-object">t</span>.textShadow2xl</code> utilities to apply different sized text shadows to an element.

<div class="flex bg-gray-100 justify-around py-4">
<p class="m-0 mb-1 text-gray-300" style="text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)">base</p>
<p class="m-0 mb-1 text-gray-300" style="text-shadow: 0 4px 6px rgba(0, 0, 0, 0.1)">md</p>
<p class="m-0 mb-1 text-gray-300" style="text-shadow: 0 10px 15px rgba(0, 0, 0, 0.1)">lg</p>
<p class="m-0 mb-1 text-gray-300" style="text-shadow: 0 20px 25px rgba(0, 0, 0, 0.1)">xl</p>
<p class="m-0 mb-1 text-gray-300" style="text-shadow: 0 25px 50px rgba(0, 0, 0, 0.25)">2xl</p>
</div>
