import styled from "styled-components";

export const MenuContainer = styled.div`
    position: fixed; 
    z-index: 10000;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    min-height: 100vh;
    background: rgb(255,255,255);
    animation-timing-function: cubic-bezier(.165,.84,.44,1);
    animation: .5s ease forwards;

`

export const MenuInner = styled.div`
    display: flex;
    height: 100%;
    padding: 16px 40px 0;

    @media (max-width: 991px) {
        padding: 10px 22px 0;
    }
`

export const Left = styled.div`
    padding-right: 32px;
    z-index: 1;
    min-width: 336px;

    @media (max-width: 991px) {
        width: 100%;    
        padding-right: 0px;
        min-width: none;
    }
`

export const LeftTop = styled.div`    
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    
    button {
        display: initial;
        position: relative;
        border: 0;
        background: initial;
        padding: 16px;
        width: 50px;
        height: 50px;
        margin-left: -16px;
        cursor: pointer;
        opacity: .6;

        span {
            position: relative;
            float: left;
            transform: scale(1.2);
        }

        div {
            cursor: pointer;
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font-size: 100%;
            vertical-align: baseline;
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const LeftTopOptions = styled.div`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    height: 48px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    
    div {
        margin: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        position: relative;
        padding: 12px 8px;
        font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
        font-size: 14px;
        color: #292929;
        text-transform: uppercase;
        cursor: pointer;
        
    }

    span {
        position: absolute;
        bottom: 8px;
        left: 8px;
        height: 1px;
        width: calc(100% - 8px * 2);
        content: "";
        background-color: #292929;
        transition: width .4s;
    }
`

export const LeftBottom = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    z-index: 1;
    min-width: 320px;
    height: 100%;
    max-height: calc(100vh - 120px);
    overflow: auto;
    animation: appearmdmenu .5s ease forwards;
    animation-timing-function: cubic-bezier(.165,.84,.44,1);
    

    ul {
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        padding: 0;
        margin: 0;
        list-style: none;
        left: 0;
        top: 0;
        transition: all .2s ease-in-out;
        width: max-content;
        animation-timing-function: cubic-bezier(.165,.84,.44,1);
        pointer-events: all;
        
    }

    li {
        margin-bottom: 8px;
        width: fit-content;
        max-width: 300px;
        padding-bottom: 4px;
        font-size: 18px;
        font-family: "dutti-extended-extrabold",arial-black,sans-serif;
        position: relative;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 300ms;
        position: relative;
        display: flex;
        
    }

    li:hover {
        opacity: 0.6;
    }

    span {
        position: absolute;
        bottom: 4px;
        height: 1px;
        width: 100%;
        content: "";
        background-color: #292929;
        transition: width .3s;
    }
`

export const LeftBottomOptions = styled.div`
    display: none;
    max-height: 0;
    overflow: hidden;
    

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        padding-top: 14px;
        padding-bottom: 14px;
        min-width: 160px;
        width: 100%;
    }

    li {
        display: flex;
        transition: opacity 1s ease-in-out;
        opacity: 1;
        position: relative;
        padding-bottom: 8px;
        line-height: 1;
        color: inherit;
        width: fit-content;
        font-size: 16px;
        color: black;
        letter-spacing: .1px;
        cursor:pointer;
        transition: all 200ms;    
        font-family: dutti-daily-regular;
        letter-spacing: 1.2;
        text-transform: none;

        &:hover {
            opacity: .4;
        }
    }

    @media (max-width: 991px) {
        display: block;
    }
`

export const Right = styled.div`
    width: 100%;
    animation: showmdmenu 1s ease forwards;
    animation-timing-function: cubic-bezier(.165,.84,.44,1);
    

    @media (max-width: 991px) {
        width: 0;
    }
`

export const RightTop = styled.div`
    height: 48px;
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    margin-bottom: 48px;

    div {
        width: 100%;
        border-radius: 8px;
        background: rgba(0,0,0,.05);
        display: flex;
        align-items: center;
        padding: 16px;
        height: 48px;
    }

    svg {
        opacity: .2;
    }

    input {
        border: none;
        width: 100%;
        background: transparent;
        box-sizing: content-box;
        -webkit-appearance: textfield;
        color: inherit;
        font: inherit;
        margin: 0;
        outline: none;
        padding: 1px 2px;
        padding-left: 8px;
        font-family: dutti-daily-regular;
        letter-spacing: 1.2;
    }

    input::placeholder {
        color: rgb(227,227,227);
    }

    @media (max-width: 991px) {
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        margin-bottom: 0px;
        padding: 16px;
        margin-bottom: 16px;
        height: 40px;

        div {
            height: 40px;
            padding-left: 8px;
        }

        input::placeholder {
            color: #8E8E8E;
            font-size: 10px;
            line-height: 1.3;
            font-family: "dutti-daily-bold",Helvetica,arial,sans-serif;
            font-weight: inherit;
        }
    }
`

export const RightBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    position: relative;
    height: calc(100vh - 48px);
    font-family: dutti-daily-regular;
    letter-spacing: 1.2;
    animation: showCategoryList 1.5s ease forwards;        
    animation-timing-function: cubic-bezier(.165,.84,.44,1);

    div {    
        position: absolute;
        top: 0;
        margin-right: 32px;
        max-width: fit-content;
        display: flex;
        height: calc(100% - 98px);
        pointer-events: all;
        transform: translate(0);
        animation: showInner-1 1s ease forwards;
        animation-timing-function: cubic-bezier(.165,.84,.44,1);
        overflow: auto;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        padding-top: 2px;
        margin-right: 64px;
        min-width: 160px;
        width: 100%;
    }

    li {
        display: flex;
        transition: opacity 1s ease-in-out;
        opacity: 1;
        position: relative;
        padding-bottom: 16px;
        line-height: 1;
        color: inherit;
        width: fit-content;
        font-size: 14px;
        color: black;
        letter-spacing: .1px;
        cursor:pointer;
        transition: all 200ms;

        &:hover {
            opacity: .4;
        }
    }

    @media (max-width: 991px) {
        display: none;
    }
`