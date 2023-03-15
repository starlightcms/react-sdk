import { FigureWrapper } from '../../styles'
import styled from '@emotion/styled'

export const ImageWrapper = styled(FigureWrapper)`
  margin: 1em auto;
`

type ImageProps = {
  width: string | null
}

export const SelectedImage = styled.img<ImageProps>`
  display: block;
  margin: auto;
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
