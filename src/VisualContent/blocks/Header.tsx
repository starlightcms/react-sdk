import React, { FC } from 'react'
import { HeaderBlock, VisualDataBlock } from '@starlightcms/js-sdk'

const Header: FC<VisualDataBlock<HeaderBlock>> = ({ data }) => {
  const HeaderComponent = `h${data.level}` as 'h1'

  return (
    <HeaderComponent
      className="sl-content-block sl-header"
      dangerouslySetInnerHTML={{ __html: data.text }}
    />
  )
}

export default Header
