import { ImageBlock, VisualDataBlock } from '@starlightcms/js-sdk'
import React, { FC, useEffect, useMemo, useState } from 'react'
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
  const { url, alt = '', files, caption, width, href, responsive } = data

  const widthType = ['auto', 'justify', 'max'].includes(width) ? width : 'fixed'

  const [target, setTarget] = useState('_self')
  const [originalWidth, setOriginalWidth] = useState<string | undefined>(
    undefined
  )

  const srcSet = useMemo(() => {
    return data.files.map((file) => `${file.url} ${file.width}w`).join(', ')
  }, [data])

  useEffect(() => {
    if (!href) return

    setTarget(
      new URL(href).origin === window.location.origin ? '_self' : '_blank'
    )
  }, [href])

  useEffect(() => {
    const optimizedFile = files.find((f) => f.variation === 'optimized')
    setOriginalWidth(
      optimizedFile ? optimizedFile.width.toString() + 'px' : undefined
    )
  }, [])

  return (
    <BlockWrapper
      className={`sl-content-block sl-image sl-width-${widthType}`}
      data-testid="sl-visual-content-image-block"
    >
      <ImageWrapper>
        {href ? (
          <a href={href} target={target}>
            <SelectedImage
              width={width}
              src={url}
              alt={alt}
              srcSet={srcSet}
              sizes={responsive ? sizes : undefined}
              originalWidth={data.responsive ? originalWidth : undefined}
            />
          </a>
        ) : (
          <SelectedImage
            width={width}
            src={url}
            alt={alt}
            srcSet={srcSet}
            sizes={responsive ? sizes : undefined}
            originalWidth={data.responsive ? originalWidth : undefined}
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
