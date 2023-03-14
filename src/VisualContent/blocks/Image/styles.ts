import styled from '@emotion/styled'

export const ImageWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1em auto;

  > a {
    width: 100%;
  }
`

type ImageProps = {
  width: string | null
}

export const SelectedImage = styled.img<ImageProps>`
  display: block;
  border-radius: 5px;
  object-fit: cover;

  max-width: 100%;

  width: ${({ width }) => {
    switch (width) {
      case 'auto':
        return 'initial'
      case 'justify':
      case 'max':
        return '100%'
      default:
        return width
    }
  }};
`
