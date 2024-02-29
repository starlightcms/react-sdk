import { VideoBlock, VisualDataBlock } from '@starlightcms/js-sdk'
import React, { FC } from 'react'

/**
 * VisualContent renderer component that renders `video` type blocks
 * as a responsive video along with its caption (if defined).
 *
 * See {@doclink components/VisualContent/#customizing-components | the guide page on the VisualContent component}
 * to learn how to customize block renderer components like this one.
 *
 * @param props VisualDataBlock object. See {@link VideoBlock} to learn the
 * type of data this component receives.
 * @group VisualContent Renderers
 */
const Video: FC<VisualDataBlock<VideoBlock>> = ({ data }) => {
  const { html, width, caption, alignment } = data

  const widthType = ['auto', 'justify', 'max'].includes(width) ? width : 'fixed'

  return (
    <div
      className={`sl-content-block sl-video sl-width-${widthType} ${
        alignment ? `sl-alignment-${alignment}` : ''
      }`}
    >
      <figure className="sl-figure">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ maxWidth: widthType === 'fixed' ? `${width}` : undefined }}
        />

        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </figure>
    </div>
  )
}

export default Video
