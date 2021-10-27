import React, { FC, memo } from 'react'
import { QuoteBlock, VisualDataBlock } from '@starlightcms/js-sdk'

const Quote: FC<VisualDataBlock<QuoteBlock>> = ({ data }) => {
  return (
    <blockquote className="sl-content-block sl-quote">{data.text}</blockquote>
  )
}

export default memo(Quote)
