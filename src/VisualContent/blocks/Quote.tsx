import React, { FC } from 'react'
import { QuoteBlock, VisualDataBlock } from '@starlightcms/js-sdk'

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
    <blockquote className="sl-content-block sl-quote">{data.text}</blockquote>
  )
}

export default Quote
