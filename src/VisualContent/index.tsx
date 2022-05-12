import React, { FC, useMemo } from 'react'
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

const VisualContent: FC<VisualContentProps> = ({
  content,
  components = {},
}) => {
  const componentList = useMemo(
    () => ({ ...defaultComponents, ...components }),
    [components]
  )

  if (!content) {
    return null
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

export default VisualContent

export { Paragraph, Header, Quote, Image, HTML, List }
