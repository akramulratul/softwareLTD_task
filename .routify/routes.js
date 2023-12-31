
/**
 * @roxi/routify 2.18.12
 * File generated Mon Sep 04 2023 03:59:34 GMT+0600 (Bangladesh Standard Time)
 */

export const __version = "2.18.12"
export const __timestamp = "2023-09-03T21:59:34.486Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "chart.svelte",
      "filepath": "/chart.svelte",
      "name": "chart",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "F:/Learning/Development/Web Development/Demo projects/pre load/softwareLTD-Task/src/pages/chart.svelte",
      "importPath": "../src/pages/chart.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/chart",
      "id": "_chart",
      "component": () => import('../src/pages/chart.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "F:/Learning/Development/Web Development/Demo projects/pre load/softwareLTD-Task/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "layout.svelte",
      "filepath": "/layout.svelte",
      "name": "layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "F:/Learning/Development/Web Development/Demo projects/pre load/softwareLTD-Task/src/pages/layout.svelte",
      "importPath": "../src/pages/layout.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/layout",
      "id": "_layout",
      "component": () => import('../src/pages/layout.svelte').then(m => m.default)
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

