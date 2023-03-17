import styled from '@emotion/styled'

export const ListWrapper = styled.ul`
  list-style: none;
  padding-left: 1em;

  > li {
    margin: 0.5em 0;

    &::before {
      content: '•';
      margin-right: 0.5em;
    }
  }
`
