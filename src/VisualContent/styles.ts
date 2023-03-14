import styled from '@emotion/styled'

export const OuterWrapper = styled.div`
  .sl__color {
    padding: 2px 0;
    border-radius: 4px;

    &__bg {
      &--red {
        background-color: rgb(253, 235, 236);
      }
      &--pink {
        background-color: rgb(253, 235, 236);
      }
      &--purple {
        background-color: rgb(244, 240, 247);
      }
      &--blue {
        background-color: rgb(231, 243, 248);
      }
      &--green {
        background-color: rgb(237, 243, 236);
      }
      &--yellow {
        background-color: rgb(251, 243, 219);
      }
      &--orange {
        background-color: rgb(251, 236, 221);
      }
      &--brown {
        background-color: rgb(244, 238, 238);
      }
      &--gray {
        background-color: rgb(241, 241, 239);
      }
    }

    &__text {
      &--red {
        color: rgb(212, 76, 71);
      }
      &--pink {
        color: rgb(193, 76, 138);
      }
      &--purple {
        color: rgb(144, 101, 176);
      }
      &--blue {
        color: rgb(51, 126, 169);
      }
      &--green {
        color: rgb(68, 131, 97);
      }
      &--yellow {
        color: rgb(203, 145, 47);
      }
      &--orange {
        color: rgb(217, 115, 13);
      }
      &--brown {
        color: rgb(159, 107, 83);
      }
      &--gray {
        color: rgb(120, 119, 116);
      }
    }
  }
`

type BlockWrapperProps = {
  isStretched?: boolean | null
}

export const BlockWrapper = styled.div<BlockWrapperProps>`
  margin: auto;
  ${({ isStretched }) => isStretched && 'max-width: 100%;'}
`
