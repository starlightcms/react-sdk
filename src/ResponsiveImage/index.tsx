import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react'
import { MediaObject } from '@starlightcms/js-sdk'

const transparentImage =
  'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='

export const GlobalLazyloadStyles = (): ReactNode => {
  return (
    <noscript>
      <style>{'img.sl-lazyload{display: none;}'}</style>
    </noscript>
  )
}

type ResponsiveImageProps = {
  className?: string
  image: MediaObject | string
  sizes?: string
  alt?: string
  variation?: string
  background?: string
}

export const ResponsiveImage = ({
  className = '',
  image,
  sizes = '',
  alt = typeof image === 'string' ? '' : image.alt,
  variation = 'optimized',
  background = '',
}: ResponsiveImageProps): JSX.Element => {
  const imageRef = useRef<HTMLImageElement>(null)

  // When true, the image may load normally
  const [canLoad, setCanLoad] = useState(false)

  // When true, the image has been successfully loaded by the browser
  const [hasLoaded, setHasLoaded] = useState(false)

  // Get the optimized variation if available
  const source = useMemo(() => {
    // If the given image was a string, simply return it
    if (typeof image === 'string' || !image.files) return

    const chosenVariation = image.files.find(
      (file) => file.variation === variation
    )

    return chosenVariation
      ? chosenVariation
      : image.files.find((file) => file.variation === 'original')
  }, [image, variation])

  // Create a srcset
  const sourceSet = useMemo(() => {
    if (!source) return

    // source is only defined if image is a MediaObject, so we assert it as one
    const img = image as MediaObject

    const sets = []
    const large = img.files.find((file) => file.variation === 'large')
    const medium = img.files.find((file) => file.variation === 'medium')
    const thumbnail = img.files.find((file) => file.variation === 'thumbnail')

    if (thumbnail)
      sets.push(`${encodeURI(thumbnail.path)} ${thumbnail.meta?.width}w`)
    if (medium) sets.push(`${encodeURI(medium.path)} 600w`)
    if (large) sets.push(`${encodeURI(large.path)} 1200w`)
    sets.push(`${encodeURI(source.path)} ${source.meta?.width}w`)

    return sets.join(',')
  }, [source, image])

  const imageStyle = useMemo(() => {
    return {
      backgroundColor:
        background || hasLoaded || typeof image === 'string'
          ? 'transparent'
          : `#${source?.background_color ?? 'transparent'}`,
    }
  }, [background, source, hasLoaded, image])

  useEffect(() => {
    let ref: HTMLImageElement | null = null
    const observer = new IntersectionObserver((entries, observer) => {
      if (entries[0].intersectionRatio > 0) {
        // Image entered the viewport, set it as loadable
        setCanLoad(true)

        // Stop observing the image
        observer.unobserve(ref as HTMLImageElement)
      }
    })

    if (imageRef.current) {
      ref = imageRef.current
      observer.observe(ref)
    }

    const loadHandler = () => {
      // After loading the image, the "hasLoaded" flag is used to hide the background color
      setHasLoaded(true)
    }

    ref?.addEventListener('load', loadHandler)

    return () => {
      if (ref) {
        observer.unobserve(ref)
        ref.removeEventListener('load', loadHandler)
      }
    }
  }, [source])

  return (
    <>
      <img
        ref={imageRef}
        className={'sl-lazyload ' + className}
        style={imageStyle}
        src={canLoad ? source?.path || (image as string) : transparentImage}
        srcSet={canLoad ? (sourceSet ? sourceSet : undefined) : undefined}
        sizes={canLoad ? (sourceSet ? sizes : undefined) : undefined}
        alt={alt}
      />
      <noscript>
        <img src={(source && source.path) || (image as string)} alt={alt} />
      </noscript>
    </>
  )
}
