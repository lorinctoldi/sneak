import VideoSource from '../assets/video/video.mp4'

import { Cards, Navbar } from '../components'
import { VideoContainer, Inner, Tags, Tag, CardContainer} from './style/blog.styled'

const Blog = () => {
  return (
    <>
      <Navbar />
      <VideoContainer>
        <a href=''>
          <h2>Featured</h2>
          <h2>Backstage With Off-White at Paris Fashion Week</h2>
        </a>
        <Inner>
          <div>
            <video autoPlay muted loop src={VideoSource} />
          </div>
        </Inner>
      </VideoContainer>
      <Tags>
        <Tag selected>Most recent</Tag>
        <Tag>Original</Tag>
        <Tag>Most recent</Tag>
      </Tags>
      <CardContainer style={{marginTop: '-8px'}}>
        <Cards 
          align={true} 
        />
      </CardContainer>
    </>
  )
}

export default Blog