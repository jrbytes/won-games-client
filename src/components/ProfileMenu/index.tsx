import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'
import Link from 'next/link'
import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <Link href="/profile/me">
      <S.LinkItem isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.LinkItem>
    </Link>

    <Link href="/profile/cards">
      <S.LinkItem
        isActive={activeLink === '/profile/cards'}
        title="My cards"
        data-testid="test-my-card"
      >
        <CreditCard size={24} />
        <span>My cards</span>
      </S.LinkItem>
    </Link>

    <Link href="/profile/orders">
      <S.LinkItem isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </S.LinkItem>
    </Link>

    <Link href="/logout">
      <S.LinkItem>
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.LinkItem>
    </Link>
  </S.Nav>
)

export default ProfileMenu
