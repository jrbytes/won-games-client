import Game, { GameTemplatePros } from '../../templates/Game'

import galleryMock from '../../components/Gallery/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'

export default function Index(props: GameTemplatePros) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'cyberpunk-2077' } }],
    fallback: false
  }
}

export async function getStaticProps() {
  const descriptionHTML = `<div class="description"><div class="banner welcome-offer-banner ng-scope ng-hide" welcome-offer-banner="" timer="0" ng-show="welcomeOfferBanner.isCounterReady &amp;&amp; !timer.finished"><div class="banner__header">
  </div><div class="welcome-offer-banner__description">
  <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/character.mp4"></video><br>Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City.
  <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/world.mp4"></video><br>
  Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to go, when to go, and how to get there.
  <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/tech.mp4"></video><br>
  Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.
  <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/music.mp4"></video><br><h4>EQUIPPED WITH IMPROVEMENTS</h4>
  Experience Cyberpunk 2077 with a host of changes and improvements to gameplay and economy, the city, map usage, and more.
  <br><br><h4>INCLUDES FREE ADDITIONAL CONTENT</h4>
  Get your hands on a haul of free items including new guns and melee weapons, as well as extra customization options and more.
  <br><br><hr><a target="“_blank”" href="https://lp.gog.com/cyberpunk-2077-hub/en"><img alt="" src="https://items.gog.com/not_a_cp/learn_more.png"></a><hr><center><img alt="" src="https://items.gog.com/not_a_cp/awards/awardscp1.png" width="32%" height="32%"><img alt="" src="https://items.gog.com/not_a_cp/awards/awardscp2.png" width="32%" height="32%"></center><hr>
  <p class="description__copyrights">
  CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
  CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
  respective owners.
  </p></div>`

  return {
    props: {
      cover: 'https://source.unsplash.com/user/willianjusten/1042x580',
      gameInfo: {
        title: 'Cyberpunk 2077',
        price: '59.00',
        description:
          'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality'
      },
      gallery: galleryMock,
      description: descriptionHTML,
      details: {
        developer: 'CD PROJEKT RED',
        releaseDate: '2020-12-10T23:00:00',
        platforms: ['windows', 'linux', 'mac'],
        publisher: 'CD PROJEKT RED',
        rating: 'BR18',
        genres: ['Action', 'Role-playing']
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}
