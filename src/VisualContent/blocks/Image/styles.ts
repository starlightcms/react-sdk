import { FigureWrapper } from '../../styles'
import styled from '@emotion/styled'

export const ImageWrapper = styled(FigureWrapper)`
  margin: 1em auto;
`

type ImageProps = {
  width: string
  originalWidth?: string | undefined
}

export const SelectedImage = styled.img<ImageProps>`
  display: block;
  margin: auto;
  object-fit: cover;

  max-width: ${({ width, originalWidth }) => {
    if (originalWidth && width === 'auto') return originalWidth

    switch (width) {
      case 'auto':
        return '100%'
      case 'justify':
      case 'max':
        return 'initial'
    }
  }};

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
