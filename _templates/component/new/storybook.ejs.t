---
inject: true
to: storybook/stories.ts
skip_if: import '../src/components/<%= name %>/stories'
append: true
---
import '../src/components/<%= name %>/stories'