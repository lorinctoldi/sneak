import { Container, Card, Inner, Upper, ImageContainer, Info, ColorIndex, PriceIndex } from './style/products.styled'
import { Navbar, Product } from '../components'
import { useEffect, useRef } from 'react';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import { change } from '../redux/productDisplay'

const Products = () => {
  const dispatch = useDispatch()

  const data = [
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/balenciaga-TrackGraffitiTrainersinblackandwhitemeshandnylon-low-top-sneakers-1.jpg?v=1677247759'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/balenciaga-Track2.0Trainersinbeigeandblackmeshandnylon-low-top-sneakers-1.jpg?v=1677247440'
    }, 
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/kiko-kostadinov-tonkin-nero-low-top-sneakers-1.jpg?v=1677179635'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/kiko-kostadinov-tonkin-dune-low-top-sneakers-1.jpg?v=1677179569'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/loewe-Deconstructedsneakerincalfskin-blue-low-top-sneakers-1.jpg?v=1677175081'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/amiri-TIEDYESKELTOPLOW-top-sneakers-1.jpg?v=1677159961'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/amiri-skel-top-low-baby-blue-low-top-sneakers-1_jpg.jpg?v=1677159896'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/amiri-skel-top-low-baby-pink-low-top-sneakers-1.jpg?v=1677159817'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/dior-b27-DeepBlueandWhiteSmoothCalfskinwithWhiteDiorObliqueGalaxyLeather-low-top-sneakers-1.jpg?v=1677000923'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/dior-b27-PinkandCreamSmoothCalfskinwithBeigeandBlackDiorObliqueJacquard-low-top-sneakers-1.jpg?v=1676998295'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/dior-b30-PinkMeshandTechnicalFabric-low-top-sneakers-1.jpg?v=1676997419'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/dior-b30-BlueMeshandTechnicalFabric-low-top-sneakers-1.jpg?v=1676997280'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/dior-b31-runner-WhiteTechnicalMeshandGrayRubberwithWarpedCannageMotif-low-top-sneakers-1.jpg?v=1676989350'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/TRAVISSCOTTXAIRJORDAN1LOWOGSP-phantom-black-low-top-sneakers-1.jpg?v=1670944520'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/TRAVISSCOTTXAIRJORDAN1LOWSAIL_RED_RIDGEROCK_MUSLIN-low-top-sneakers-1.jpg?v=1658138402'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/NIKEXFRAGMENTDESIGNXTRAVISSCOTTAIRJORDAN1LOWOGSAIL_MILITARYBLUE_BLACK-1.jpg?v=1627654656'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/Jordan1HighOGSPfragmentdesignxTravisScott-high-top-sneakers-1.jpg?v=1627134700'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/AIRJORDAN6RETROXTRAVISSCOTT-british-khaki-high-top-sneakers-1.jpg?v=1619521242'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/NikexTravisScottAirForceLow1sneakers-1.jpg?v=1606748982'
    },
    {
      img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/products/NikeAirForce1LowTravisScottCactusJack.jpg?v=1606748934'
    },
  ]

  const [displayData, setDisplayData] = useState(data.slice(0,9))

  const ref = useRef(null);

  const scrollHandler = (e) => {

    const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight

    if(bottom) {
      setDisplayData(prevArray => prevArray.concat(...data.slice(ref.current.getAttribute('value'), ref.current.getAttribute('value') + 9)));
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);
    return () => {
      window.removeEventListener("scroll", scrollHandler, true)
    }
}, []);

  return (
    <>
      <Navbar />
      <Container value={displayData.length} ref={ref} id='slide' onScroll={() => alert('Ok')}>
        {
          displayData.length ?
          displayData.map((object, index) => {
            if(object.img) {
                return (
                  <Card onClick={() => dispatch(change())}>
                    <Inner >
                      <Upper style={{animationDelay: `${index % 9 * 200}ms`}}>
                        <ImageContainer>
                          <img 
                            
                            src={object.img}
                            alt="B27 Smooth Calfskin with Dior Oblique Jacquard Deep Blue / White Low Top Sneakers" 
                            
                            sizes="375.20000000000005px"
                          />
                        </ImageContainer>
                      </Upper>
                      <Info style={{animationDelay: `${index % 9 * 200}ms`}}>
                        <div>
                          <a href="">Dior jordan 1</a>
                        </div>
                        <div>
                          B27 Smooth Calfskin with Dior Oblique Jacquard Deep Blue / White Low Top Sneakers
                        </div>
                      </Info>
                      <ColorIndex>
                        <div>
                          <span>
                            <span>
                              <span></span>
                            </span>
                          </span>
                        </div>
                      </ColorIndex>
                      <PriceIndex>
                        <span>
                          £899
                        </span>
                      </PriceIndex>
                    </Inner>
                  </Card>
                )
            }
          })
          : 
          ''
        }
      </Container>
      <Product />
    </>
  )
}

export default Products