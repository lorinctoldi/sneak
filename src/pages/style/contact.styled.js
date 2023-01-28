import styled from 'styled-components'

export const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        text-align: center;
        line-height: 24px;
        font-size: 16px;
    }

    h1 {
        margin-bottom: 12px;
        font-size: 28px;
        text-transform: unset;
        line-height: 1.4;
        font-weight: 500;
        letter-spacing: -0.2px;
        font-family: RecklessNeue-Book;
    }

    @media (max-width: 767px) {
        padding: 0px 20px 0 20px;
    }
`