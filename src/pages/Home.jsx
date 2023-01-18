import React from 'react'
import styled from 'styled-components'

import Video from '../assets/video/video.mp4'

import { Cards, Footer } from '../components'

const Home = () => {
  return (
    <>  
      <div className='grid'>
        <div className='home-intro'>
          <div className='grid-item'>
            <div className='video-container'>
              {/* <video className='intro-video' src={Video}></video> */}
            </div>
          </div>
          <div className='grid-item'>
            <div className='intro-container'>
              <div className='intro-container-inner'>
                <div className='sneakinpeace-logo'>
                  <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/sneak-in-peace-main-logo.png?v=94544080702387007841673465587" alt="" />
                </div>
                <h1 className='home-intro-title'>
                A destination to discover & collect the latest luxury sneakers
                </h1>
                <div className='home-signup-buttons'>
                  <div className='home-btn-half-left'>
                    <li className='home-gender-select-item'>
                      <div className='home-gender-select'>
                        Men's Sneakers
                      </div>
                    </li>
                  </div>
                  <div className='home-btn-half-right'>
                    <li className='home-gender-select-item'>
                      <div className='home-gender-select'>
                        Men's Sneakers
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cards />
      <Footer />
    </>
  )
}

export default Home