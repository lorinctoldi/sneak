import styled from 'styled-components'

export const Hover = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    background: rgba(0,0,0,0.4);
    transition: all .4s;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 767px) {
        background: white;
    }
`

export const Inner = styled.div`
    height: auto;
    width: 596px;
    background: rgb(255,255,255);
    padding: 0;
    position: relative;

    @media (max-width: 767px) {
        height: 100vh;
    }
`

export const Form = styled.div`
    position: relative;
    -webkit-box-flex: 1;
    padding: 0 20px 30px 20px;
    max-width: 446px;
    margin: 0 auto;

    @media (max-width: 767px) {
        margin-top: 40px;
    }
`

export const Header = styled.div`
    height: 95px;
    text-align: center;
    padding: 20px;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-box-align: start;
    align-items: flex-start;
    -webkit-box-pack: justify;
    justify-content: space-between; 
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;

    h2 {
        width: 100%;
        margin: auto;    
        padding: 0 25px;
        text-align: center;
        font-size: 16px;
        line-height: 1.2;
        font-family: "dutti-daily-bold",Helvetica,arial,sans-serif;
    }
`

export const InputContainer = styled.div`
    margin-bottom: 24px;    
    margin-right: -8px;
    margin-left: -8px;
    display: flex;
    flex-wrap: wrap;

    div {
        box-sizing: border-box;
        position: relative;
        min-height: 1px;
        padding-right: 8px;
        padding-left: 8px;    
        -webkit-box-flex: 0;
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
        cursor: pointer;

        label {
            position: relative;
            cursor: pointer;
        }

        i {
            opacity: 1;
            transform: scale(1);
            background: #292929;
            border-radius: 50%;
            vertical-align: middle;
            display: block;
            position: absolute;
            width: 7px;
            height: 7px;    
            top: 8px;
            left: 9px;
            color: #292929;
            transition: all .2s;
        }

        span {
            display: inline-block;
            vertical-align: middle;
            margin: 0;
            line-height: 16px;
            padding-left: 42px;
            padding-top: 5px;
        }

        p {
            content: '';
            width: 25px;
            height: 25px;
            border: none;
            border-radius: 50%;
            border: 1px solid #a3a0a0;
            outline: 0;
            display: inline-block;
            vertical-align: middle;
            margin: 0 16px 0 0;
            position: absolute;
        }
    }
`

export const InputRow = styled.div`
    box-sizing: border-box;
    position: relative;
    min-height: 1px;
    -webkit-box-flex: 0;
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 24px;

    div {
        font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
        position: relative;
    }

    input {
        border: 1px solid transparent;
        background-color: #FFFFFF;
        padding: 16px;
        font-weight: normal;
        border-color: #E3E3E3;
        color: #292929;
        max-width: 100%;
        width: 100%;
        line-height: 1;

        ${props => props.filled ? 
            'padding-top: calc(14px + 14px * (2 / 3)); padding-bottom: calc(14px / 3 + 3px);'
            :
            ''
        }
    }

    input:focus {
        outline: 1px solid rgb(42,42,42);
    }

    label {
        box-sizing: border-box;
        position: absolute;
        top: 0px;
        left: 0px;
        display: block;
        width: 100%;
        font-weight: normal;
        margin-top: 1px;
        margin-bottom: 0;
        line-height: 1.1;
        color: #8E8E8E;
        border-radius: 0.25rem;
        transition: all 0.1s ease-in-out;
        pointer-events: none;
        padding: 16px;
        font-size: 14px;

        ${props => props.filled ? 
            'padding-top: calc(14px / 3 + 1px); padding-bottom: calc(14px / 3); font-size: 12px;color: #8E8E8E;'
            :
            ''
        }
    }
`

export const Warning = styled.div`
    line-height: 1.1;
    font-size: 11px;
    color: #B40016;
    font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
    margin-top: 3px;
`

export const Button = styled.button`
    color: #fff;
    background-color: #292929;
    border: 1px solid #292929;
    font-size: 14px;
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
    margin-top: 40px;
    margin-bottom: 16px;
`

export const OutlineButton = styled.button`
    font-size: 14px;
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
    margin-top: 12px;
    color: #292929;
    background-color: #fff;
    border: 1px solid #292929;
    margin-top: 3px;
`



export const CloseIcon = styled.div`
    padding: 18px 16px;
    position: absolute;
    right: 0;
    cursor: pointer;

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