import React from 'react'

import { FooterElement } from './style/footer.styled'

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