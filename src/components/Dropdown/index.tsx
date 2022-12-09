import { useState, ReactNode } from 'react'

import * as S from './styles'

export type DropdownProps = {
  title: ReactNode
  children: ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false)

  return (
    <S.Wrapper isOpenDropdown={isOpenDropdown}>
      <S.Title onClick={() => setIsOpenDropdown(!isOpenDropdown)}>
        {title}
      </S.Title>

      <S.Content aria-hidden={!isOpenDropdown}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown
