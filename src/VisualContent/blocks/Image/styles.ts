import styled from '@emotion/styled'

export const ImageWrapper = styled.figure`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  > a {
    width: 100%;
  }
`

type ImageProps = {
  width: string | null
}

export const SelectedImage = styled.img<ImageProps>`
  border-radius: 5px;
  object-fit: cover;

  max-width: ${({ width }) => (width === 'auto' ? '100%' : 'initial')};

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
