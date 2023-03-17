import { ImageBlock, VisualDataBlock } from '@starlightcms/js-sdk'
import React, { FC, useEffect, useState } from 'react'
import { ImageWrapper, SelectedImage } from './styles'
import { BlockWrapper } from '../../styles'

/**
 * Type used by {@link ImageComponent} to accept a `sizes` prop.
 */
export type ImageOptions = {
  sizes?: string
}

/**
 * VisualContent renderer component that renders `image` type blocks
 * as a responsive image along with its caption (if defined). Optionally
 * wraps the image in an anchor if a link is defined in the content.
 *
 * See {@doclink components/VisualContent/#customizing-components | the guide page on the VisualContent component}
 * to learn how to customize block renderer components like this one.
 *
 * This component also supports an optional `sizes` prop to provide better image
 * responsiveness, see {@doclink components/VisualContent/#responsive-images | the guide page on responsive images}
 * to learn more.
 *
 * @param props VisualDataBlock object. See {@link ImageBlock} to learn the
 * type of data this component receives. Also accepts
 * an optional `sizes` string prop.
 * @group VisualContent Renderers
 */
const Image: FC<VisualDataBlock<ImageBlock> & ImageOptions> = ({
  data,
  sizes = '(max-width: 480px) 90vw, 70vw',
}) => {
  const { url, files, alt = '', caption, width, href } = data
  const [target, setTarget] = useState('_self')
  const [srcSet, setSrcSet] = useState('')

  const widthType = ['auto', 'justify', 'max'].includes(width) ? width : 'fixed'

  useEffect(() => {
    if (!href) return

    setTarget(
      new URL(href).origin === window.location.origin ? '_self' : '_blank'
    )
  }, [href])

  // useEffect(() => {
  //   if (!files || !files.length) return

  //   setSrcSet(files.map((file) => `${file.url} ${file.width}w`).join(', '))
  // }, [files])

  return (
    <BlockWrapper className={`sl-content-block sl-image sl-width-${widthType}`}>
      <ImageWrapper>
        {href ? (
          <a href={href} target={target}>
            <SelectedImage
              width={width}
              src={url}
              alt={alt}
              srcSet={srcSet}
              sizes={srcSet ? sizes : undefined}
            />
          </a>
        ) : (
          <SelectedImage
            width={width}
            src={url}
            alt={alt}
            srcSet={srcSet}
            sizes={srcSet ? sizes : undefined}
          />
        )}
        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </ImageWrapper>
    </BlockWrapper>
  )
}

export default Image
