import React, { FC, useMemo, useId } from 'react'
import { ParagraphBlock } from '@starlightcms/js-sdk'
import { BlockComponentProps } from '../types'

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
const Paragraph: FC<BlockComponentProps<ParagraphBlock>> = ({
  data,
  options,
}) => {
  const blockId = useId()
  const { alignment, isStretched, text } = data
  const { openExternalLinksInNewTab } = options

  const baseClasses = `sl-content-block sl-paragraph 
        ${alignment ? `sl-alignment-${alignment}` : ''}
        ${isStretched ? 'sl-stretched' : ''}`

  const parsedHtml = useMemo(() => {
    if (!text) {
      // Empty text, will be rendered as a line break below.
      return null
    }

    if (!openExternalLinksInNewTab) {
      // Leave all anchors as they are.
      return text
    }

    // openExternalLinksInNewTab is true, search for
    // anchor elements and set their target accordingly.

    if (typeof document === 'undefined') {
      // This is rendering at the server side, and we can't use
      // `document.createElement` here. Leave all anchors as they are,
      // we'll update them at the browser using an inline script (see below).
      return text
    }

    const root = document.createElement('p')
    root.innerHTML = text

    const anchors = root.getElementsByTagName('a')

    for (const anchor of anchors) {
      const href = anchor.getAttribute('href')

      if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
        anchor.target = '_blank'
      }
    }

    return root.innerHTML
  }, [text, openExternalLinksInNewTab])

  if (!parsedHtml)
    return (
      <div className={`${baseClasses} empty`} aria-hidden>
        <p>
          <br />
        </p>
      </div>
    )

  return (
    <div className={baseClasses}>
      <p
        data-block-id={blockId}
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: parsedHtml }}
      />
      {openExternalLinksInNewTab && (
        // This inline script does the same thing as the useMemo above,
        // but since it runs on page load before React initializes,
        // it avoids a hydration mismatch since we don't add the
        // target property at the server side.
        <script
          type={
            typeof window === 'undefined' ? 'text/javascript' : 'text/plain'
          }
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `var b=document.querySelector('[data-block-id=${blockId}]');if(b){var as=b.getElementsByTagName('a');for(var a of as){var h=a.getAttribute('href');if(h&&(h.startsWith('http://')||h.startsWith('https://'))){a.target='_blank'}}}`,
          }}
        />
      )}
    </div>
  )
}

export default Paragraph
