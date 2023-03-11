import { useEffect, useState } from 'react'
import { Hover, Container, ImageContainer, InfoContainer, Close, Info, Tags, Tag, Description, ShopButton } from './style/product.styled'

import { useDispatch, useSelector } from 'react-redux'
import { change } from '../redux/productDisplay'

const Product = () => {
    const { product_display } = useSelector(state => state.product_display)
    const dispatch = useDispatch()

    function close() {
        setChangeState(false)
        setTimeout(() => {
            dispatch(change())
        }, 400);
    }

    const [zoomState, setZoomState] = useState(false)
    function zoom() {
        if(window.innerWidth >= 767) {
            setZoomState(!zoomState)
        }
    }

    const [changeState, setChangeState] = useState(product_display)
    useEffect(() => {
        if(product_display) setChangeState(true)
    }, [product_display])


  return (
    <>
    {
        product_display ?
        <div>
            <Hover onClick={(e) => {if(e.target == e.currentTarget) {close()}}} displayState={changeState}>
            </Hover>
                <Container displayState={changeState}>
                    <ImageContainer onClick={zoom} zoomed={zoomState}>
                        <img src="https://cdn.shopify.com/s/files/1/0493/5663/6318/products/nike-x-tiffany-co-AirForce1Low-black-low-top-sneakers-1.jpg?v=1675191563" alt="" />
                        <img src="https://cdn.shopify.com/s/files/1/0493/5663/6318/products/nike-x-tiffany-co-AirForce1Low-black-low-top-sneakers-2.jpg?v=1675191563" alt="" />
                    </ImageContainer>
                    <InfoContainer zoomed={zoomState}>
                        <Info>
                            <p>
                                nike x tiffany & co.
                            </p>
                            <h1>
                                Dior Warp Anthracite Gray Cosmo Rubber with Warped Cannage Motif Sandals
                            </h1>
                            <Tags>
                                <Tag onClick={() => dispatch(change())} highlight={true}>Hello</Tag>
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
                            <Close onClick={() => close()} zoomed={zoomState} displayState={changeState}>
                                <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/301/assets/close-icon.svg?v=66431158137083859131677699363" alt="" />
                            </Close>
                    </InfoContainer>
                </Container>
        </div>
        :
        ''
    }
    </>
  )
}

export default Product