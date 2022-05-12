import React, { FC } from 'react'
import { ParagraphBlock, VisualDataBlock } from '@starlightcms/js-sdk'

const Paragraph: FC<VisualDataBlock<ParagraphBlock>> = ({ data }) => {
  return (
    <p
      className="sl-content-block sl-paragraph"
      dangerouslySetInnerHTML={{ __html: data.text }}
    />
  )
}

export default Paragraph
