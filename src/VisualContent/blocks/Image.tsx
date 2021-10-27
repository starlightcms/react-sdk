import React, { FC, memo } from 'react'
import { ImageBlock, VisualDataBlock } from '@starlightcms/js-sdk'

const Image: FC<VisualDataBlock<ImageBlock>> = ({ data }) => {
  return <img className="sl-content-block sl-image" src={data.url} alt="" />
}

export default memo(Image)
