import { gql } from '@apollo/client'

export const GET_HOME = gql`
  query getHome {
    banners {
      image {
        url
      }
      title
      subtitle
      button {
        label
        link
      }
      ribbon {
        text
        color
        size
      }
    }
  }
`
