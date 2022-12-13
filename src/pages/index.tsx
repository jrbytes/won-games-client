import { initializeApollo } from 'utils/apollo'
import { GetHomeQuery } from 'graphql/generated/graphql'
import { GET_HOME } from 'graphql/queries/home'

import Home, { HomeTemplateProps } from 'templates/Home'

export default function Index(props: HomeTemplateProps) {
  return (
    <>
      <Home {...props} />
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<GetHomeQuery>({ query: GET_HOME })

  return {
    props: {
      revalidate: 60,
      banners: banners!.map((banner) => ({
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
      newGamesTitle: sections!.newGames!.title,
      newGames: newGames!.map((game) => ({
        slug: game!.slug,
        title: game!.name,
        developer: game!.developers
          ?.map((developer) => developer!.name)
          .join(', '),
        img: `http://0.0.0.0:1337${game!.cover?.url}`,
        price: game!.price
      })),
      mostPopularHighlight: {
        title: sections!.popularGames!.highlight?.title,
        subtitle: sections!.popularGames!.highlight?.subtitle,
        backgroundImage: `http://0.0.0.0:1337${
          sections!.popularGames!.highlight?.background?.url
        }`,
        floatImage: `http://0.0.0.0:1337${
          sections!.popularGames!.highlight?.floatImage?.url
        }`,
        buttonLabel: sections!.popularGames!.highlight?.buttonLabel,
        buttonLink: sections!.popularGames!.highlight?.buttonLink,
        alignment: sections!.popularGames!.highlight?.alignment
      },
      mostPopularGamesTitle: sections!.popularGames!.title,
      mostPopularGames: sections!.popularGames!.games!.map((game) => ({
        title: game!.name,
        slug: game!.slug,
        developer: game!.developers
          ?.map((developer) => developer!.name)
          .join(', '),
        img: `http://0.0.0.0:1337${game!.cover?.url}`,
        price: game!.price
      })),
      upcomingGamesTitle: sections!.upcomingGames!.title,
      upcomingGames: upcomingGames!.map((upcomingGame) => ({
        slug: upcomingGame!.slug,
        title: upcomingGame!.name,
        developer: upcomingGame!.developers
          ?.map((developer) => developer!.name)
          .join(', '),
        img: `http://0.0.0.0:1337${upcomingGame!.cover?.url}`,
        price: upcomingGame!.price
      })),
      upcomingHighlight: {
        title: sections!.upcomingGames!.highlight?.title,
        subtitle: sections!.upcomingGames!.highlight?.subtitle,
        backgroundImage: `http://0.0.0.0:1337${
          sections!.upcomingGames!.highlight?.background?.url
        }`,
        floatImage: `http://0.0.0.0:1337${
          sections!.upcomingGames!.highlight?.floatImage?.url
        }`,
        buttonLabel: sections!.upcomingGames!.highlight?.buttonLabel,
        buttonLink: sections!.upcomingGames!.highlight?.buttonLink,
        alignment: sections!.upcomingGames!.highlight?.alignment
      },
      freeGamesTitle: sections!.freeGames!.title,
      freeGames: freeGames!.map((freeGame) => ({
        slug: freeGame!.slug,
        title: freeGame!.name,
        developer: freeGame!.developers
          ?.map((developer) => developer!.name)
          .join(', '),
        img: `http://0.0.0.0:1337${freeGame!.cover?.url}`,
        price: freeGame!.price
      })),
      freeHighlight: {
        title: sections!.freeGames!.highlight?.title,
        subtitle: sections!.freeGames!.highlight?.subtitle,
        backgroundImage: `http://0.0.0.0:1337${
          sections!.freeGames!.highlight?.background?.url
        }`,
        floatImage: `http://0.0.0.0:1337${
          sections!.freeGames!.highlight?.floatImage?.url
        }`,
        buttonLabel: sections!.freeGames!.highlight?.buttonLabel,
        buttonLink: sections!.freeGames!.highlight?.buttonLink,
        alignment: sections!.freeGames!.highlight?.alignment
      }
    }
  }
}
