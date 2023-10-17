import { VideoBlock, VisualDataBlock } from '@starlightcms/js-sdk'
import { BlockWrapper } from '../../styles'
import { VideoWrapper } from './styles'
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
  const { html, width, caption } = data

  const widthType = ['auto', 'justify', 'max'].includes(width) ? width : 'fixed'

  return (
    <BlockWrapper
      className={`sl-content-block sl-video sl-width-${widthType}`}
      data-testid="sl-visual-content-video-block"
    >
      <VideoWrapper width={width}>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </VideoWrapper>
    </BlockWrapper>
  )
}

export default Video
