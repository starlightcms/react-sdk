import React from 'react'
import { describe, it, expect, afterEach } from 'vitest'
import { render, cleanup } from '@testing-library/react'
import { ListComponent, VisualContent } from './index'
import { ListBlock, VisualData, VisualDataBlock } from '@starlightcms/js-sdk'

const content: VisualData = {
  time: 1696614597238,
  blocks: [
    {
      id: '4tfCt1WHxx',
      data: {
        text: 'texto normal',
      },
      type: 'paragraph',
    },
    {
      id: 'L4dZUNBFEh',
      data: {
        text: '<a href="https://www.google.com/">texto link</a>',
      },
      type: 'paragraph',
    },
    {
      id: 'CnVIc-iGSj',
      data: {
        text: 'texto <b>negrito</b>&nbsp;<i>itálico </i><span class="sl-editor__underline">sublinhado</span> tachado <sub class="sl-editor__subscript">subscrito</sub> <sup class="sl-editor__superscript">sobrescrito</sup>',
      },
      type: 'paragraph',
    },
    {
      id: 'HbAHtoLIf1',
      data: {
        text: 'texto <span class="sl__color sl__color__bg--red">com fundo</span>, <span class="sl__color sl__color__text--green">colorido</span>, <span class="sl__color sl__color__bg--orange sl__color__text--blue">com fundo e colorido</span>',
      },
      type: 'paragraph',
    },
    {
      id: 'o7yhZAVHTg',
      data: {
        html: '<div>\n        <span>teste bloco html</span>\n        <p>teste bloco html</p>\n      </div>',
      },
      type: 'raw',
    },
    {
      id: '6yVXoLxnc_',
      data: {
        text: 'texto cabeçalho h1 <i>itálico</i> <span class="sl-editor__underline">sublinhado</span>',
        level: 2,
      },
      type: 'header',
    },
    {
      id: 'TWRClJvD8e',
      data: {
        id: 1056046626,
        alt: 'alt text',
        url: 'https://media-selene-development.s3.amazonaws.com/workspaces/testedocs/livraria/optimized/wth-160-thran-tomejpg-wug5zm4gqh.jpg',
        href: null,
        files: [
          {
            url: 'https://media-selene-development.s3.amazonaws.com/workspaces/testedocs/livraria/optimized/wth-160-thran-tomejpg-wug5zm4gqh.jpg',
            width: 571,
            height: 460,
            variation: 'optimized',
          },
          {
            url: 'https://media-selene-development.s3.amazonaws.com/workspaces/testedocs/livraria/thumbnail/wth-160-thran-tomejpg-wug5zm4gqh.jpg',
            width: 200,
            height: 161,
            variation: 'thumbnail',
          },
        ],
        width: 'justify',
        caption: 'legenda',
        responsive: true,
      },
      type: 'image',
    },
    {
      id: 'YQAIgr0mwM',
      data: {
        alt: 'alt',
        url: 'https://cards.scryfall.io/art_crop/front/1/c/1cef9230-34fa-496f-8835-5dfaac627f70.jpg?1576796588',
        href: null,
        files: [],
        width: 'auto',
        caption: 'legenda 2',
        responsive: false,
      },
      type: 'image',
    },
    {
      id: 'gQvn0CT02g',
      data: {
        text: 'listas abaixo',
      },
      type: 'paragraph',
    },
    {
      id: '75sE8oHPXR',
      data: {
        items: [
          {
            items: [],
            content: 'item 1',
          },
          {
            items: [],
            content: 'item 2',
          },
          {
            items: [],
            content: 'item 3',
          },
        ],
        style: 'ordered',
      },
      type: 'list',
    },
    {
      id: 'lp_bCa2TTs',
      data: {
        items: [
          {
            items: [],
            content: 'ponto 1',
          },
          {
            items: [],
            content: 'ponto 2',
          },
          {
            items: [],
            content: 'ponto 3',
          },
        ],
        style: 'unordered',
      },
      type: 'list',
    },
    {
      id: '24OnywO8VA',
      data: {
        url: 'https://youtu.be/dQw4w9WgXcQ',
        html: "<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ' ></iframe>",
        type: 'embed',
        width: 'justify',
        caption: null,
        service: 'youtube',
        videoId: 'dQw4w9WgXcQ',
      },
      type: 'video',
    },
  ],
  version: '2.27.0-rc.4',
}

afterEach(() => {
  cleanup()
})

describe('VisualContent component', () => {
  it('The VisualContent UI (with no props) should not change', () => {
    const component = render(<VisualContent />)

    expect(component).toMatchSnapshot()
  })

  it('The VisualContent UI (with content prop) should not change', () => {
    const component = render(<VisualContent content={content} />)

    expect(component).toMatchSnapshot()
  })

  it('The VisualContent UI (with content and excerpt = true props) should not change', () => {
    const component = render(<VisualContent content={content} excerpt={true} />)

    expect(component).toMatchSnapshot()
  })

  it('The VisualContent UI (with content and excerptLength = 5 props) should not change', () => {
    const component = render(
      <VisualContent content={content} excerptLength={5} />
    )

    expect(component).toMatchSnapshot()
  })

  it('The VisualContent UI (with content, excerpt = true and excerptLength = 5 props) should not change', () => {
    const component = render(
      <VisualContent content={content} excerpt={true} excerptLength={5} />
    )

    expect(component).toMatchSnapshot()
  })

  it('The VisualContent UI (with content and components props) should not change', () => {
    const CustomListComponent = ({
      id,
      type,
      data,
    }: VisualDataBlock<ListBlock>) => {
      if (data.style === 'ordered') {
        return <p>{data.items.map((item) => item.content).join(', ')}.</p>
      }

      return <ListComponent id={id} type={type} data={data} />
    }

    const component = render(
      <VisualContent components={{ list: CustomListComponent }} />
    )

    expect(component).toMatchSnapshot()
  })
})
