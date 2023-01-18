import React from 'react'
import styled from 'styled-components'

const FooterElement = styled.footer`
    list-style: none;
    margin: 0;
    margin-left: -8px;
    display: flex;
    width: 100%;
    padding: 0 10px;
    background: transparent;
    align-items: flex-start;

    div {
        padding-right: 0;
        flex: 1 1 50%;
        padding: 0 15px 0 15px;
        margin-bottom: 0px;
        display: flex;
        width: 100%;
    }

    ul {
        padding: 0;
        margin: 0;
    }

    li {
        display: inline-block;
        vertical-align: middle;
        padding: 4px 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        text-decoration: none;
        color: #313131 !important;
        transition: 0.2s;
        text-decoration: none !Important;
        font-size: 12px;
        letter-spacing: 0.4px;
        text-transform: uppercase;
    }

    small {
        margin-right: 10px;
        font-size: 14px;
        margin-top: 6px;
    }

    @media (max-width: 750px) {
        display: none;
    }
`

const Footer = () => {
  return (
    <FooterElement>
        <div>
            <ul>
                <li>about</li>
                <li>brand list</li>
                <li>terms</li>
                <li>privacy</li>
                <li>contact</li>
            </ul>
        </div>
        <small>
        © 2023 Sneak in Peace
        </small>
    </FooterElement>
  )
}

export default Footer