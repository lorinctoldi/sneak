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
    transition: all 0.3s ease-out;
`

export const HeaderMobile = styled.aside`
    display: none;

    div {
        color: #292929;
        font-variant-ligatures: no-common-ligatures !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
        -webkit-box-direction: normal;
        padding: 0;
        vertical-align: baseline;
        box-sizing: inherit;
        outline: none!important;
        display: flex;
        position: relative;
        z-index: 1;
        -webkit-box-pack: center;
        justify-content: center;
        font-weight: 400;
        text-transform: uppercase;
        border: solid #eaeaea;
        background: none;
        width: calc(50% - 20px);
        font-size: 12px;
        line-height: 14px;
        height: 30px;
        margin: 10px -.5px 10px 20px;
        padding-right: 20px;
        border-width: 0 1px 0 0;
    }

    button {
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-box-direction: normal;
        color: inherit;
        font: inherit;
        box-sizing: inherit;
        outline: none!important;
        z-index: 1;
        padding: 0;
        border: none;
        border-radius: 0;
        cursor: pointer;
        margin: 0;
        overflow: visible;
        -webkit-appearance: none;
        font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
        background: none;
        font-size: 12px;
        text-transform: uppercase;
        line-height: 14px;
    }

    span {
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-box-direction: normal;
        color: inherit;
        font: inherit;
        cursor: pointer;
        font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
        text-transform: uppercase;
        border: 0;
        vertical-align: baseline;
        background: transparent;
        box-sizing: inherit;
        outline: none!important;
        font-size: inherit;
        margin: 0;
        padding: 0;
        line-height: 17px;
    }

    @media (max-width: 1024px) {
        color: #292929;
        font-variant-ligatures: no-common-ligatures !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        line-height: 1.15;
        font-weight: 400;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: inherit;
        outline: none!important;
        display: flex;
        -webkit-box-align: start;
        align-items: flex-start;
        -webkit-box-flex: 0;
        flex: 0 0 auto;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row wrap;
        background: #fff;
        z-index: 1;
        position: relative;
        transition: transform .4s ease-out,-webkit-transform .4s ease-out;
    }
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

    button {
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-box-direction: normal;
        font: inherit;
        box-sizing: inherit;
        outline: none!important;
        z-index: 1;
        padding: 0;
        background: none;
        border: none;
        border-radius: 0;
        cursor: pointer;
        margin: 0;
        font-size: inherit;
        line-height: inherit;
        overflow: visible;
        text-transform: none;
        -webkit-appearance: none;
        font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
        color: #000;
        transform: translateY(1px);
        border: none;
        background: none;
        text-transform: uppercase;
        margin-left: 10px;
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

        button {
            font-size: 14px;
            color: rgba(0,0,0,.4);
            display: none;
        }
    }
`

export const Container = styled.div`
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
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    main {
        overflow: hidden;
        -webkit-box-flex: 1;
        flex: 1 1 100%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column nowrap;
        overflow: scroll;

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

        overflow-y: hidden;
    }

`

export const InnerRow = styled.div`
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    min-width: 0;
    position: relative;
    width: 100%;
    overflow: scroll;
    overflow-y: hidden;

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
        overflow: scroll;

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
            overflow: scroll;

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

export const FilterContainer = styled.div`
    height: 100%; 
    overflow-x: hidden;
    transition: all .3s ease-out; 
    position: relative;

    &::-webkit-scrollbar {
        display: none;
      }
`


export const DesktopFilter = styled.div`
    margin-right: 30px;
    overflow: scroll;
    position: absolute;

    article {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column nowrap;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    h1 {
        color: #292929;
        font-variant-ligatures: no-common-ligatures !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-box-direction: normal;
        border: 0;
        vertical-align: baseline;
        background: transparent;
        box-sizing: inherit;
        outline: none!important;
        margin: 0;
        font-family: HelveticaNeueLTPro-BdCn;
        font-size: 16px;
        font-weight: 100;
        line-height: 17px;
        display: flex;
        border-bottom: 1px solid #eaeaea;
        margin-bottom: 20px;
        padding: 25px 0;
        cursor: default;
    }

    span {
        color: #292929;
        font-variant-ligatures: no-common-ligatures !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-box-direction: normal;
        font-family: HelveticaNeueLTPro-BdCn;
        font-weight: 100;
        line-height: 17px;
        text-transform: uppercase;
        cursor: default;
        border: 0;
        vertical-align: baseline;
        background: transparent;
        box-sizing: inherit;
        outline: none!important;
        font-size: inherit;
        margin: 0;
        padding: 0;
    }

    svg {
        color: #292929;
        font-variant-ligatures: no-common-ligatures !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-box-direction: normal;
        font-family: HelveticaNeueLTPro-BdCn;
        font-size: 16px;
        font-weight: 100;
        line-height: 17px;
        text-transform: uppercase;
        cursor: default;
        box-sizing: inherit;
        outline: none!important;
        transition: transform .4s ease-out,-webkit-transform .4s ease-out;
        overflow: hidden;
        vertical-align: middle;
        width: 17px;
        height: 17px;
        order: -1;
        transform: scale(1.2) translateY(-.5px);
        margin-right: 10px;

        g {
            color: #292929;
            font-variant-ligatures: no-common-ligatures !important;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            --offset-body: 0px;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            -webkit-box-direction: normal;
            font-family: HelveticaNeueLTPro-BdCn;
            font-size: 16px;
            font-weight: 100;
            line-height: 17px;
            text-transform: uppercase;
            cursor: default;
            stroke: none;
            stroke-width: 1;
            fill: none;
            fill-rule: evenodd;
            box-sizing: inherit;
            outline: none!important;
        }

        path:first-child {
            color: #292929;
            font-variant-ligatures: no-common-ligatures !important;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            --offset-body: 0px;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            -webkit-box-direction: normal;
            font-family: HelveticaNeueLTPro-BdCn;
            font-size: 16px;
            font-weight: 100;
            line-height: 17px;
            text-transform: uppercase;
            cursor: default;
            d: path("M 5.59551 5.59551 L 15 15");
            stroke: currentcolor;
            fill-rule: nonzero;
            box-sizing: inherit;
            outline: none!important;
            transition: transform .3s ease-out,-webkit-transform .3s ease-out;
            transform-origin: 15px 15px;
            transform: rotate(-45deg) translate(-.5px,-.5px);
        }

        path:nth-child(2) {
            transform: rotate(45deg);
            transform-origin: 15px 15px;
        }
    }

    ul {
        color: #292929;
        font-variant-ligatures: no-common-ligatures !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        line-height: 1.15;
        font-weight: 400;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        padding: 0;
        box-sizing: inherit;
        outline: none!important;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row wrap;
        overflow-y: hidden;
        transition-property: height,margin,padding;
        transition-duration: .5s;
        list-style: none;
        margin: 0;
        -webkit-box-ordinal-group: 2;
        order: 1;
        margin-bottom: 45px;
        padding-left: 0;
    }

    li {
        color: #292929;
        font-variant-ligatures: no-common-ligatures !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        line-height: 1.15;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
        border: 0;
        vertical-align: baseline;
        background: transparent;
        box-sizing: inherit;
        outline: none!important;
        transition-timing-function: ease-out;
        transition-property: height,opacity;
        transition-duration: .6s;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row wrap;
        flex-basis: 100%;
        list-style: none;
        font-weight: 400;
        font-size: inherit;
        margin: 0;
        padding: 0;
        display: inline-block;
        overflow: hidden;
        margin-bottom: 15px;
        cursor: default;
        transition: all .6s ease-out;
    }

    button {
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        list-style: none;
        color: inherit;
        font: inherit;
        box-sizing: inherit;
        outline: none!important;
        -webkit-box-align: center;
        align-items: center;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-flow: row nowrap;
        padding: 0;
        background: none;
        border: none;
        border-radius: 0;
        margin: 0;
        font-size: inherit;
        line-height: inherit;
        overflow: visible;
        text-transform: none;
        -webkit-appearance: none;
        text-align: left;
        font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
        font-weight: 700;
        cursor: pointer;
    }
`

export const SearchOption = styled.span`
    -webkit-font-smoothing: antialiased;
    --offset-body: 0px;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    list-style: none;
    color: inherit;
    font: inherit;
    -webkit-box-direction: normal;
    line-height: inherit;
    text-transform: none;
    text-align: left;
    cursor: pointer;
    border: 0;
    vertical-align: baseline;
    background: transparent;
    box-sizing: inherit;
    outline: none!important;
    margin: 0;
    padding: 0;
    font-family: HelveticaNeueLTPro-Roman !important;
    font-size: 14px;
    text-transform: none !important;
    font-weight: ${props => props.selected ? '700' : '100'} !important;

    &:after {
        content: "";
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: ${props => props.selected ? '#000' : '#00'};
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        margin-bottom: 4px;
    }
`



export const Results = styled.section`
    color: #292929;
    font-variant-ligatures: no-common-ligatures !important;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    --offset-body: 0px;
    line-height: 1.15;
    font-weight: 400;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    box-sizing: inherit;
    outline: none!important;
    align-content: flex-start;
    display: flex;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    flex-flow: row wrap;
    position: relative;
    width: 100%;
    margin: -5px;
    max-height: 100%;
    overflow: scroll;

    @media (max-width: 1024px) {
        margin: 0 !important;
        min-height: 734px;
    }

    article {
        color: #292929;
        font-variant-ligatures: no-common-ligatures !important;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        --offset-body: 0px;
        line-height: 1.15;
        font-weight: 400;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
        background: transparent;
        box-sizing: inherit;
        outline: none!important;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-flow: column nowrap;
        display: flex;
        transition: all .35s ease-out;
        margin: 5px;
        width: calc(25% - 10px);
        user-select: none;
        animation: result .8s;
        animation-name: result;
        animation-fill-mode: forwards;
        opacity: 0;

        @media (max-width: 1024px) {
            margin: 5px;
            width: calc(50% - 10px);
        }

        div {
            transition: opacity .3s ease-out;
            
            &:hover{
                opacity: .4;
            }
        }

        a {
            font-variant-ligatures: no-common-ligatures !important;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            --offset-body: 0px;
            line-height: 1.15;
            font-weight: 400;
            -webkit-text-size-adjust: 100%;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
            font-size: 100%;
            user-select: none;
            box-sizing: inherit;
            outline: none!important;
            display: flex;
            -webkit-box-flex: 0;
            flex: 0 0 auto;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-flow: column nowrap;
            width: 100%;
            color: inherit;
            text-decoration: none;
            background-color: rgba(0,0,0,0);

            section {
                font-variant-ligatures: no-common-ligatures !important;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                --offset-body: 0px;
                line-height: 1.15;
                font-weight: 400;
                -webkit-text-size-adjust: 100%;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
                user-select: none;
                -webkit-box-direction: normal;
                color: inherit;
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                vertical-align: baseline;
                background: transparent;
                box-sizing: inherit;
                outline: none!important;
                width: 100%;
                display: flex;
                -webkit-box-flex: 0;
                flex: 0 0 auto;
                -webkit-box-align: start;
                align-items: flex-start;
                position: relative;

                img {
                    font-variant-ligatures: no-common-ligatures !important;
                    text-rendering: optimizeLegibility;
                    -webkit-font-smoothing: antialiased;
                    --offset-body: 0px;
                    line-height: 1.15;
                    font-weight: 400;
                    -webkit-text-size-adjust: 100%;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    font-family: BasisGrotesque-Regular-Pro,Helvetica Neue,Helvetica,Arial,sans-serif;
                    user-select: none;
                    -webkit-box-direction: normal;
                    color: inherit;
                    padding: 0;
                    font-size: 100%;
                    background: transparent;
                    max-width: 100%;
                    border: 0;
                    box-sizing: inherit;
                    outline: none!important;
                    transition: opacity .3s ease-out;
                    vertical-align: middle;
                    border-style: none;
                    width: 100%;
                    margin: 0 0 20px 0;
                }
            }

            h1 {
                font-variant-ligatures: no-common-ligatures !important;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                --offset-body: 0px;
                line-height: 1.15;
                -webkit-text-size-adjust: 100%;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                user-select: none;
                -webkit-box-direction: normal;
                color: inherit;
                border: 0;
                vertical-align: baseline;
                background: transparent;
                box-sizing: inherit;
                outline: none!important;
                padding: 0;
                font-family: HelveticaNeueLTPro-BdCn;
                font-size: 12px;
                font-weight: 500;
                -webkit-box-ordinal-group: 3;
                order: 2;
                overflow: hidden;
                text-transform: uppercase;
                text-overflow: ellipsis;
                white-space: nowrap;
                text-align: left;
                margin: 0;
            }

            div {
                font-variant-ligatures: no-common-ligatures !important;
                text-rendering: optimizeLegibility;
                -webkit-font-smoothing: antialiased;
                --offset-body: 0px;
                line-height: 1.15;
                font-weight: 400;
                -webkit-text-size-adjust: 100%;
                -webkit-tap-highlight-color: rgba(0,0,0,0);
                user-select: none;
                -webkit-box-direction: normal;
                color: inherit;
                padding: 0;
                border: 0;
                vertical-align: baseline;
                background: transparent;
                box-sizing: inherit;
                outline: none!important;
                -webkit-box-ordinal-group: 4;
                order: 3;
                font-family: HelveticaNeueLTPro-BdCn;
                font-size: 12px;
                display: flex;
                flex-wrap: wrap;
                margin: 11px 0 17px 0;

                div {
                    font-variant-ligatures: no-common-ligatures !important;
                    text-rendering: optimizeLegibility;
                    -webkit-font-smoothing: antialiased;
                    --offset-body: 0px;
                    -webkit-text-size-adjust: 100%;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);
                    user-select: none;
                    -webkit-box-direction: normal;
                    color: inherit;
                    font-family: HelveticaNeueLTPro-BdCn;
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: 100%;
                    vertical-align: baseline;
                    background: transparent;
                    box-sizing: inherit;
                    outline: none!important;
                    font-weight: 400;
                    line-height: 17px;

                    strong {
                        font-variant-ligatures: no-common-ligatures !important;
                        text-rendering: optimizeLegibility;
                        -webkit-font-smoothing: antialiased;
                        --offset-body: 0px;
                        -webkit-text-size-adjust: 100%;
                        -webkit-tap-highlight-color: rgba(0,0,0,0);
                        user-select: none;
                        -webkit-box-direction: normal;
                        color: inherit;
                        line-height: 17px;
                        border: 0;
                        vertical-align: baseline;
                        background: transparent;
                        font-family: "dutti-daily-bold",Helvetica,arial,sans-serif;
                        font-weight: inherit;
                        box-sizing: inherit;
                        outline: none!important;
                        font-size: inherit;
                        margin: 0;
                        padding: 0;
                    }
                }
            }
        }
    }
`