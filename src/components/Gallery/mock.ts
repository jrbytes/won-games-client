import { GalleryImageProps } from '.'

import img1 from '/public/images/games/cyberpunk-1.jpg'
import img2 from '/public/images/games/cyberpunk-2.jpg'
import img3 from '/public/images/games/cyberpunk-3.jpg'
import img4 from '/public/images/games/cyberpunk-4.jpg'
import img5 from '/public/images/games/cyberpunk-5.jpg'
import img6 from '/public/images/games/cyberpunk-6.jpg'

const mock = [
  {
    src: img1.src,
    label: 'Gallery Image 1'
  },
  {
    src: img2.src,
    label: 'Gallery Image 2'
  },
  {
    src: img3.src,
    label: 'Gallery Image 3'
  },
  {
    src: img4.src,
    label: 'Gallery Image 4'
  },
  {
    src: img5.src,
    label: 'Gallery Image 5'
  },
  {
    src: img6.src,
    label: 'Gallery Image 6'
  }
] as GalleryImageProps[]

export default mock
