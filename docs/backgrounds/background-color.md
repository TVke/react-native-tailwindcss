---
layout: post
title: "Background Color"
description: "Utilities for controlling an element's background color."
classes:
  name: content
  key: alignContent
  values: 
      [
      ['Start', 'flex-start'],
      ['End', 'flex-end'],
      ['Center', 'center'],
      ['Stretch', 'stretch'],
      ['Between', 'space-between'],
      ['Around', 'space-around'],
      ]
---

@include('_partials.background-color-class-table', [
  'rows' => $page->config['theme']['colors']->flatMap(function ($colors, $name) {
    if (is_string($colors)) {
      return [
        [".bg-{$name}", "background-color: {$colors};"]
      ];
    }

    return collect($colors)->map(function ($value, $key) use ($name) {
      $class = ".bg-{$name}-{$key}";
      $code = "background-color: {$value};";
      return [
        $class,
        $code,
      ];
    });
  })->values()->all()
])

## Usage

Control the background color of an element using the <code class="language-plaintext"><span class="rnt-object">t</span>.bg-{color}</code> utilities.


<button type="button" class="bg-blue-500 text-white font-semibold px-4 py-2 rounded">
  Button
</button>



