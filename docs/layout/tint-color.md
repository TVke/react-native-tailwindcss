---
layout: post
title: "Tint Color"
description: "Utilities for controlling an element's tint color."
classes:
  name: tint
  key: tintColor
  values: 
      [
      ['Transparent', "'transparent'"],
      ['Black', "'#000'"],
      ['White', "'#fff'"],
      ['Gray100', "'#f7fafc'"],
      ['Gray200', "'#edf2f7'"],
      ['Gray300', "'#e2e8f0'"],
      ['Gray400', "'#cbd5e0'"],
      ['Gray500', "'#a0aec0'"],
      ['Gray600', "'#718096'"],
      ['Gray700', "'#4a5568'"],
      ['Gray800', "'#2d3748'"],
      ['Gray900', "'#1a202c'"],
      ['Red100', "'#fff5f5'"],
      ['Red200', "'#fed7d7'"],
      ['Red300', "'#feb2b2'"],
      ['Red400', "'#fc8181'"],
      ['Red500', "'#f56565'"],
      ['Red600', "'#e53e3e'"],
      ['Red700', "'#c53030'"],
      ['Red800', "'#9b2c2c'"],
      ['Red900', "'#742a2a'"],
      ['Orange100', "'#fffaf0'"],
      ['Orange200', "'#feebc8'"],
      ['Orange300', "'#fbd38d'"],
      ['Orange400', "'#f6ad55'"],
      ['Orange500', "'#ed8936'"],
      ['Orange600', "'#dd6b20'"],
      ['Orange700', "'#c05621'"],
      ['Orange800', "'#9c4221'"],
      ['Orange900', "'#7b341e'"],
      ['Yellow100', "'#fffff0'"],
      ['Yellow200', "'#fefcbf'"],
      ['Yellow300', "'#faf089'"],
      ['Yellow400', "'#f6e05e'"],
      ['Yellow500', "'#ecc94b'"],
      ['Yellow600', "'#d69e2e'"],
      ['Yellow700', "'#b7791f'"],
      ['Yellow800', "'#975a16'"],
      ['Yellow900', "'#744210'"],
      ['Green100', "'#f0fff4'"],
      ['Green200', "'#c6f6d5'"],
      ['Green300', "'#9ae6b4'"],
      ['Green400', "'#68d391'"],
      ['Green500', "'#48bb78'"],
      ['Green600', "'#38a169'"],
      ['Green700', "'#2f855a'"],
      ['Green800', "'#276749'"],
      ['Green900', "'#22543d'"],
      ['Teal100', "'#e6fffa'"],
      ['Teal200', "'#b2f5ea'"],
      ['Teal300', "'#81e6d9'"],
      ['Teal400', "'#4fd1c5'"],
      ['Teal500', "'#38b2ac'"],
      ['Teal600', "'#319795'"],
      ['Teal700', "'#2c7a7b'"],
      ['Teal800', "'#285e61'"],
      ['Teal900', "'#234e52'"],
      ['Blue100', "'#ebf8ff'"],
      ['Blue200', "'#bee3f8'"],
      ['Blue300', "'#90cdf4'"],
      ['Blue400', "'#63b3ed'"],
      ['Blue500', "'#4299e1'"],
      ['Blue600', "'#3182ce'"],
      ['Blue700', "'#2b6cb0'"],
      ['Blue800', "'#2c5282'"],
      ['Blue900', "'#2a4365'"],
      ['Indigo100', "'#ebf4ff'"],
      ['Indigo200', "'#c3dafe'"],
      ['Indigo300', "'#a3bffa'"],
      ['Indigo400', "'#7f9cf5'"],
      ['Indigo500', "'#667eea'"],
      ['Indigo600', "'#5a67d8'"],
      ['Indigo700', "'#4c51bf'"],
      ['Indigo800', "'#434190'"],
      ['Indigo900', "'#3c366b'"],
      ['Purple100', "'#faf5ff'"],
      ['Purple200', "'#e9d8fd'"],
      ['Purple300', "'#d6bcfa'"],
      ['Purple400', "'#b794f4'"],
      ['Purple500', "'#9f7aea'"],
      ['Purple600', "'#805ad5'"],
      ['Purple700', "'#6b46c1'"],
      ['Purple800', "'#553c9a'"],
      ['Purple900', "'#44337a'"],
      ['Pink100', "'#fff5f7'"],
      ['Pink200', "'#fed7e2'"],
      ['Pink300', "'#fbb6ce'"],
      ['Pink400', "'#f687b3'"],
      ['Pink500', "'#ed64a6'"],
      ['Pink600', "'#d53f8c'"],
      ['Pink700', "'#b83280'"],
      ['Pink800', "'#97266d'"],
      ['Pink900', "'#702459'"],
      ]
---

<div class="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
<div class="lg:max-h-sm overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
<table class="w-full text-left table-collapse mb-0">
    <thead>
    <tr>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Class</th>
    <th colspan="2" class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Properties</th>
    </tr>
    </thead>
    <tbody class="align-baseline">
    {%- for value in page.classes.values -%}
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.key }}: {{ value[1] }}</td>
        {%- assign colorValue = value[1] | remove: "'"  -%}
        {%- if colorValue == 'transparent' -%}
            <td class="w-24 p-2 font-mono text-xs text-blue-700 whitespace-pre" style="background-image: url('https://tailwindcss.com/img/transparent-bg.svg');"></td>
        {%- else -%}
            <td class="w-24 p-2 font-mono text-xs text-blue-700 whitespace-pre" style="background-color: {{ colorValue }}"></td>
        {%- endif -%}
        </tr>
    {%- endfor -%}
    </tbody>
</table>
</div>
</div>

## Usage

Changes the color of all the non-transparent pixels to the <code class="language-plaintext"><span class="rnt-object">t</span>tint{Color}</code>.

<div>
<p>without tint color</p>
<img src="../assets/images/city.png" alt="shaded city"/>
</div>

<div>
<p>with tint color</p>
<img src="../assets/images/city_tint.png" alt="shaded city"/>
</div>



