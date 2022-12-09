import { ChevronDown } from '@styled-icons/boxicons-regular'
import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Dropdown from 'components/Dropdown'

import * as S from './styles'

export type UserDropdownProps = {
  username?: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <S.LinkItem href="/profile/me">
        <AccountCircle /> <span>My profile</span>{' '}
      </S.LinkItem>
      <S.LinkItem href="/wishlist">
        <FavoriteBorder /> <span>Wishlist</span>{' '}
      </S.LinkItem>
      <S.LinkItem href="/logout">
        <ExitToApp /> <span>Sign out</span>{' '}
      </S.LinkItem>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
