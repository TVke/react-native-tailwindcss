---
layout: post
title: "Object Fit"
description: "Utilities for controlling how a replaced element's content should be resized."
classes:
  name: object
  key: resizeMode
  values: 
      [
      ['Contain', "'contain'"],
      ['Cover', "'cover'"],
      ['Stretch', "'stretch'"],
      ['Center', "'center'"],
      ['Repeat', "'repeat'"],
      ]
  name2: resize
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
    {%- for value in page.classes.values -%}
        <tr>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-purple-700 whitespace-no-wrap"><span class="rnt-object">t</span>.{{ page.classes.name2 }}{{ value[0] }}</td>
        <td class="p-2 border-t border-gray-300 font-mono text-xs text-blue-700 whitespace-pre">{{ page.classes.key }}: {{ value[1] }}</td>
        </tr>
    {%- endfor -%}
    </tbody>
</table>
</div>
</div>

## Contain

Resize an element's content to stay contained within its container using <code class="language-plaintext"><span class="rnt-object">t</span>.objectContain</code>.

<div class="p-4">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.objectContain</p>
  <div class="bg-gray-400">
    <img class="h-48 w-full object-contain" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
  </div>
</div>

## Cover

Resize an element's content to cover its container using <code class="language-plaintext"><span class="rnt-object">t</span>.objectCover</code>.

<div class="p-4">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.objectCover</p>
  <div class="bg-gray-400">
    <img class="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
  </div>
</div>

## Stretch

Stretch an element's content to fit its container using <code class="language-plaintext"><span class="rnt-object">t</span>.objectStretch</code>.

<div class="p-4">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.objectStretch</p>
  <div class="bg-gray-400">
    <img class="h-48 w-full object-fill" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="">
  </div>
</div>

## Center

Resize an element's content to stay contained within its container using <code class="language-plaintext"><span class="rnt-object">t</span>.objectCenter</code>.

<div class="p-4">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.objectCenter</p>
  <div class="bg-gray-400 h-48 flex justify-center items-center">
    <img src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80" alt="">
  </div>
</div>

## Repeat

Resize an element's content to stay contained within its container using <code class="language-plaintext"><span class="rnt-object">t</span>.objectRepeat</code>.

<div class="p-4">
  <p class="text-sm text-gray-600"><span class="rnt-object">t</span>.objectRepeat</p>
  <div class="bg-gray-400 h-48 w-full bg-repeat bg-center" style="background-image:url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&q=80');">
  </div>
</div>
