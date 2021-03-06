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
} from '@starlightcms/js-sdk'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Implements<T, U extends T> = Record<string, unknown>

export interface BlockComponents
  extends Implements<Record<BlockType, unknown>, BlockComponents> {
  paragraph: ComponentType<VisualDataBlock<ParagraphBlock>>
  header: ComponentType<VisualDataBlock<HeaderBlock>>
  quote: ComponentType<VisualDataBlock<QuoteBlock>>
  image: ComponentType<VisualDataBlock<ImageBlock>>
  raw: ComponentType<VisualDataBlock<HTMLBlock>>
  list: ComponentType<VisualDataBlock<ListBlock>>
}

export type VisualContentProps = {
  content?: VisualData
  components?: Partial<BlockComponents>
}
