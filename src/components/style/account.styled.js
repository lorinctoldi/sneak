import styled from 'styled-components'

export const AccountContainer = styled.div`
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
        align-items: center;
        padding: 60px 45px;


        @media (max-width: 767px) {
            padding: 74px 20px;
        }

        p {
            font-size: 14px;
            line-height: 1.3;
            font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
            letter-spacing: .2px;
            align-self: end;
        }
    }

    h2 {
        font-size: 18px;
        line-height: 1.3;
        font-family: "dutti-daily-bold",Helvetica,arial,sans-serif;
        color: rgb(42,42,42);
        margin: 0;
    }

    h3 {
        font-size: 14px;
        line-height: 1.3;
        font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
        letter-spacing: .2px;
        margin-top: 16px;
    }

    h4 {
        font-size: 13px;
        line-height: 1.3;
        font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
        letter-spacing: .2px;
        margin-top: 32px;
        text-align: center;
        width: 90%;
    }

    input {
        font-family: "dutti-daily-regular",Helvetica,arial,sans-serif;
        padding: 16px;
        font-weight: normal;
        font-size: 14px;
        line-height: 1;
        background-color: #fff;
        border-color: #E3E3E3;
        color: #292929;
        max-width: 100%;
        width: 100%;
        align-items: center;
        border: 1px solid #E3E3E3;
        -webkit-appearance: none;
        -webkit-box-align: center;
        justify-content: flex-start;
        position: relative;
        vertical-align: top;
        border-radius: 0;
        height: 48px;
        margin-bottom: 22px;

        &:focus {
            outline: 1px solid rgb(42,42,42);
        }
    }
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