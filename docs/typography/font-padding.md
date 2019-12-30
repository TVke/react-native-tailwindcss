---
layout: post
title: "Font Style (Android)"
description: "Utilities for controlling the padding of a font."
classes:
  name: fontPadding
  key: includeFontPadding
  values: 
      [
      ['', 'true'],
      ['False', 'false'],
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

## No font padding

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.notItalic</code> utility to display text normally. This is typically used to reset italic text at different breakpoints.


<p class="not-italic text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>



## Font padding

Use the <code class="language-plaintext"><span class="rnt-object">t</span>.italic</code> utility to make text italic.


<p class="italic text-lg text-gray-800">The quick brown fox jumped over the lazy dog.</p>



