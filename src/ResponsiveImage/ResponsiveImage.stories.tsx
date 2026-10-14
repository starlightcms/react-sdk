import type { Meta, StoryObj } from '@storybook/react-vite'

import { ResponsiveImage } from './index'

const meta = {
  component: ResponsiveImage,
} satisfies Meta<typeof ResponsiveImage>

export default meta

type Story = StoryObj<typeof meta>

const baseImage = {
  id: 1760435021,
  name: 'omnichannelpng-itsIJgrEeR',
  extension: 'png',
  mime: 'image/png',
  files: [
    {
      id: 746092090,
      variation: 'original',
      path: 'https://picsum.photos/500/300.jpg',
      mime: 'image/jpeg',
      background_color: 'fa9b32',
      filesize: 260505,
      meta: {
        width: 500,
        height: 300,
      },
      created_at: '2025-10-09T19:31:31.000000Z',
    },
    {
      id: 1219227085,
      variation: 'optimized',
      path: 'https://picsum.photos/500/300.jpg',
      mime: 'image/jpeg',
      background_color: 'fa9b32',
      filesize: 130414,
      meta: {
        width: 500,
        height: 300,
      },
      created_at: '2025-10-09T19:31:31.000000Z',
    },
    {
      id: 1742562512,
      variation: 'thumbnail',
      path: 'https://picsum.photos/200/150.jpg',
      mime: 'image/jpeg',
      background_color: 'fa9b32',
      filesize: 18490,
      meta: {
        width: 200,
        height: 150,
      },
      created_at: '2025-10-09T19:31:31.000000Z',
    },
  ],
  alt: 'Sample alt text',
  description: 'Sample description',
  created_at: '2025-10-09T19:31:31.000000Z',
  updated_at: '2025-10-09T19:31:31.000000Z',
}

export const Default: Story = {
  args: {
    image: baseImage,
  },
}
