import styled from "styled-components"

export const Nav = styled.nav`
    display: flex;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 72px;
    width: 100vw;
    padding: 0 30pt;
    background: white;

    @media (max-width: 992px) {
        height: 50px;
        padding-left: 12pt;
        padding-right: 12pt;
    }
`

export const Left = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;

    div:nth-child(1) {
        padding-right: 24px;
    }

    @media (max-width: 767px) {
        div:nth-child(1) {
            padding-right: 16px;
        }

        div:nth-child(2) {
            width: 140px;
            position: relative;

            svg{
                width: 100%;
            }
        }
    }
`

export const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div {
            position: relative;
            padding: 12px 8px;
            font-family: "DuttiW-Medium",Helvetica,"Arial","Lucida Grande",sans-serif;
            font-size: 14px;
            color: #292929;
            text-transform: uppercase;
            cursor: pointer;
            transition: all 300ms;

            &:hover {
                opacity: 0.5;
            }
        }
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

    @media (max-width: 992px) {
        display: none;
    }
`

export const Right = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: right;
    justify-content: end;

    ul {
        display: flex;
        align-items: center;
        list-style: none;
    }

    li {
        display: flex;
        padding-inline-end: 16px;
        position: relative;
        cursor: pointer;
        transition: all 300ms;

        &:hover {
            opacity: 0.5;
        }
    }

    button {
        font-family: "DuttiW-Medium",Helvetica,"Arial","Lucida Grande",sans-serif;
        font-weight: inherit;
        position: relative;
        border: 0;
        transform: none;
        cursor: pointer;
        background: initial;
        padding: 0;
        display: flex;
    }

    @media (max-width: 767px) {
        span {
            display: none;
        }
    }
`

export const SmallIcon = styled.div`
    display: none;

    @media (max-width: 767px) {
        display: inline;
    }
`

export const BasketCounter = styled.div`
    height: 16px;
    width: 16px;
    max-height: 16px;
    max-width: 16px;
    background: #8E8E8E;
    color: #fff;
    font-size: 10px;
    position: absolute;
    right: 1px;
    top: -8px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
`

export const SearchIcon = styled.div`
    padding-right: 16px;

    @media (max-width: 767px) {
        padding-right: 0;
    }
`