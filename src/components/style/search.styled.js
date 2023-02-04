import styled from 'styled-components'

export const Section = styled.section`    
    box-sizing: border-box;
    line-height: 1.15;
    font-size: 14px;
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    position: fixed;
    width: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    background: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    z-index: 2000;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column;
    overflow: scroll;
    transition: all .8s;
`

export const Header = styled.header`
    max-width: 1920px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    -webkit-box-flex: 0;
    align-items: flex-start;
    -webkit-box-align: start;
    flex: 0 0 auto;
    width: 100%;
`

export const SearchBar = styled.div`
    display: flex;
    margin: 0 308px 0 310px;
    border-bottom-color: #000;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    height: 70px;
    -webkit-box-align: center;
    align-items: center;    
    border-bottom: 1px solid #eaeaea;
    outline: none;
    border-bottom-color: #000;

    div {
        display: flex;
        -webkit-box-flex: 1;
        flex: 1 1 auto;    
        position: relative;
        z-index: 0;
    }

    input {
        margin: 0;
        margin-left: 14px;
        font-size: 16px;
        height: 70px;
        padding: 3px 0 0 0;    
        border: none;
        text-transform: uppercase;
        -webkit-box-flex: 1;
        flex: 1 1 auto;
        font-family: BasisGrotesquePro-Medium,Helvetica Neue,Helvetica,Arial,sans-serif;
        outline-offset: -2px;
        -webkit-appearance: none;
        overflow: visible;
        margin-bottom: 1px;
        letter-spacing: .4px;

        &:focus {
            outline: none;
        }

        &::placeholder {
            color: rgb(153,153,153);
            font-size: 14px;
        }
    }

    @media (max-width: 1024px) {
        margin: 0;
        height: 50px;
        padding: 14px 20px 15px;
        width: 100%;
        border-bottom: 1px solid #eaeaea;
        align-items: center;
        font-size: 20px;

        svg {
            width: 1em;
            z-index: 2;
        }

        input {
            font-size: 16px;
            font-weight: 500;
            height: 20px;
            letter-spacing: .5px;
            line-height: 20px;
            width: auto;
            padding: 0 0 0 12px;
            margin: 0;
        }
    }
`

export const Results = styled.div`
    padding-left: 50px;
    margin-left: auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row nowrap;
    max-width: calc(960px + 50vw);
    -webkit-box-flex: 1;
    flex: 1 0 calc(100% - 100px);
    overflow-y: hidden;
    width: 100%;
    display: flex;

    aside {
        position: relative;
        -ms-flex: 0 0 260px;
        flex: 0 0 260px;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column nowrap;
    }

    main {
        overflow: scroll;
        -webkit-box-flex: 1;
        flex: 1 1 100%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column nowrap;

        aside {
            padding-right: calc(-910px + 50vw);
            -webkit-box-align: start;
            align-items: flex-start;
            flex-flow: row nowrap;
            -webkit-box-flex: 0;
            flex: 0 0 auto;    display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
        }

        section {
            padding-right: calc(-927px + 50vw);
            will-change: transform;
            flex: 1 1 auto;
            margin-top: 20px;
            -webkit-box-flex: 1;    
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            flex-flow: row wrap;
            width: 100%;
            overflow-x: scroll;
            -ms-overflow-style: none;
            scrollbar-width: none;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    @media (max-width: 1024px) {
        margin: 0;
        max-width: 100%;
        flex: 1 1 auto;

        padding: 0 0 0 10px;

        aside {
            display: none;
        }
    }
`

export const Inner = styled.section`
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column nowrap;
    width: 100%;
    transition: all .4s;

    aside {
        width: 100%;
        flex-direction: column;
        padding: 30px 0 0 0;
        display: block !important;

        header {
            display: flex;
            flex: 0 0 auto;
            -webkit-box-flex: 0;
        }

        h1 {
            margin: 0;
            text-transform: uppercase;
            letter-spacing: .2px;
            font-family: HelveticaNeueLTPro-BdCn;
            font-size: 16px;
            font-weight: 400;
            padding: 0 0 20px;

            &:before {
                content: "";
                width: 26px;
                height: 5px;
                display: inline-block;
                border-top: 1px solid #000;
                margin-right: 14px;
            }
        }
    }
`

export const Row = styled.div`
    display: flex;
    flex: 1 0 auto;
    -webkit-box-flex: 1;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-flow: column nowrap;

    aside {
        width: 100%;
        align-self: flex-start;
        background-color: #fff;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row nowrap;
        overflow-y: hidden;
        position: relative;
        z-index: 0;
        padding: 0;
        border-bottom: 1px solid #eaeaea;  
        padding: 0;
    }

`

export const InnerRow = styled.div`
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    min-width: 0;
    position: relative;
    width: 100%;

    &:before {
        background: -webkit-gradient(linear,right top,left top,from(hsla(0,0%,100%,0)),color-stop(1.3%,hsla(0,0%,100%,.013)),color-stop(4.9%,hsla(0,0%,100%,.049)),color-stop(10.4%,hsla(0,0%,100%,.104)),color-stop(17.5%,hsla(0,0%,100%,.175)),color-stop(25.9%,hsla(0,0%,100%,.259)),color-stop(35.2%,hsla(0,0%,100%,.352)),color-stop(45%,hsla(0,0%,100%,.45)),color-stop(55%,hsla(0,0%,100%,.55)),color-stop(64.8%,hsla(0,0%,100%,.648)),color-stop(74.1%,hsla(0,0%,100%,.741)),color-stop(82.5%,hsla(0,0%,100%,.825)),color-stop(89.6%,hsla(0,0%,100%,.896)),color-stop(95.1%,hsla(0,0%,100%,.951)),color-stop(98.7%,hsla(0,0%,100%,.987)),to(#fff));
        content: "";
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 50;
        transition: opacity .15s ease;
        width: 30px;
    }

    &:after {
        background: linear-gradient(90deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.013) 1.3%,hsla(0,0%,100%,.049) 4.9%,hsla(0,0%,100%,.104) 10.4%,hsla(0,0%,100%,.175) 17.5%,hsla(0,0%,100%,.259) 25.9%,hsla(0,0%,100%,.352) 35.2%,hsla(0,0%,100%,.45) 45%,hsla(0,0%,100%,.55) 55%,hsla(0,0%,100%,.648) 64.8%,hsla(0,0%,100%,.741) 74.1%,hsla(0,0%,100%,.825) 82.5%,hsla(0,0%,100%,.896) 89.6%,hsla(0,0%,100%,.951) 95.1%,hsla(0,0%,100%,.987) 98.7%,#fff);
        content: "";
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 50;
        transition: opacity .15s ease;
        width: 30px;
    }

    div {
        margin-left: -5px;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row nowrap;
        overflow-x: scroll;
        user-select: none;
        padding-bottom: 17px;
        margin-bottom: -17px;

        article {
            margin: 0 5px;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-flow: column nowrap;
            display: flex;
            width: calc(15.38462vw - 57.69231px);
            max-width: 237.69231px;
            display: flex;
            -webkit-box-flex: 0;
            flex: 0 0 auto;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-flow: column nowrap;

            @media (max-width: 1024px) {
                width: calc(40vw - 10px);
                max-width: 200px;
            }

            section {
                width: 100%;
                display: flex;
                -webkit-box-flex: 0;
                flex: 0 0 auto;
                -webkit-box-align: start;
                align-items: flex-start;
                position: relative;
                margin: 0;
                padding: 0;

                img {
                    margin: 0 0 20px 0;
                    width: 100%;
                    vertical-align: middle;
                    border-style: none;
                    transition: opacity .3s ease-out;
                }
            }

            h1 {
                margin: 0;
                padding: 0;
                text-align: left;
                font-family: HelveticaNeueLTPro-BdCn;
                font-size: 12px;
                font-weight: 500;
                -webkit-box-ordinal-group: 3;
                overflow: hidden;
                text-transform: uppercase;
                text-overflow: ellipsis;
                white-space: nowrap;

                &:before {
                    content: none;
                }
            }

            div {
                order: 3;
                font-family: HelveticaNeueLTPro-BdCn;
                font-size: 12px;
                margin: 11px 0 17px 0;
                display: flex;
                flex-wrap: wrap;

                strong {
                    color: grey;
                    text-decoration: line-through;
                    line-height: 17px;
                }

                div { 
                    padding: 0;
                    margin: 0 0 0 0.5em;
                    line-height: 17px;

                    strong {
                        color: #8b0100;
                        text-decoration: none;
                        font-weight: 700;
                    }
                }
            }
        }

`

export const CloseIcon = styled.div`
    padding: 36px 36px;
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
        width: 16px;
        height: 18px;
        overflow: hidden;
        fill: #000;
        stroke-width: 8px;
        stroke-linecap: round;
        stroke: currentColor;
    }

    @media (max-width: 1024px) {
        padding: 10px 20px;
        top: 55px;
        z-index: 10;
    }
`