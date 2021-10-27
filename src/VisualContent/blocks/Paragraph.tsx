import React, { FC, memo } from 'react'
import { ParagraphBlock, VisualDataBlock } from '@starlightcms/js-sdk'

const Paragraph: FC<VisualDataBlock<ParagraphBlock>> = ({ data }) => {
  return <p className="sl-content-block sl-paragraph">{data.text}</p>
}

export default memo(Paragraph)
