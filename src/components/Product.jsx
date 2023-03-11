import { useEffect, useState } from 'react'
import { Hover, Container, ImageContainer, InfoContainer, Close, Info, Tags, Tag, Description, ShopButton } from './style/product.styled'

import { useDispatch, useSelector } from 'react-redux'
import { change } from '../redux/productDisplay'

const Product = () => {
    const { product_display } = useSelector(state => state.product_display)
    const dispatch = useDispatch()

    function close() {
        setChangeState(false)
        setZoomState(false)
        setReadState(false)
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

    const [readState, setReadState] = useState(false)


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
                            <Description readState={readState}>
                                <div>
                                The B713 sneaker is part of the exclusive collaboration with CACTUS JACK and combines the codes of a '90s skate shoe with the couture spirit of the House. The limited and numbered edition style is distinguished by its mix of materials combining grained calfskin, technical mesh and nubuck calfskin. The B713 is further embellished by thick, retro-style laces and an ultralight two-tone sole. There is a contrasting CACTUS JACK DIOR signature on the side and heel, while the 'CD Diamond' signature is featured on the tongue, eyelets and sole. The low-top sneaker will enhance any casual outfit and can be combined with other CACTUS JACK DIOR creations.
                                </div>
                                <p onClick={() => setReadState(!readState)}>{readState ? 'Read less' : 'Read more'}</p>
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