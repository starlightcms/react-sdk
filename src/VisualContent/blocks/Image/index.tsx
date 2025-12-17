import { ImageBlock, VisualDataBlock } from '@starlightcms/js-sdk'
import React, { FC, useEffect, useMemo, useState } from 'react'

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
  const {
    url,
    alt = '',
    files,
    caption,
    width,
    href,
    responsive,
    alignment,
    isStretched,
  } = data

  const widthType = ['auto', 'justify', 'max'].includes(width) ? width : 'fixed'

  const [target, setTarget] = useState('_self')
  const [originalWidth, setOriginalWidth] = useState<string | undefined>(
    undefined
  )

  const calculatedWidth = useMemo(() => {
    switch (width) {
      case 'auto':
        return 'auto'
      case 'justify':
      case 'max':
        return '100%'
      default:
        return width
    }
  }, [width])

  const calculatedMaxWidth = useMemo(() => {
    if (responsive && originalWidth && width === 'auto') return originalWidth

    switch (width) {
      case 'auto':
        return '100%'
      case 'justify':
      case 'max':
        return 'initial'
      default:
        return originalWidth
    }
  }, [width, responsive, originalWidth])

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
    <div
      className={`sl-content-block sl-image 
      ${alignment ? `sl-alignment-${alignment}` : ''} 
      ${isStretched || widthType === 'max' ? 'sl-stretched' : ''}
      `}
    >
      <figure
        className={`sl-figure sl-image--width-${widthType}`}
        style={{
          width: calculatedWidth,
          maxWidth: calculatedMaxWidth,
        }}
      >
        {href ? (
          <a href={href} target={target}>
            <img
              className="sl-image__img"
              src={url}
              alt={alt}
              srcSet={srcSet}
              sizes={responsive ? sizes : undefined}
            />
          </a>
        ) : (
          <img
            className="sl-image__img"
            src={url}
            alt={alt}
            srcSet={srcSet}
            sizes={responsive ? sizes : undefined}
          />
        )}
        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </figure>
    </div>
  )
}

export default Image
