import { HTMLBlock, VisualDataBlock } from '@starlightcms/js-sdk'
import React, { FC } from 'react'

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
    <div className="sl-content-block sl-html">
      <div
        className="sl-html__root"
        dangerouslySetInnerHTML={{ __html: data.html }}
      />
    </div>
  )
}

export default HTML
