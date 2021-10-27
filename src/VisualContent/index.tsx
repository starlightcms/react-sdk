import React, { FC, memo } from 'react'
import { BlockComponents, VisualContentProps } from './types'
import Paragraph from './blocks/Paragraph'
import Header from './blocks/Header'
import Quote from './blocks/Quote'
import Image from './blocks/Image'

const defaultComponents: BlockComponents = {
  paragraph: Paragraph,
  header: Header,
  quote: Quote,
  image: Image,
}

const VisualContent: FC<VisualContentProps> = ({
  content,
  components = {},
}) => {
  const componentList = Object.assign({}, defaultComponents, components)

  if (!content) {
    return null
  }

  return (
    <div className="sl-visual-content">
      {content.blocks.map((block, index) => {
        const Component = componentList[block.type]

        return (
          <Component key={index} type={block.type} data={block.data as never} />
        )
      })}
    </div>
  )
}

export default memo(VisualContent)
