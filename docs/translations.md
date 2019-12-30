---
layout: post
title: "Translations"
description: "Overview of all the differences between Tailwind CSS and react-native-tailwindcss."
---

## Differences between Tailwind CSS and react-native-tailwindcss

### Class conversions rules

Every 'class' becomes CamelCase instead of tailwindCSS default `-` separated. 

<br>

<div class="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
<div class="lg:max-h-sm overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
<table class="w-full text-left table-collapse mb-0">
    <thead>
    <tr>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Tailwind CSS</th>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">react-native-tailwindcss</th>
    </tr>
    </thead>
    <tbody class="align-baseline">
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">border-t-1</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre"><span class="rnt-object">t</span>.borderT1</td>
        </tr>
    </tbody>
</table>
</div>
</div>

<br>

A `-` in the beginning of a 'class' becomes a `_`. 

<br>

<div class="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
<div class="lg:max-h-sm overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
<table class="w-full text-left table-collapse mb-0">
    <thead>
    <tr>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Tailwind CSS</th>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">react-native-tailwindcss</th>
    </tr>
    </thead>
    <tbody class="align-baseline">
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">-mt-4</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre"><span class="rnt-object">t</span>._mT4</td>
        </tr>
    </tbody>
</table>
</div>
</div>

<br>

A directional attribute will become capitalized for consistency reasons. 

<br>

<div class="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
<div class="lg:max-h-sm overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
<table class="w-full text-left table-collapse mb-0">
    <thead>
    <tr>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Tailwind CSS</th>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">react-native-tailwindcss</th>
    </tr>
    </thead>
    <tbody class="align-baseline">
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">inset-x-0</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre"><span class="rnt-object">t</span>.insetX0</td>
        </tr>
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">border-y-1</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre"><span class="rnt-object">t</span>.borderY1</td>
        </tr>
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">pb-2</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre"><span class="rnt-object">t</span>.pB2</td>
        </tr>
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">mt-3</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre"><span class="rnt-object">t</span>.mT3</td>
        </tr>
    </tbody>
</table>
</div>
</div>

<br>

A `/` also becomes a `_` to separate the numbers. 

<br>

<div class="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
<div class="lg:max-h-sm overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
<table class="w-full text-left table-collapse mb-0">
    <thead>
    <tr>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Tailwind CSS</th>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">react-native-tailwindcss</th>
    </tr>
    </thead>
    <tbody class="align-baseline">
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">w-1/5</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre"><span class="rnt-object">t</span>.w1_5</td>
        </tr>
    </tbody>
</table>
</div>
</div>

<br>

These conversions happen also when adding new items to the config file. 

<br>

<div class="mt-0 border-t border-b border-gray-300 overflow-hidden relative">
<div class="lg:max-h-sm overflow-y-auto scrollbar-w-2 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
<table class="w-full text-left table-collapse mb-0">
    <thead>
    <tr>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">Tailwind CSS</th>
    <th class="text-sm font-semibold text-gray-700 p-2 bg-gray-100">react-native-tailwindcss</th>
    </tr>
    </thead>
    <tbody class="align-baseline">
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap">px-7</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre"><span class="rnt-object">t</span>.pX7</td>
        </tr>
    </tbody>
</table>
</div>
</div>

<br>

Make sure to checkout the [special cases](https://tvke.github.io/react-native-tailwindcss/special-cases) if there is something acting different the expected.

If there is anything not working or working different then expected please [create an issue]('https://github.com/TVke/react-native-tailwindcss/issues').

