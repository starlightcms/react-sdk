import React, { FC } from 'react'
import { HTMLBlock, VisualDataBlock } from '@starlightcms/js-sdk'

/**
 * VisualContent renderer component that renders `raw` type blocks
 * as inline HTML inside a `div` element.
 *
 * See {@doclink components/VisualContent/#customizing-components | the guide page on the VisualContent component}
 * to learn how to customize block renderer components like this one.
 *
 * @param props VisualDataBlock object. See {@link HTMLBlock} to learn the
 * type of data this component receives.
 * @group VisualContent Renderers
 */
const HTML: FC<VisualDataBlock<HTMLBlock>> = ({ data }) => {
  return (
    <div
      className="sl-content-block sl-html test"
      dangerouslySetInnerHTML={{ __html: data.html }}
    />
  )
}

export default HTML
