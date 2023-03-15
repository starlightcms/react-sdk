import { FigureBlockWrapper } from '../../styles'
import styled from '@emotion/styled'

type VideoWrapperProps = {
  width: string | null
}

export const VideoWrapper = styled(FigureBlockWrapper)<VideoWrapperProps>`
  margin: 0;

  > div {
    > * {
      max-width: 100%;
    }

    > iframe {
      aspect-ratio: 16/9;

      border-radius: 5px;
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
