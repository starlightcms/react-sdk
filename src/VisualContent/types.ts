import { ComponentType } from 'react'
import {
  HeaderBlock,
  ImageBlock,
  ParagraphBlock,
  QuoteBlock,
  VisualData,
  VisualDataBlock,
  BlockType,
  HTMLBlock,
  ListBlock,
  VideoBlock,
  BlockData,
} from '@starlightcms/js-sdk'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Implements<T, U extends T> = Record<string, unknown>

export type VisualContentOptions = {
  openExternalLinksInNewTab: boolean
}

export type BlockComponentProps<D extends BlockData = BlockData> =
  VisualDataBlock<D> & {
    options: VisualContentOptions
  }

export interface BlockComponents
  extends Implements<Record<BlockType, unknown>, BlockComponents> {
  paragraph: ComponentType<BlockComponentProps<ParagraphBlock>>
  header: ComponentType<BlockComponentProps<HeaderBlock>>
  quote: ComponentType<BlockComponentProps<QuoteBlock>>
  image: ComponentType<BlockComponentProps<ImageBlock>>
  raw: ComponentType<BlockComponentProps<HTMLBlock>>
  list: ComponentType<BlockComponentProps<ListBlock>>
  video: ComponentType<BlockComponentProps<VideoBlock>>
}

/**
 * Props accepted by the {@link VisualContent} component.
 * @group VisualContent
 */
export interface VisualContentProps {
  /**
   * The content to render. It should be the object returned by
   * Starlight on a Visual Editor field. Required.
   */
  content?: VisualData
  /**
   * An optional object of React components. You can pass any
   * number of replacement components that will render blocks of a given type.
   */
  components?: Partial<BlockComponents>
  /**
   * If true, only a small portion of the content will be rendered,
   * and block types other than text paragraphs will be ignored. Defaults to false.
   */
  excerpt?: boolean
  /**
   * Defines the maximum number of words to render when
   * excerpt is true. Defaults to 40.
   */
  excerptLength?: number
  /**
   * If true, links within Paragraph blocks starting with `http` or `https`
   * will always open in a new tab. Defaults to false.
   */
  openExternalLinksInNewTab?: boolean
}
