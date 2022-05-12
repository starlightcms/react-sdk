import React, { FC } from 'react'
import { HTMLBlock, VisualDataBlock } from '@starlightcms/js-sdk'

const HTML: FC<VisualDataBlock<HTMLBlock>> = ({ data }) => {
  return (
    <div
      className="sl-content-block sl-html test"
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  )
}

export default HTML
