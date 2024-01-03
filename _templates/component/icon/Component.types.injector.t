---
inject: true
to: packages/ui/src/<%= types %>/index.ts
append: true
skip_if: export { default as <%= newName %> } from './<%= newName %>/<%= newName %>';
---
export {  default as <%= newName %> } from './<%= newName %>/<%= newName %>';
