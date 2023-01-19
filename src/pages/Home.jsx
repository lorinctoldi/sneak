import React, { useState } from 'react'
import styled from 'styled-components'

import VideoSource from '../assets/video/video.mp4'

import { Cards, Footer } from '../components'

const Grid = styled.div`
  margin: 0;
  padding: 0;
`

const GridInner = styled.div`
  height: 80vh;
  display: flex;

  @media (max-width: 767px) {
    height: 70vh;
  }
`

const GridItem = styled.div`
  width: 50%;
  padding: 8px 8px 0 8px;

  @media (max-width: 767px) {
    width: 100%;

    &:nth-child(2) {
      display: none;
    }
  }
`

const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 100%;
`

const IntroInner = styled.div`
  position: relative;
  max-width: 540px;
  padding: 70px 30px 50px;
  text-align: center;

  h1 {
    color: #000;
    text-align: center;
    padding: 10px 0px 0px;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 24px;
    font-family: RecklessNeue-Book;
  }
`

const Logo = styled.div`
  position: relative;
  width: 140px;
  margin: 0 auto 2px auto;

  @media (max-width: 767px) {
    width: 50px;
  }
`

const MobileButtons = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  z-index: 999;

  @media (max-width: 767px) {
    display: block;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Button = styled.div`
  display: inline-block;
  margin: 0 4px 10px 4px;    
  width: 100%;
  border-radius: 6px;

  li {
    font-size: 15px;
    letter-spacing: -0.1px;
    background: #fff;
    border: 1px solid #e4e4e4;
    border-radius: 6px;
    color: #000;
    padding: 9px 16px 8px 22px;
    line-height: 21px;
    transition: all 0.3s;
    cursor: pointer;
    text-align: center;
  }

  @media (max-width: 767px) {
    li {
      border: 0;
      width: calc(100vw - 40px);
    }
  }
`

const Select = styled.div`
  display: inline-block;

  &::after {
    display: inline-block;
    float: right;
    content: '';
    height: 7px;
    width: 7px;
    background: #fff;
    border: 1px solid #000;
    border-radius: 60px;
    margin-top: 8px;
    margin-left: 16px;
  }

  &:hover::after {
    background: black;
  }

  @media (max-width: 767px) {
    &::after {
      display: none;
    }
  }
`

const MobileLogo = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`

const VideoContainer = styled.div`
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;    
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: #f0eeed;
  height: 100%;
  position: relative;
  border-radius: 6px;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  padding: 0;

  @media (max-width: 767px) {
    align-items: center;
    justify-content: center;
    background: url( //cdn.shopify.com/s/files/1/0493/5663/6318/files/mobile-home_1080x1080.webp?v=1658071680);
  }
`

const Video = styled.video`
  position: absolute; 
  right: 0; 
  bottom: 0;
  min-width: 100%; 

  @media (max-width: 767px) {
    display: none;
  }
`

const Tag = styled.div`
  background: #ffffff40;
  color: #fffffff0;
  border-radius: 50px;
  padding: 10px 18px 10px 24px;
  display: block;
  -webkit-box-shadow: 0px 0px 5px -2px rgb(0 0 0 / 32%);
  box-shadow: 0px 0px 5px -2px rgb(0 0 0 / 32%);
  margin-bottom: -50px;
  position: relative;
  z-index: 10;
  transition: all 0.3s;
  cursor: pointer;

  div {
    color: inherit;
    margin-right: 0px;
    font-size: 14px;
    display: inline;
  }

  img {
    width: 11px;
    display: inline;
    margin-left: 6px;
    float: right;
    margin-top: 4px;
    filter: invert(1);
  }

  @media (max-width: 767px) {
    display: none;
  }
`

const Home = () => {

  const [tag, setTag] = useState(false)

  return (
    <>  
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