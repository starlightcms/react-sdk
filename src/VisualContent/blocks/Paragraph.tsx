import React, { FC } from 'react'
import { ParagraphBlock, VisualDataBlock } from '@starlightcms/js-sdk'

/**
 * VisualContent renderer component that renders `paragraph` type blocks
 * as `<p>` elements.
 *
 * See {@doclink components/VisualContent/#customizing-components | the guide page on the VisualContent component}
 * to learn how to customize block renderer components like this one.
 *
 * @param props VisualDataBlock object. See {@link ParagraphBlock} to learn the
 * type of data this component receives.
 * @group VisualContent Renderers
 */
const Paragraph: FC<VisualDataBlock<ParagraphBlock>> = ({ data }) => {
  return (
    <p
      className="sl-content-block sl-paragraph"
      dangerouslySetInnerHTML={{ __html: data.text }}
    />
  )
}

export default Paragraph
