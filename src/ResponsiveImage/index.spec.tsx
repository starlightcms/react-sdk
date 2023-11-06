import React from 'react'
import { MediaObject } from '@starlightcms/js-sdk'
import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, cleanup, screen } from '@testing-library/react'
import { ResponsiveImage } from './index'

const IntersectionObserverMock: any = vi.fn(
  (
    callback: (
      entries: Partial<IntersectionObserverEntry>[],
      observer: typeof IntersectionObserverMock
    ) => void
  ) => ({
    disconnect: vi.fn(),
    observe: vi.fn(),
    takeRecords: vi.fn(),
    unobserve: vi.fn(),
  })
)

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock)

afterEach(() => {
  cleanup()
})

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

describe('ResponsiveImage component', () => {
  it('Image will not load if it not currently on screen', async () => {
    render(
      <ResponsiveImage image="https://cards.scryfall.io/art_crop/front/7/b/7b6d71a0-7603-4cf1-b874-2b2200e62183.jpg?1562921013" />
    )

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 0 }],
      new IntersectionObserverMock(() => undefined)
    )

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    )
  })

  it('Loading image using URL', async () => {
    render(
      <ResponsiveImage image="https://cards.scryfall.io/art_crop/front/7/b/7b6d71a0-7603-4cf1-b874-2b2200e62183.jpg?1562921013" />
    )

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 1 }],
      new IntersectionObserverMock(() => undefined)
    )

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute(
      'src',
      'https://cards.scryfall.io/art_crop/front/7/b/7b6d71a0-7603-4cf1-b874-2b2200e62183.jpg?1562921013'
    )
  })

  it('Loading image using image object', async () => {
    render(<ResponsiveImage image={exampleImage} />)

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 1 }],
      new IntersectionObserverMock(() => undefined)
    )

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/starlight-optimized/406/186.jpg'
    )
  })

  it('ResponsiveImage using image object (with an alt) renders alt from object', async () => {
    render(<ResponsiveImage image={exampleImage} />)

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 1 }],
      new IntersectionObserverMock(() => undefined)
    )

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute('alt', 'Lorem ipsum')
  })

  it('ResponsiveImage with alt prop using image object renders alt from property rather than from object', async () => {
    render(<ResponsiveImage image={exampleImage} alt="Prop alt" />)

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 1 }],
      new IntersectionObserverMock(() => undefined)
    )

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute('alt', 'Prop alt')
  })

  it('Variation prop on ResponsiveImage (using image object) works', async () => {
    render(<ResponsiveImage image={exampleImage} variation="thumbnail" />)

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 1 }],
      new IntersectionObserverMock(() => undefined)
    )

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/starlight-thumbnail/200/92.jpg'
    )
  })

  it('Variation prop on ResponsiveImage (using image object) works', async () => {
    render(<ResponsiveImage image={exampleImage} className="testClass" />)

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 1 }],
      new IntersectionObserverMock(() => undefined)
    )

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute('class', 'sl-lazyload testClass')
  })

  it('sizes prop on ResponsiveImage works', async () => {
    render(
      <ResponsiveImage
        image={exampleImage}
        sizes="(max-width: 710px) 120px, (max-width: 991px) 193px, 278px"
      />
    )

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 1 }],
      new IntersectionObserverMock(() => undefined)
    )

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute(
      'sizes',
      '(max-width: 710px) 120px, (max-width: 991px) 193px, 278px'
    )
  })

  it('Image has red background when not loaded', async () => {
    render(<ResponsiveImage image={exampleImage} background="red" />)

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 0 }],
      new IntersectionObserverMock(() => undefined)
    )

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    )
    expect(image).toHaveAttribute(
      'style',
      'background-color: rgb(194, 162, 4);'
    )
  })

  it("Image loads only after being scrolled to (i.e. after it's in the viewport)", async () => {
    render(<ResponsiveImage image={exampleImage} />)

    const image = await screen.findByTestId('sl-responsive-image')
    expect(image).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='
    )

    const [callback] = IntersectionObserverMock.mock.lastCall
    callback(
      [{ intersectionRatio: 1 }],
      new IntersectionObserverMock(() => undefined)
    )

    expect(image).toHaveAttribute(
      'src',
      'https://picsum.photos/seed/starlight-optimized/406/186.jpg'
    )
  })
})
