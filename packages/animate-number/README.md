# ViewPort Render List

[Documentation - livemehere-dev-packs](https://livemehere.github.io/livemehere-dev-packs/docs/viewport-render-list/what-is-this)

![example](https://github.com/livemehere/livemehere-dev-packs/blob/master/packages/viewport-render-list/img/example.gif)

## Introduction

This library is a solution for virtual-window depend on viewport and body's scroll position. [npm](https://www.npmjs.com/package/viewport-render-list/)
I guarantee this library is really simple.

Most virtual-window solution is quite complex. But most of us just want to improve performance of rendering list with simple way.
Of course, if you have to configure many options, you can consider other libraries. like [react-window](https://www.npmjs.com/package/react-window) or [react-virtualized](https://www.npmjs.com/package/react-virtualized).

If you want to just improve performance of rendering list, this library is for you.
This is depend on viewport, and body's scroll position.
Automatically calculate how many item should be rendered, and render only items which are in viewport.

## Features

- Render Infinite list with high performance.
- Render items only when they are in viewport.
- Set item's height but auto calculate about extra height of item(sometimes dom has dynamic height)
- **Memorize each item was rendered and has shown in viewport**.
