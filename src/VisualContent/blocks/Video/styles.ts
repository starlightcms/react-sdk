import { FigureWrapper } from '../../styles'
import styled from '@emotion/styled'

type VideoWrapperProps = {
  width: string | null
}

export const VideoWrapper = styled(FigureWrapper)<VideoWrapperProps>`
  margin: 0;

  > div {
    > * {
      max-width: 100%;
    }

    > iframe {
      display: block;
      margin: auto;

      aspect-ratio: 16/9;

      border: none;

      background-color: transparent;

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
    }
  }
`
