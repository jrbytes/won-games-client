import { initializeApollo } from 'utils/apollo'
import { GetHomeQuery } from 'graphql/generated/graphql'
import { GET_HOME } from 'graphql/queries/home'

import Home, { HomeTemplateProps } from 'templates/Home'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return (
    <>
      <Home {...props} />
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GetHomeQuery>({ query: GET_HOME })

  return {
    props: {
      revalidate: 60,
      banners: data.banners!.map((banner) => ({
        img: `http://localhost:1337${banner!.image?.url}`,
        title: banner!.title,
        subtitle: banner!.subtitle,
        buttonLabel: banner!.button?.label,
        buttonLink: banner!.button?.link,
        ...(banner!.ribbon && {
          ribbon: banner!.ribbon.text,
          ribbonColor: banner!.ribbon.color,
          ribbonSize:
            banner!.ribbon.size === null || banner!.ribbon.size === 'normal'
              ? 'normal'
              : 'small'
        })
      })),
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock
    }
  }
}
