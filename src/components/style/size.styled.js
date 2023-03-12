import styled from 'styled-components';

export const Hover = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgb(0,0,0,0.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1002;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${props => props.displayState ? 1 : 0};
    transition: all .5s;
`

export const Container = styled.div`
    background-color: rgb(255,255,255);
    border-radius: 6px;

    @media (max-width: 767px) {
        position: fixed;
        bottom: ${props => props.displayState ? '0px' : '-70vh'};
        left: 0;
        right: 0;
        transition: all .5s;
    }
`

export const Inner = styled.div`
    max-width: 800px;
    width: 80vw;
    font-family: Dia-Regular;
    font-size: 14px;
    text-transform: uppercase;
    line-height: 42px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background-color: rgb(255, 255, 255);
    gap: 6px;
    margin: auto;
    padding: 30px;
    border-radius: 6px;

    @media (max-width: 767px) {
        padding: 5vh 0;
        height: 70vh;
        min-height: 60vh;
        width: 90%;
    }

    div {
        background-color: rgb(241,239,238);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        border: 1px solid rgb(241, 239, 238);
        cursor: pointer;
        transition-duration: .5s;

        &:hover {
            background-color: rgb(27,27,27);
            color: rgb(255,255,255);
        }
    }
`