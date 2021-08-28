---
inject: true
to: storybook/stories.ts
skip_if: import '../src/screens/<%= name %>/stories'
append: true
---
import '../src/screens/<%= name %>/stories'