import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <S.LinkItem href="/profile/me" isActive={activeLink === '/profile/me'} title="My profile">
      <AccountCircle size={24} />
      <span>My profile</span>
    </S.LinkItem>

    <S.LinkItem href="/profile/cards" isActive={activeLink === '/profile/cards'} title="My cards">
      <CreditCard size={24} />
      <span>My cards</span>
    </S.LinkItem>

    <S.LinkItem href="/profile/orders" isActive={activeLink === '/profile/orders'} title="My orders">
      <FormatListBulleted size={24} />
      <span>My orders</span>
    </S.LinkItem>

    <S.LinkItem href="/logout">
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.LinkItem>
  </S.Nav>
)

export default ProfileMenu
