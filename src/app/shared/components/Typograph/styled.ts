import styled from 'styled-components'

interface TittleProps {
  color?: 'title' | 'subtitle'
  size?: 'l' | 'm' | 's'
  weight?: string | number
}

interface RegularProps {
  color?: 'text' | 'label' | 'span' | 'subtitle'
  size?: 'm' | 's'
  weight?: string | number
}

export const TittleText = styled.h1<TittleProps>`
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-title-${size ?? 'm'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-weight: ${({ weight }) => weight ?? 800};
  line-height: 160%;
`

export const RegularText = styled.p<RegularProps>`
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-text-${size ?? 'm'}`]};
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-weight: ${({ weight }) => weight ?? 400};
  line-height: 160%;
`
