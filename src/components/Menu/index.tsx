import { useState } from 'react'
import Link from 'next/link'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import UserDropdown from 'components/UserDropdown'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <Logo hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart">
              <CartIcon />
            </Link>
          </MediaMatch>
        </S.IconWrapper>

        <MediaMatch greaterThan="medium">
          {!username ? (
            <Button href="/sign-in" as="a">
              Sign in
            </Button>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="/profile/me">My profile</S.MenuLink>
              <S.MenuLink href="/profile/wishlist">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button fullWidth size="large" as="a" href="/sign-in">
              Sign In
            </Button>
            <span>or</span>
            <S.LinkCreateAccount href="/sign-up" title="Sign Up">
              Sign Up
            </S.LinkCreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}

export default Menu
