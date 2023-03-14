import { QuoteBlock, VisualDataBlock } from '@starlightcms/js-sdk'
import { BlockWrapper } from '../styles'
import React, { FC } from 'react'

/**
 * VisualContent renderer component that renders `quote` type blocks
 * as `<blockquote>` elements.
 *
 * See {@doclink components/VisualContent/#customizing-components | the guide page on the VisualContent component}
 * to learn how to customize block renderer components like this one.
 *
 * @param props VisualDataBlock object. See {@link QuoteBlock} to learn the
 * type of data this component receives.
 * @group VisualContent Renderers
 */
const Quote: FC<VisualDataBlock<QuoteBlock>> = ({ data }) => {
  return (
    <BlockWrapper>
      <blockquote className="sl-content-block sl-quote">{data.text}</blockquote>
    </BlockWrapper>
  )
}

export default Quote
