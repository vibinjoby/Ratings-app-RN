import { addParameters } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({
  layout: 'fullscreen',
  options: {
    panelPosition: 'right',
  },
  viewPort: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
})
