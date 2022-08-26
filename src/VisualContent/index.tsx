import React, { FC, useMemo } from 'react'
import { VisualDataBlock, ParagraphBlock } from '@starlightcms/js-sdk'
import { BlockComponents, VisualContentProps } from './types'
import Paragraph from './blocks/Paragraph'
import Header from './blocks/Header'
import Quote from './blocks/Quote'
import Image from './blocks/Image'
import HTML from './blocks/HTML'
import List from './blocks/List'

const defaultComponents: BlockComponents = {
  paragraph: Paragraph,
  header: Header,
  quote: Quote,
  image: Image,
  raw: HTML,
  list: List,
}

export const VisualContent: FC<VisualContentProps> = ({
  content,
  components = {},
  excerpt = false,
  excerptLength = 40,
}) => {
  if (!content) {
    return null
  }

  const componentList = useMemo(
    () => ({ ...defaultComponents, ...components }),
    [components]
  )

  if (excerpt) {
    const block = content.blocks.find((block) => block.type === 'paragraph')

    if (!block) return null

    const text = (block as VisualDataBlock<ParagraphBlock>).data.text.split(' ')
    const excerptText =
      text.length > excerptLength
        ? text.splice(0, excerptLength).join(' ') + '...'
        : text.join(' ')
    const Component = componentList.paragraph

    return (
      <Component
        key={block.id}
        id={block.id}
        type={block.type}
        data={{ text: excerptText }}
      />
    )
  }

  return (
    <div className="sl-visual-content">
      {content.blocks.map((block) => {
        const Component = componentList[block.type]

        if (!Component) return null

        return (
          <Component
            key={block.id}
            id={block.id}
            type={block.type}
            data={block.data as never}
          />
        )
      })}
    </div>
  )
}

export {
  Paragraph as ParagraphComponent,
  Header as HeaderComponent,
  Quote as QuoteComponent,
  Image as ImageComponent,
  HTML as HTMLComponent,
  List as ListComponent,
}
