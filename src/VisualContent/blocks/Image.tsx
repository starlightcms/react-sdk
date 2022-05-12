import React, { FC, useEffect, useState } from 'react'
import { ImageBlock, VisualDataBlock } from '@starlightcms/js-sdk'

type ImageOptions = {
  sizes?: string
}

const Image: FC<VisualDataBlock<ImageBlock> & ImageOptions> = ({
  data,
  sizes = '(max-width: 480px) 90vw, 70vw',
}) => {
  const { url, files, alt = '', caption, href } = data
  const [target, setTarget] = useState('_self')
  const [srcSet, setSrcSet] = useState('')

  useEffect(() => {
    if (!href) return

    setTarget(
      new URL(href).origin === window.location.origin ? '_self' : '_blank'
    )
  }, [href])

  useEffect(() => {
    if (!files || !files.length) return

    setSrcSet(files.map((file) => `${file.url} ${file.width}w`).join(', '))
  }, [files])

  return (
    <figure>
      {href ? (
        <a href={href} target={target}>
          <img
            className="sl-content-block sl-image"
            src={url}
            alt={alt}
            srcSet={srcSet}
            sizes={srcSet ? sizes : undefined}
          />
        </a>
      ) : (
        <img
          className="sl-content-block sl-image"
          src={url}
          alt={alt}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
        />
      )}
      {caption && <figcaption dangerouslySetInnerHTML={{ __html: caption }} />}
    </figure>
  )
}

export default Image
