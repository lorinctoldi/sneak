import styled, { createGlobalStyle } from "styled-components"

export const Hover = styled.div`
    width: 100vw; 
    height: 100vh;
    background: rgb(0,0,0,0.4);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    opacity: ${props => props.displayState ? 1 : 0};
    visibility: ${props => props.displayState ? 'visible' : 'hidden'};
    transition: .4s all;
`

export const Container = styled.div`
    min-height: 100vh;
    background: #f0eeed;
    overflow: scroll;
    right: ${props => props.displayState ? '0px' : '-90vw'};
    max-width: 75vw;
    position: fixed;
    color: #262626;
    height: 100%;
    border-radius: 6px 0 0 6px;
    width: 90vw;
    transition: all .5s ease;
    top: 0;
    z-index:1001;

    @media (max-width: 1024px) {
        max-width: 1200px;
    }

    @media (max-width: 767px) {
        max-width: none;
        width: 100vw;
        right: 0px;
        top: ${props => props.displayState ? '0px' : '100vh'};
    }
`

export const ImageContainer = styled.div`
    width: ${props => props.zoomed ? '100%' : 'calc(100% - 400px)'};
    height: 100vh;
    overflow: scroll;
    cursor: ${props => props.zoomed ? 'zoom-out' : 'zoom-in'};
    transition: .4s all;
    

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
    }
`

export const InfoContainer = styled.div`
    margin: 0;
    top: 10px;
    bottom: 10px;
    float: left;
    background-color: #fff;
    width: 400px;
    border-radius: 6px;
    border: #fff solid 6px;
    display: block;
    position: absolute;
    z-index: 800;
    transition: .4s all;
    right: ${props => props.zoomed ? '-410px' : '10px'};

    @media (max-width: 767px) {
        position: static;
        width: 100%;
        border-radius: 0;
    }
`

export const Info = styled.div`
    background: #fff;
    padding: 50px 30px;
    height: 100%;
    position: relative;
    display: block;
    width: 100%;
    overflow: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }

    p {
        letter-spacing: 0.2px;
        text-transform: uppercase;
        font-size: 14px;
    }

    h1 {
        font-size: 24px;
        text-transform: capitalize;
        line-height: 1.4;
        font-weight: 500;
        letter-spacing: -0.2px;
        font-family: RecklessNeue-Book;
    }

    span {
        font-size: 20px;
    }
`

export const Tags = styled.div`
    display: flex;
    height: auto;
`

export const Tag = styled.div`
    margin-top: 8px;
    margin-bottom: 30px;
    padding: 5px 10px 4px 10px;
    border-radius: 6px;
    background-color: #f0eeed;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    font-size: 11px;
    margin-right: 4px;
    left: -10px;
    background: ${props => props.highlight ? '#646464' : '#f0eeed'};
    color: ${props => props.highlight ? '#fff' : '#3d3d3d'};
`

export const Description = styled.div`
    font-size: 16px;
    color: #000;
    margin-top: 30px;
    margin-bottom: 50px;
    line-height: 22px;

    div {
        max-height: ${props => props.readState ? '100vh' : '100px'};
        position: relative;
        overflow: hidden;
        transition: unset;
        font-size: 16px;
        margin-bottom: 50px;
        padding-bottom: 20px;
        line-height: 22px;
        transition: all .5s cubic-bezier(0, 1, 0, 1);

        &::after {
            content: "";
            position: absolute;
            z-index: 1;
            bottom: 0;
            left: 0;
            pointer-events: none;
            background-image: linear-gradient(to bottom, rgba(255,255,255, 0), rgba(255,255,255, 1) 90%);
            width: 100%;
            height: 2.3em;
        }
    }

    p {
        font-size: 12px;
        line-height: 22px;
        box-sizing: border-box;
        color: rgb(77,77,77);
        margin: 0 0 19.44444px;
        padding-top: 10px;
        margin-bottom: 0;
        margin-top: -50px;
    }
`

export const ShopButton = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    width: 400px;
    padding: 0;
    z-index: 100;
    background: transparent;
    bottom: -6px;
    left: -6px;
    right: 0;

    div {
        display: inline-flex;
        background-color: #1b1b1b;
        width: 100%;
        border-radius: 6px;
    }

    span {
        padding: 18px;
        font-size: 16px;
        background-color: #1b1b1b;
        color: #fff;
        text-decoration: none;
        border: 0;
        display: inline-block;
        float: left;
        margin-bottom: 0;
        border-radius: 0 0 6px 6px;
        width: 100%;
        font-weight: 500;
        transition: 0.3s;
        text-align: center;
    }

    @media (max-width: 767px) {
        position: fixed;
        bottom: 20px;
        right: 20px;
        left: 20px;
        width: 100%;
        opacity: 0.6;

        div {
            width: calc(100vw - 40px);
        }

        span {
            border-radius: 10px;
            padding: 14px;
            font-size: 15px;
        }
    }
`

export const Close = styled.div`
    position: fixed;
    top: 20px;
    right: ${props => props.displayState ? props.zoomed ? '-100px' : '20px' : '-100px'};
    width: 38px;
    height: 38px;
    border-radius: 6px;
    background: #f0eeed;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .4s all;

    img {
        width: 11px;
        height: 12px;
        display: block;
        padding: 0px;
    }

    @media (max-width: 767px) {
        top: ${props => props.displayState ? '20px' : '-50px'};
        right: 20px;
    }
`