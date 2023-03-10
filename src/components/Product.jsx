import { useState } from 'react'
import { Hover, Container, ImageContainer, InfoContainer, Close, Info, Tags, Tag, Description, ShopButton } from './style/product.styled'

const Product = () => {
    const [displayState, setDisplayState] = useState(true)
    function close() {
        setDisplayState(false)
    }

    const [zoomState, setZoomState] = useState(false)
    function zoom() {
        if(window.innerWidth >= 767) {
            setZoomState(!zoomState)
        }
    }
  return (
    <div>
        <Hover onClick={(e) => {if(e.target == e.currentTarget) {close()}}} displayState={displayState}>
            <Container>
                <ImageContainer onClick={zoom} zoomed={zoomState}>
                    <img src="https://cdn.shopify.com/s/files/1/0493/5663/6318/products/nike-x-tiffany-co-AirForce1Low-black-low-top-sneakers-1.jpg?v=1675191563" alt="" />
                    <img src="https://cdn.shopify.com/s/files/1/0493/5663/6318/products/nike-x-tiffany-co-AirForce1Low-black-low-top-sneakers-2.jpg?v=1675191563" alt="" />
                </ImageContainer>
                <InfoContainer zoomed={zoomState}>
                    <Info>
                        <p>
                            dior
                        </p>
                        <h1>
                            Dior Warp Anthracite Gray Cosmo Rubber with Warped Cannage Motif Sandals
                        </h1>
                        <Tags>
                            <Tag highlight={true}>Hello</Tag>
                            <Tag highlight={false}>Hello</Tag>
                            <Tag highlight={false}>Hello</Tag>
                        </Tags>
                        <span>
                            £870
                        </span>
                        <Description>
                            <div>
                                The men's Dior Warp sandals features drawstring cord with CD Diamond cord-stop closure,&nbsp;mint green rubber insole, sculpted rubber Cannage outsole, and welded construction. Made in Italy.
                            </div>
                            <p>Read more</p>
                        </Description>
                    </Info>
                        <ShopButton>
                            <div>
                                <span>
                                    Shop from Dior
                                </span>
                            </div>
                        </ShopButton>
                        <Close onClick={() => close()} zoomed={zoomState}>
                            <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/301/assets/close-icon.svg?v=66431158137083859131677699363" alt="" />
                        </Close>
                </InfoContainer>
            </Container>
        </Hover>
    </div>
  )
}

export default Product