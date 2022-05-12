import React, { FC } from 'react'
import { ListBlock, ListItem, VisualDataBlock } from '@starlightcms/js-sdk'

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

const List: FC<VisualDataBlock<ListBlock>> = ({ data }) => {
  const ListWrapper = data.style === 'ordered' ? 'ol' : 'ul'

  return (
    <ListWrapper className="sl-content-block sl-list sl-list__root">
      {data.items.map((item, index) => (
        <SubList key={index} item={item} Wrapper={ListWrapper} />
      ))}
    </ListWrapper>
  )
}

export default List
