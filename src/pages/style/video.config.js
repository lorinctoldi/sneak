import styled from "styled-components"

export const Upper = styled.div`
    display: flex;
    position: relative;
    margin-top: 0px;
    width: 100vw;
    height: auto;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`

export const Left = styled.div`
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    width: calc(100% - 460px);
    height: 100vh;
    min-height: 100vh;
    padding: 8px 8px 8px 8px;
    border-radius: 6px;
    float: left;
    overflow: hidden;

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        min-height: unset;
    }
`

export const LeftInner = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    align-content: center;
    background: #f0eeed;
    border-radius: 6px;
    -webkit-mask-image: -webkit-radial-gradient(white, black);

    @media (max-width: 767px) {
        display: block;
    }
`

export const Audio = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    background: #ffffff45;
    border-radius: 6px;
    width: 44px;
    height: 42px;
    display: flex;
    align-content: center;
    justify-content: center;
    z-index: 5001;

    button {
        margin: 0;
        touch-action: auto;
        user-select: none;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 2px;
        background-color: var(--color-btn-primary);
        filter: invert(100%);
        width: 40px;
        padding: 0 10px;
        margin-top: 5px;
    }
`

export const Player = styled.div`
    color: var(--color-text);
    background-color: transparent;
    height: 100%;

    @media (max-width: 767px) {
        height: 70vh;
    }
`

export const Progress = styled.div`
    width: 95%;
    z-index: 1000;
    position: absolute;
    left: 0;
    bottom: 5px;
    margin: auto;
    margin-left: 2.5%;

    @media (max-width: 767px) {
        display: none;
    }
`

export const ProgressInner = styled.div`
    position: relative;

    input {
        width: 100%;
        opacity: 0;
    }
`

export const Range = styled.div`
    border-radius: 13px;
    height: 2px;
    background: white;
    margin: 10px 0 0 0;
    width: ${props => props.prog ? `${props.prog}%` : '0%'};
    transition: all .5s ease;
    position: absolute;
`

export const VideoContainer = styled.div`
    height: 100%;

    video {
        height: 100%;
    }
`

export const PauseVideo = styled.div`
    position: absolute;
    width: 100%;
    height: 90%;
    left: 0;
    top: 0;
    z-index: 90;
`

export const Content = styled.div`
    width: 460px;
    display: inline-block;
    float: left;
    position: relative;
    top: 0px;
    height: 100%;
    padding: 0px 8px 0 0px;
    border-radius: 6px;
    margin-bottom: 0;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        background: #fff;
        padding: 0;
        width: 100%;
        margin-bottom: 0;
    }
`

export const Actions = styled.div`
    display: block;
    transition: 0.3s;
    opacity: 1;
    position: fixed;
    color: #fff;
    left: 30px;
    bottom: 30px;
    height: 40px;
    z-index: 10;

    button {
        margin: 0;
        border: none;
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        filter: invert(100%);
        background: transparent;
        filter: invert(100%);
        width: 34px;
        padding: 4px !important;
        margin-top: 5px;
        margin-right: 2px;
        margin-right: 8px;
    }

    div {
        display: none;
    }

    img {
        width: 90%;
    }

    @media (max-width: 767px) {
        width: 100%;
        left: 0;    
        top: -52px ;
        padding-left: 16px;
        position: absolute;
        opacity: 1;

        button {
            width: 30px;
        }

        div {
            display: block;
            background: #fff;
            border-radius: 6px;
            padding: 7px 10px;
            float: right;
            position: relative;
            bottom: -4px;
            right: 16px;
            color: #000;
            font-size: 13px;
            opacity: 0.9;
            z-index: 100;
        }

        span {
            display: inline;
            float: left;
            background: url(//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/shop-items.svg?v=8672505…);
            background-repeat: no-repeat;
            background-position: center center;
            background-size: cover;
            width: 10px;
            height: 12px;
            margin-right: 8px;
            margin-top: 1px;
            opacity: 0.8;
        }
    }
`

export const Info = styled.div`
    height: 100vh;
    display: flex;
    align-items: flex-end;

    div:nth-child(1){
        display: block;
        width: 100%;
        text-align: left;
        padding: 20px 40px;
    }

    div:nth-child(2) {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 460px;
        height: 180px;
        display: block;
        background: url(//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/bottom-bg-gradient.png?v=1490646…);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: cover;
    }

    h2:nth-child(1) {
        margin-bottom: 12px;
        font-size: 14px;
        letter-spacing: .2px;
        text-transform: uppercase;
        font-weight: 100;
        margin-top: 0;
    }

    h2:nth-child(2) {
        font-family: RecklessNeue-Book;
        font-weight: 400;
        font-size: 26px;
        text-transform: unset;
        letter-spacing: 0.2px;
        margin-top: 0;
    }

    @media (max-width: 767px) {
        height: auto;

        div:nth-child(1) {
            padding: 40px 30px 0px 30px;
        }

        div:nth-child(2) {
        
        }
    }
`

export const Tag = styled.div`
    position: relative;
    display: inline-block;
    margin-top: 8px;
    padding: 5px 10px 4px 10px;
    border-radius: 6px;
    background-color: #f0eeed;
    text-transform: uppercase;
    color: #3d3d3d;
    letter-spacing: 0.4px;
    font-size: 11px;
    margin-right: 4px;
`

export const Sub = styled.div`
    display: block;
    margin-bottom: 24px !IMPORTANT;
    margin-top: 24px !important;
    padding-top: 5px;
    padding-right: 0px;
    font-weight: 400;
    font-size: 16px;
    margin: 0 auto;
    line-height: 22px;
`

export const Scroll = styled.div`
    display: block;
    width: 30px;
    position: relative;
    text-align: center;
    left: -8px;
    opacity: 0.7;
    margin-bottom: 0px;
    z-index: 100;

    @media (max-width: 767px) {
        display: none;
    }
`

export const ProductContainer = styled.div`
    overflow: auto;
    white-space: nowrap;
    padding: 8px 8px 8px 4px !important;
    height: auto;
    width: 100% !important;
    margin-left: 0px;
`

export const Swipe = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: block;
        position: absolute;
        bottom: 26px;
        z-index: 10;
        color: #fff;
        width: 100%;
        text-align: center;

        div {
            background: #4c4c4c;
            padding: 6px 4px;
            border-radius: 6px;
            display: inline-block;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.2px;
        }

        img {
            width: 15px;
            display: inline;
            filter: invert(1);
            padding: 0 4px;
        }

        img:nth-child(1) {
            transform: scaleX(1)
        }

        img:nth-child(2) {
            transform: scaleX(-1)
        }
    }
`

export const Product = styled.div`
    margin-bottom: 8px;
    border-radius: 6px;
    overflow: hidden;
    position: relative;

    h4 {
        font-size: 15px !Important;
        line-height: 1.4;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        overflow: hidden !important;
        text-align: center;
        margin-top: 4px !important;
        color: #9f9f9f !important;
        padding: 0 40px;
        margin: 0;
    }

    span {
        float: right;
        position: absolute;
        right: 16px;
        bottom: 16px;
        letter-spacing: 0.4px;
    }

    @media (max-width: 767px) {
        display: inline-block;
        height: calc(60vh + 12px);
        margin-left: 4px;
        background: #f0eeed;
        border-radius: 6px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0;
    }
`

export const GenderTag = styled.div`
    background: #fff;
    padding: 5px 10px 4px 10px;
    display: inline-block;
    border: 0;
    font-size: 11px;
    font-weight: 400;
    float: right;
    text-transform: uppercase;
    border-radius: 6px;
    letter-spacing: 0.2px;
    color: #4e4e4e;
    margin-top: 8px;
    margin-right: 8px;
    position: absolute;
    right: 0;
`

export const ProductImage = styled.div`
    padding: 0;
    background: #f0eeed;

    img {
        width: 100%;
        padding: 50px;
    }

    @media (max-width: 767px) {
        padding: 20px;

        img {
            padding: 10px;    
            margin-top: -60px;
        }
    }
`

export const ProductInfo = styled.div`
    z-index: 10;
    padding: 20px;
    width: 100%;
    bottom: 60px;
    position: absolute;

    div {
        color: #000;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 400;
        font-style: normal;
        max-width: 100%;
        letter-spacing: 0.1px;
        text-align: center;
        display: block;
    }

    @media (max-width: 767px) {
        bottom: 40px;
    }
`

export const CardContainer = styled.div`
    display: block;
    position: relative;
    z-index: 1000;
`