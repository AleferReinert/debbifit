import { MockedProvider } from '@apollo/client/testing'
import type { Preview } from '@storybook/react'
import React from 'react'
import '../src/app/globals.css'
import { homeMocks } from '../src/app/page.mock'

const preview: Preview = {
  decorators: [
    (Story) => (
      <MockedProvider mocks={homeMocks} addTypename={false}>
        <Story />
      </MockedProvider>
    )
  ],
  parameters: {
    backgrounds: {
      disable: true
    },
    controls: {
      hideNoControlsWarning: true
    },
    layout: 'fullscreen',
    options: {
      showPanel: true,
      panelDirection: 'right'
    },
    viewport: {
      viewports: {
        xs: {
          name: 'Tailwind xs (320)',
          styles: {
            width: '320px',
            height: '100%'
          }
        },
        sm: {
          name: 'Tailwind sm (640)',
          styles: {
            width: '640px',
            height: '100%'
          }
        },
        md: {
          name: 'Tailwind md (768)',
          styles: {
            width: '768px',
            height: '100%'
          }
        },
        lg: {
          name: 'Tailwind lg (1024)',
          styles: {
            width: '1024px',
            height: '100%'
          }
        },
        xl: {
          name: 'Tailwind xl (1280)',
          styles: {
            width: '1280px',
            height: '100%'
          }
        },
        '2xl': {
          name: 'Tailwind 2xl (1536)',
          styles: {
            width: '1536px',
            height: '100%'
          }
        },
        responsive: {
          name: 'responsive',
          styles: {
            width: '100%',
            height: '100%'
          }
        }
      },
      defaultViewport: 'responsive'
    }
  }
}

export default preview
