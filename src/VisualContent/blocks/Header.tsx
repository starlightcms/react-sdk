import { HeaderBlock, VisualDataBlock } from '@starlightcms/js-sdk'
import { BlockWrapper } from '../styles'
import React from 'react'

/**
 * VisualContent renderer component that renders `header` type blocks
 * as HTML heading elements, like `<h1>`, `<h2>`, and so on.
 *
 * See {@doclink components/VisualContent/#customizing-components | the guide page on the VisualContent component}
 * to learn how to customize block renderer components like this one.
 *
 * @param props VisualDataBlock object. See {@link HeaderBlock} to learn the
 * type of data this component receives.
 * @group VisualContent Renderers
 */
const Header = ({ data }: VisualDataBlock<HeaderBlock>): JSX.Element => {
  const HeaderComponent = `h${data.level}` as 'h1'

  return (
    <BlockWrapper>
      <HeaderComponent
        className="sl-content-block sl-header"
        dangerouslySetInnerHTML={{ __html: data.text }}
      />
    </BlockWrapper>
  )
}

export default Header
