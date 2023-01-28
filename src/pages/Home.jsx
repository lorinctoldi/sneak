import React, { useState } from 'react'

import VideoSource from '../assets/video/video.mp4'

import { Cards, Footer, Navbar } from '../components'
import { Grid, GridInner, GridItem, Intro, IntroInner, Logo, MobileButtons, Buttons, Button, Select, MobileLogo, VideoContainer, Video, Tag } from './style/home.styled'

const Home = () => {

  const [tag, setTag] = useState(false)

  return (
    <>  
      <Navbar />
      <Grid>
        <GridInner>
          <GridItem>
            <VideoContainer
              onMouseEnter={() => setTag(true)}
              onMouseLeave={() => setTag(false)}
            >
              <Video autoPlay muted loop src={VideoSource} />
              <Tag style={{marginBottom: tag ? '20px' : '-50px'}}>
                <div>
                  <span>
                    <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/play-icon.svg?v=12274783906406363161673465559" alt="" />
                  </span>
                  Sneak TV
                </div>
              </Tag>
              <MobileLogo>
                <Logo alt="Sneak in Peace Logo">    
                  <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/sneak-white-logo.png?v=152213918075707649011673465591" alt="" />
                </Logo>
              </MobileLogo>
              <MobileButtons>
                <Buttons>
                  <Button>
                    <li>
                      <Select>Men's Sneakers</Select>
                    </li>
                  </Button>
                  <Button>
                    <li>
                      <Select>Men's Sneakers</Select>
                    </li>
                  </Button>
                </Buttons>
              </MobileButtons>
            </VideoContainer>
          </GridItem>
          <GridItem>
            <Intro>
              <IntroInner>
                <Logo>
                  <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/sneak-in-peace-main-logo.png?v=94544080702387007841673465587" alt="" />
                </Logo>
                <h1>
                  A destination to discover & collect the latest luxury sneakers
                </h1>
                <Buttons>
                  <Button>
                    <li>
                      <Select>
                        Men's Sneakers
                      </Select>
                    </li>
                  </Button>
                  <Button>
                    <li>
                      <Select>
                        Men's Sneakers
                      </Select>
                    </li>
                  </Button>
                </Buttons>
              </IntroInner>
            </Intro>
          </GridItem>
        </GridInner>
      </Grid>
      <Cards />
      <Footer />
    </>
  )
}

export default Home