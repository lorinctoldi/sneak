import styled from 'styled-components'

export const CardsElement = styled.div`
    position: relative;
    width: 100%;
`

export const Controls = styled.div`
    display: flex;
    gap: 3px;
    margin-top: 8px;
    position: absolute;
    right: 16px;
    z-index: 1000;

    button {
        display: inline-block;
        padding: 11px 11px 6px !important;
        border: 0;
        border-radius: 6px;
        background: #fff;
    }

    button:disabled {
        opacity: 0.5;
    }

    img{
        width: 14px
    }

    @media (max-width: 767px) {
        display: none;
    }
`

export const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    width: 100%;
    margin-top: 8px;
    padding-right: 8px;
    transition: transform .4s ease-in;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 767px) {
        flex-direction: ${props => props.align ? 'column' : 'row'}
    }
`

export const Card = styled.div`
    flex: 0 0 auto;
    width: 25%;
    padding-left: 8px;
    float: left;

    @media (max-width: 767px) {
        width: ${props => props.align ? '100%' : '85%'}
    }
`

export const Inner = styled.div`
    position: relative;
    margin-bottom: 10px;
    border-radius: 6px;
    background: white;
    transition: 0.3s;
    opacity: 0.9;
    overflow: hidden;

    &:hover {
        opacity: 1;
    }
`

export const Image = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    display: block;
    position: relative;
    margin-bottom: -10px;

    img {
        max-width: unset;
        width: 100%;
    }    
`

export const Tag = styled.div`
    position: absolute;
    left: 8px;
    top: 8px;
    z-index: 999;
    padding-bottom: 3px;
    padding-left: 9px;
    padding-right: 10px;
    padding-top: 6px;
    border-radius: 6px;
    background-color: #ffffffab;
    font-family: Dia-Regular;
    font-size: 11px;
    text-transform: uppercase;
    color: #000;
    cursor: pointer;
    letter-spacing: .4px;

    div {
        width: 11px;
        float: left;
        display: inline-block;
        margin-right: 5px;
        margin-top: 1px;
        opacity: 1;
    }
`

export const Content = styled.div`
    display: block;
    position: absolute;
    bottom: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    color: #fff;
    user-select: none;

    div {
        display: block;
        position: absolute;
        bottom: 0;
        bottom: 0;
        width: 100%;
        padding: 40px;
        background-image: linear-gradient(rgba(0,0,0,0),#0c0c0c54);
        text-align: center; 
        color: #fff; 
    }

    h2 {
        margin: 0 0 17.5px;
        margin-bottom: 2px;
        font-family: Dia-Regular, Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 400;
        text-transform: none !Important;
        color: white;
        word-wrap: break-word;
        letter-spacing: 0;
    }

    p {
        font-family: RecklessNeue-Book !important;
        font-weight: 400;
        color: #fff;
        font-size: 26px;
        margin: 0 0 19.44444px;
        margin-bottom: 0;
    }
    
    @media (max-width: 767px) {
        p {
            font-size: 22px;
        }
    }
`