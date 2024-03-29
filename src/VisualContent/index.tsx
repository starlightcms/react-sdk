import { VisualDataBlock, ParagraphBlock } from '@starlightcms/js-sdk'
import { BlockComponents, VisualContentProps } from './types'
import Image, { ImageOptions } from './blocks/Image'
import Paragraph from './blocks/Paragraph'
import { OuterWrapper } from './styles'
import React, { useMemo } from 'react'
import Header from './blocks/Header'
import Quote from './blocks/Quote'
import HTML from './blocks/HTML'
import List from './blocks/List'
import Video from './blocks/Video'

const defaultComponents: BlockComponents = {
  paragraph: Paragraph,
  header: Header,
  quote: Quote,
  image: Image,
  raw: HTML,
  list: List,
  video: Video,
}

/**
 * Renders HTML content from data returned by a Visual Editor field on Starlight.
 *
 * The only required prop is `content`, which is the data returned by a Visual
 * Editor field. Additionally, you can provide custom components to render each
 * data block type.
 *
 * You can also pass the `excerpt` boolean prop to only render a portion of the
 * content, which is useful to summarize the content in lists.
 *
 * To learn how to customize the rendered content, take a look at the
 * [Customizing the output](#) guide page.
 *
 * @example Requesting an entry and rendering its content.
 *
 * Assume we created a "Posts" model with a slug of `posts`, and placed a Visual
 * Editor field with a key of `post_content` on it.
 *
 * ```jsx
 * import Starlight, { VisualContent } from '@starlightcms/react-sdk'
 *
 * const EntryComponent = ({ slug }) => {
 *   const [entry, setEntry] = useState(null)
 *
 *   // This is just an example, you could fetch
 *   // the entry any way you want.
 *   useEffect(async () => {
 *     const response = await Starlight.posts.entries.get(slug)
 *
 *     setEntry(response.data)
 *   }, [ slug ])
 *
 *   // After fetching, content will be on the `entry.data.post_content` property.
 *   return (
 *     entry ? (
 *        <article>
 *          <h1>{entry.title}</h1>
 *          <VisualContent content={entry.data.post_content} />
 *        </article>
 *     ) : (
 *       <div>Loading...</div>
 *     )
 *   )
 * }
 *
 * ```
 *
 * @param props Component props. See {@link VisualContentProps} to see the
 * available options.
 * @group VisualContent
 */
export const VisualContent = ({
  content,
  components = {},
  excerpt = false,
  excerptLength = 40,
}: VisualContentProps): JSX.Element => {
  const componentList = useMemo(
    () => ({ ...defaultComponents, ...components }),
    [components]
  )

  if (!content) {
    return null as unknown as JSX.Element
  }

  if (excerpt) {
    const block = content.blocks.find((block) => block.type === 'paragraph') as
      | VisualDataBlock<ParagraphBlock>
      | undefined

    if (!block || !block.data.text) return null as unknown as JSX.Element

    const text = block.data.text.split(' ')
    const excerptText =
      text.length > excerptLength
        ? text.splice(0, excerptLength).join(' ') + '...'
        : text.join(' ')
    const Component = componentList.paragraph

    return (
      <Component
        key={block.id}
        id={block.id}
        type={block.type}
        data={{ text: excerptText }}
      />
    )
  }
  return (
    <OuterWrapper className="sl-visual-content">
      {content.blocks.map((block) => {
        const Component = componentList[block.type]

        if (!Component) return null

        return (
          <Component
            key={block.id}
            id={block.id}
            type={block.type}
            data={block.data as never}
          />
        )
      })}
    </OuterWrapper>
  )
}

export {
  Paragraph as ParagraphComponent,
  Header as HeaderComponent,
  Quote as QuoteComponent,
  Image as ImageComponent,
  HTML as HTMLComponent,
  List as ListComponent,
  Video as VideoComponent,
}

export type { VisualContentProps, ImageOptions }
