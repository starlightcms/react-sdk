import { ParagraphBlock, VisualDataBlock } from '@starlightcms/js-sdk'
import React, { FC } from 'react'

/**
 * VisualContent renderer component that renders `paragraph` type blocks
 * as `<p>` elements. Empty paragraph blocks (generally used to break
 * lines) will have an `empty` class added to them.
 *
 * See {@doclink components/VisualContent/#customizing-components | the guide page on the VisualContent component}
 * to learn how to customize block renderer components like this one.
 *
 * @param props VisualDataBlock object. See {@link ParagraphBlock} to learn the
 * type of data this component receives.
 * @group VisualContent Renderers
 */
const Paragraph: FC<VisualDataBlock<ParagraphBlock>> = ({ data }) => {
  const { alignment, isStretched } = data

  const baseClasses = `sl-content-block sl-paragraph 
        ${alignment ? `sl-alignment-${alignment}` : ''}
        ${isStretched ? 'sl-stretched' : ''}`

  if (!data.text)
    return (
      <div className={`${baseClasses} empty`} aria-hidden>
        <p>
          <br />
        </p>
      </div>
    )

  return (
    <div className={baseClasses}>
      <p dangerouslySetInnerHTML={{ __html: data.text }} />
    </div>
  )
}

export default Paragraph
