import styled from "styled-components"

export const Container = styled.div`
    padding-top: 72px;

    @media (max-width: 992px) {
        padding-top: 50px;
    }
`

export const Inner = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #fff;
    flex-direction: row;
    flex-wrap: wrap;
`

export const Full = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: fit-content;
    background: #f0eeed;
    margin: 0 8px 8px;
    border-radius: 6px;
    padding: 60px;
    align-items: center;
    justify-content: center;

    div {
        max-width: 1040px;
        padding: 20px 40px;
    }

    h2 {
        text-transform: unset;
        font-family: RecklessNeue-Book;
        font-weight: 400;
        letter-spacing: -0.4px;
        line-height: 44px;
        margin-bottom: 10px;
        color: #000;
        display: block;
        position: relative;
        left: 0px;
        text-align: center;
        padding: 10px 0px 0px;
        font-size: 32px;
    }

    p {
        margin: 0 0 19.44444px;
    }

    @media (max-width: 767px) {
        max-width: 1040px;
        padding: 20px;

        h2 {
            font-size: 22px;
            line-height: 34px;
        }
    }
`

export const Half = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    min-height: auto;
    background: #fff;
    flex-direction: row;
    margin: 0 4px 8px;
    border-radius: 6px;

    div {
        position: relative;
        width: 50%;
        margin: 0 4px;
        background: #f0eeed;
        border-radius: 6px;
        justify-content: center;
        align-content: center;
        flex-wrap: wrap;
        flex-direction: column;
        text-align: center;
        padding: 100px;
        display: flex; 
        align-items: center;
    }

    h2 {
        color: #000;
        display: block;
        position: relative;
        left: 0px;
        text-align: center;
        padding: 10px 0px 0px;
        font-size: 32px;
        font-weight: 400;
        line-height: 44px;
        margin-bottom: 10px;
        letter-spacing: -0.4px;
        font-family: RecklessNeue-Book;
        font-weight: 400;
        text-transform: capitalize;
    }

    p {
        margin: 0;
    }

    span {
        max-width: 480px;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 1px 1px 15px 5px rgb(0 0 0 / 9%);
    }

    img {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0 12px 8px 4px;

        div {
            width: 100%;
            padding: 60px;
            margin-bottom: -8px;
        }

        h2 {
            font-size: 22px;
            line-height: 34px;
        }

        p {
            margin-bottom: 0;
        }
    }
`