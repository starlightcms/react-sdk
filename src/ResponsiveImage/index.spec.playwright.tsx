import React from 'react'
import { test, expect } from '@playwright/experimental-ct-react17'
import { ResponsiveImage } from './index'
import { MediaObject } from '@starlightcms/js-sdk'

const exampleImage: MediaObject = {
  id: 987654321,
  name: 'ExampleImageZPYYGh',
  extension: 'jpg',
  mime: 'image/jpeg',
  files: [
    {
      id: 12365873,
      variation: 'original',
      path: 'https://picsum.photos/seed/starlight-original/406/186.jpg',
      mime: 'image/jpeg',
      background_color: 'c2a204',
      filesize: 11397,
      meta: { width: 406, height: 186 },
      created_at: '2020-11-04T17:34:11.000000Z',
    },
    {
      id: 111222333,
      variation: 'optimized',
      path: 'https://picsum.photos/seed/starlight-optimized/406/186.jpg',
      mime: 'image/jpeg',
      background_color: 'c2a204',
      filesize: 4019,
      meta: { width: 406, height: 186 },
      created_at: '2020-11-04T17:34:11.000000Z',
    },
    {
      id: 222333444,
      variation: 'thumbnail',
      path: 'https://picsum.photos/seed/starlight-thumbnail/200/92.jpg',
      mime: 'image/jpeg',
      background_color: 'c2a204',
      filesize: 4443,
      meta: { width: 200, height: 92 },
      created_at: '2020-11-04T17:34:11.000000Z',
    },
  ],
  alt: 'Lorem ipsum',
  description: 'muspi meroL',
  created_at: '2020-11-04T17:34:11.000000Z',
  updated_at: '2020-11-04T17:34:11.000000Z',
}

test.describe('ResponsiveImage', () => {
  test('Loading image using URL', async ({ mount, page }) => {
    await mount(
      <ResponsiveImage image="https://cards.scryfall.io/art_crop/front/7/b/7b6d71a0-7603-4cf1-b874-2b2200e62183.jpg?1562921013" />
    )

    await expect(page.getByTestId('image')).toHaveAttribute(
      'src',
      'https://cards.scryfall.io/art_crop/front/7/b/7b6d71a0-7603-4cf1-b874-2b2200e62183.jpg?1562921013'
    )
  })

  test('Loading image using image object', async ({ mount, page }) => {
    await mount(<ResponsiveImage image={exampleImage} />)

    await expect(page.getByTestId('image')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/starlight-optimized/406/186.jpg'
    )
  })

  test('ResponsiveImage using image object (with an alt) renders alt from object', async ({
    mount,
    page,
  }) => {
    await mount(<ResponsiveImage image={exampleImage} />)

    await expect(page.getByTestId('image')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/starlight-optimized/406/186.jpg'
    )
  })

  test('ResponsiveImage with alt prop using image object renders alt from property rather than from object', async ({
    mount,
    page,
  }) => {
    await mount(<ResponsiveImage image={exampleImage} />)

    await expect(page.getByTestId('image')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/starlight-optimized/406/186.jpg'
    )
  })

  test('Variation prop on ResponsiveImage (using image object) works', async ({
    mount,
    page,
  }) => {
    await mount(<ResponsiveImage image={exampleImage} variation="thumbnail" />)

    await expect(page.getByTestId('image')).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/starlight-thumbnail/200/92.jpg'
    )
  })

  test('className prop on ResponsiveImage works', async ({ mount, page }) => {
    await mount(<ResponsiveImage image={exampleImage} className="testClass" />)

    await expect(page.getByTestId('image')).toHaveAttribute(
      'class',
      'sl-lazyload testClass'
    )
  })

  test('sizes prop on ResponsiveImage works', async ({ mount, page }) => {
    await mount(
      <ResponsiveImage
        image={exampleImage}
        sizes="(max-width: 710px) 120px, (max-width: 991px) 193px, 278px"
      />
    )

    await expect(page.getByTestId('image')).toHaveAttribute(
      'sizes',
      '(max-width: 710px) 120px, (max-width: 991px) 193px, 278px'
    )
  })

  test('loading image has background color while loading', async ({
    mount,
    page,
  }) => {
    await page.route(/(png|jpeg)$/, (route) => route.abort())

    await mount(<ResponsiveImage image={exampleImage} background="red" />)

    await expect(page.getByTestId('image')).toHaveCSS('background', 'red')
  })

  test('???', async ({ mount, page }) => {
    // renderizar a imagem fora da tela (exemplo: colocar alguns parágrafos de texto antes da imagem), dar scroll na
    // tela para deixar a imagem visível e verificar se a imagem carrega depois do scroll.  acho que esse é o método que
    // faz a tela dar scroll pra um elemento ficar visível: https://playwright.dev/docs/api/class-elementhandle#element-handle-scroll-into-view-if-needed
  })
})
