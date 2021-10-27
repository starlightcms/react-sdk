import React, { createElement, FC, memo } from 'react'
import { HeaderBlock, VisualDataBlock } from '@starlightcms/js-sdk'

const Header: FC<VisualDataBlock<HeaderBlock>> = ({ data }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const HeaderComponent: FC<any> = ({ children, ...props }) =>
    createElement(`h${data.level}`, props, children)

  return (
    <HeaderComponent className="sl-content-block sl-header">
      {data.text}
    </HeaderComponent>
  )
}

export default memo(Header)
