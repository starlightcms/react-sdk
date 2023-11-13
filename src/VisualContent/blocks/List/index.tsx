import { ListBlock, ListItem, VisualDataBlock } from '@starlightcms/js-sdk'
import React, { FC } from 'react'

type SubListProps = {
  item: ListItem
  Wrapper: 'ul' | 'ol'
}

const SubList: FC<SubListProps> = ({ item, Wrapper }) => {
  return (
    <li>
      <span dangerouslySetInnerHTML={{ __html: item.content }} />
      {item.items && item.items.length ? (
        <Wrapper>
          {item.items &&
            item.items.map((subItem, index) => (
              <SubList key={index} item={subItem} Wrapper={Wrapper} />
            ))}
        </Wrapper>
      ) : null}
    </li>
  )
}

/**
 * VisualContent renderer component that renders `list` type blocks
 * as `<ul>` or `<ol>` elements, depending on the list style.
 *
 * See {@doclink components/VisualContent/#customizing-components | the guide page on the VisualContent component}
 * to learn how to customize block renderer components like this one.
 *
 * @param props VisualDataBlock object. See {@link ListBlock} to learn the
 * type of data this component receives.
 * @group VisualContent Renderers
 */
const List: FC<VisualDataBlock<ListBlock>> = ({ data }) => {
  const ListWrapper = data.style === 'ordered' ? 'ol' : 'ul'

  return (
    <div className="sl-content-block sl-list">
      <ListWrapper className="sl-list__root">
        {data.items.map((item, index) => (
          <SubList key={index} item={item} Wrapper={ListWrapper} />
        ))}
      </ListWrapper>
    </div>
  )
}

export default List
