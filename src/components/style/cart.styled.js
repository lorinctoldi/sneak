import styled from 'styled-components'

export const CartContainer = styled.div`
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    height: 100vh;
    background: rgb(255,255,255);    
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 425px;
    box-shadow: 0 0 5px 2px #00000026;
    transition: all .5s ease;

    article {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
`

export const CloseIcon = styled.div`
    padding: 18px 16px;
    position: absolute;
    right: 0;
    cursor: pointer;
    z-index: 2;

    div {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    svg {
        overflow: hidden;
    }
`

export const TopUl = styled.ul`
    -webkit-box-pack: center;
    justify-content: center;
    display: flex;
    -webkit-box-align: end;
    align-items: flex-end;
    border-bottom-color: #E3E3E3;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    -webkit-box-flex: 1;
    margin: 0;
    font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
    font-weight: inherit;
    padding: 0;


    li {
        -webkit-box-flex: 1;
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1.5px solid rgb(42,42,42);
        font-family: "dutti-daily-bold",Helvetica,arial,sans-serif;
        cursor: pointer;
    }

    span {
        border-bottom-color: #292929;
        border-bottom-width: 2px;
        padding-bottom: 16px;
        color: #292929;
        font-weight: inherit;
        justify-content: center;
        margin-bottom: -1px;
        padding: 16px;
        vertical-align: top;
        font-size: 14px;
        line-height: 1.45;
        letter-spacing: .1px;
    }
`

export const Inner = styled.div`
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    position: relative;
`

export const CartElement = styled.div`
    section {
        padding: 40px 0;
    }

    div {
        padding-right: 8px;
        padding-left: 8px;
        margin-right: auto;
        margin-left: auto;
        position: relative;
        width: 90%;
        max-width: 356px;
    }
`

export const CartUpper = styled.div`
    margin-right: -8px;
    margin-left: -8px;

    div {
        margin-bottom: 8px;
        box-sizing: border-box;
        position: relative;
        min-height: 1px;
        padding-right: 8px;
        padding-left: 8px;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
        justify-content: center;
        -webkit-box-pack: center;
        display: flex;

        div {
            transform: scale(2);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const CartBottom = styled.div`
    margin-right: -8px;
    margin-left: -8px;
    text-align: center;

    div {
        box-sizing: border-box;
        position: relative;
        min-height: 1px;
        padding-right: 8px;
        padding-left: 8px;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
    }

    p:nth-child(1) {
        padding-bottom: 16px;
        font-size: 16px;
        line-height: 1.3;
        font-family: "dutti-daily-bold",Helvetica,arial,sans-serif;
        color: rgb(42,42,42);
        margin: 0;
    }

    p:nth-child(2) {
        color: #292929;
        line-height: 1.45;
        font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
        font-weight: inherit;
        margin: 0;
        margin-bottom: 48px;
        font-size: 14px;
    }

    button {
        color: #fff;
        background-color: #292929;
        border: 1px solid #292929;
        padding-right: 40px;
        padding-left: 40px;
        font-size: 14px;
        max-width: 272px;
        width: 100%;
        white-space: nowrap;
        cursor: pointer;
        padding: 16px 8px;
        font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
        font-weight: inherit;
        vertical-align: middle;
        position: relative;
        display: inline-block;
        border-radius: 8px;
        line-height: 1;
        text-align: center;
    }
`

export const SavedElement = styled.div`
    section {
        padding: 40px 0;
    }

    div {
        padding-right: 8px;
        padding-left: 8px;
        margin-right: auto;
        margin-left: auto;
        position: relative;
        width: 90%;
        max-width: 356px;
    }
`

export const SavedUpper = styled.div`
    margin-right: -8px;
    margin-left: -8px;

    div {
        margin-bottom: 8px;
        box-sizing: border-box;
        position: relative;
        min-height: 1px;
        padding-right: 8px;
        padding-left: 8px;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
        justify-content: center;
        -webkit-box-pack: center;
        display: flex;

        div {
            transform: scale(2);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const SavedBottom = styled.div`
    margin-right: -8px;
    margin-left: -8px;
    text-align: center;

    div {
        box-sizing: border-box;
        position: relative;
        min-height: 1px;
        padding-right: 8px;
        padding-left: 8px;
        -webkit-box-flex: 0;
        flex: 0 0 100%;
        max-width: 100%;
    }

    p {
        padding-bottom: 16px;
        font-size: 16px;
        line-height: 1.3;
        font-family: "dutti-daily-bold",Helvetica,arial,sans-serif;
        color: rgb(42,42,42);
        margin: 0;
        margin-bottom: 38px;
    }

    span{
        font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
        font-weight: inherit;
        display: initial;
        position: relative;
        border: 0;
        transform: none;
        cursor: pointer;
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        transition: background-size .4s;
        font-size: 14px;
        border-bottom: 1px solid rgb(42,42,42);
        transition: all 300ms;

        &:hover {
            opacity: .4;
        }
    }

    span:nth-child(3) {
        border-bottom: none;
        margin: 0 6px; 
        cursor: auto;

        &:hover {
            opacity: 1;
        }
    }
`