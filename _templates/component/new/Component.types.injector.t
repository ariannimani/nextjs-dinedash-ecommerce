---
inject: true
to: packages/ui/src/<%= types %>/index.ts
append: true
skip_if: export { <%= name %> } from './<%= name %>/<%= name %>';
---
export { <%= name %> } from './<%= name %>/<%= name %>';
