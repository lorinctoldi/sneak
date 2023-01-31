import React, { useRef, useState } from 'react'
import styled from 'styled-components'

import VideoSource from '../assets/video/video.mp4'

import { Cards, Footer } from '../components'
import { Upper, Left, LeftInner, Range, Audio, Player, Progress, ProgressInner, VideoContainer, PauseVideo, Content, Actions, Info, Tag, Sub, Scroll, ProductContainer, Swipe, Product, GenderTag, ProductImage, ProductInfo, CardContainer } from './style/video.config'


const Video = () => {

    const videoRef = useRef();
    const [progress, setProgress] = useState(0);

    const handleProgress = (e) => {
        if (isNaN(e.target.duration))  {
            return;
        }
        setProgress((e.target.currentTime / e.target.duration) * 100);
    };

    const [smallScreen, setSmallScreen] = useState(window.innerWidth <= 767)
    const [hidden, setHidden] = useState(true)

    const data = [
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/off-white-OutOfOfficeCalfLeather-white-mint-low-top-sneakers-1_650x650.jpg',
            title: 'OFF-WHITE',
            desc: 'Out of Office "OOO" White / Mint Low Top Sneakers',
            price: '400',
            tag: "women's"
        }
    ]

  return (
    <>
        <Upper>
            <Left>
                <LeftInner>
                    <div>
                        <Player>
                            <div>
                                <div>
                                    <Progress>
                                        {
                                            videoRef.current ?
                                            <ProgressInner>
                                                <Range prog={progress} />
                                                <input type="range" onChange={(e) => videoRef.current.currentTime = e.target.value} min={0} max={videoRef.current.duration} />
                                            </ProgressInner>
                                            :
                                            ''
                                        }
                                    </Progress>
                                </div>
                            </div>
                            <VideoContainer>
                                <video 
                                    onTimeUpdate={handleProgress} 
                                    autoPlay 
                                    muted 
                                    loop 
                                    src={VideoSource}
                                    ref={videoRef}
                                    controls={false}
                                />
                            </VideoContainer>
                        </Player>
                        {
                            videoRef.current ? 
                            <Audio>
                                <button onClick={() => videoRef.current.muted = !videoRef.current.muted}>
                                    {
                                        videoRef.current.muted ?
                                        <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/audio-unmute-icon.svg?v=58826890289210900521673465510" alt="" />
                                        :
                                        <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/audio-icon.svg?v=120692000054446624871673465509" alt="" />
                                    }
                                </button>
                            </Audio> 
                            :
                            ''
                        }
                        <PauseVideo onClick={() => videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()}></PauseVideo>
                    </div>
                </LeftInner>
            </Left>
            <Content>
                    {
                        videoRef.current ?
                        <Actions>
                            <button onClick={() => videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause()}>
                                {
                                    videoRef.current.paused ?
                                    <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/play-icon.svg?v=12274783906406363161673465559" alt="" />
                                    :
                                    <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/pause-icon.svg?v=33723011357548796961673465557" alt=""></img>
                                }
                            </button>
                            <button onClick={() => videoRef.current.currentTime -= 10}>
                                <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/rewind-icon.svg?v=55035578165672256881673465565" alt="" />
                            </button>
                            <button onClick={() => videoRef.current.currentTime += 10}>
                                <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/forward-icon.svg?v=78124149892031562241673465534" alt="" />
                            </button>
                            <div onClick={() => setHidden(!hidden)}>
                                <span></span>
                                { hidden ? 'Shop items' :'Hide Items'}
                            </div>
                        </Actions>   
                        : 
                        ''
                    }
                    <Info style={{display: smallScreen ? hidden ? '' : 'none' : ''}}>
                        <div>
                            <h2>Events</h2>
                            <h2>Backstage with Off-White @ Paris Fashion Week</h2>

                            <Tag>Website</Tag>
                            <Tag>@off___white</Tag>

                            <Sub>
                                <p><span>In a post Virgil Abloh world, Off-White™ continues to be culturally important. Here we document behind the scenes of the FW 22 show in Paris.</span></p>
                                <p><span>There are plans to bring in a creative “collective” for Off-White™, similar to Jean Paul Gaultier’s rotating cast of collaborators. With this in mind, Off-White™ FW22 has no external director and remains an expression of Abloh’s creative id.</span></p>
                            </Sub> 

                            <Scroll> 
                                <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/double-arrow-down.svg?v=151144322434455748551673465530" alt="" />
                            </Scroll>
                        </div>
                        <div></div>
                    </Info>
                    <ProductContainer style={{display: smallScreen ? hidden ? 'none' : '' : ''}}>
                        <Swipe>
                            <div>
                                <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/chevron-left-arrow.svg?v=21978663874862931721673465525" alt='' />
                                Swipe
                                <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/chevron-left-arrow.svg?v=21978663874862931721673465525" alt='' />
                            </div>
                        </Swipe>
                        {
                            data[0] ?
                            data.map(product => {
                                return (
                                    <Product>
                                        <div>
                                            <GenderTag>{product.tag}</GenderTag>
                                            <ProductImage>
                                                <img src={product.img} alt="" />
                                            </ProductImage>
                                        </div>
                                        <ProductInfo>
                                            <div>
                                                <div >
                                                    {product.title}
                                                </div>
                                            </div>
                                            <h4>
                                                {product.desc}
                                            </h4>
                                        </ProductInfo>
                                        <div>
                                            <span>
                                                £{product.price}
                                            </span>
                                        </div>
                                    </Product>
                                )
                            })
                            : ''
                        }
                    </ProductContainer>
            </Content>
        </Upper>
        <CardContainer style={{display: smallScreen ? hidden ? '' : 'none' : ''}}>
            <Cards />
        </CardContainer>
        <Footer />
    </>
  )
}

export default Video