import Link from 'next/link'

import Heading from '../../components/Heading'
import Logo from '../../components/Logo'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <Logo id="banner" />
        </Link>

        <div>
          <Heading size="huge">All your favorite game in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2020 © Todos os direitos reservados.</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.Content>
      <S.ContentWrapper>
        <Link href="/">
          <Logo color="black" size="large" id="content" />
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Auth
