import { Container, Inner, Full, Half } from './style/about.styled'
import { Navbar } from '../components'

const About = () => {
  return (
    <>
        <Navbar />
        <Container>
          <Inner>
            <Full>
              <div>
                <h2>
                  Sneak in Peace is a discovery platform for the most established and upcoming sneaker designers. 
                  We create a space for users to explore and share their favourite sneakers, whilst showcasing and supporting the world’s most exciting sneaker brands, designers and creatives. 
                  <p></p>
                  <p>Never in a hurry, Sneak in Peace.</p>
                </h2>
              </div>
            </Full>
            <Half>
              <div>
                <h2>Global Stores</h2>
                <p>Shop from select stores in your country, region or internationally.</p>
              </div>
              <div>
                <span>
                  <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/291/assets/brand-store-list.jpg?v=100159337511618717311674664131" alt="" />
                </span>
              </div>
            </Half>
            <Half>
              <div>
                <h2>Discover</h2>
                <p>Browse premuim, upcoming releases and sign up to be notified when they launch.</p>
              </div>
              <div>
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0493/5663/6318/t/291/assets/launching.jpg?v=76085105135810101991674664160" alt="" />
                </span>
              </div>
            </Half>
            <Half>
              <div>
                <h2>Collect</h2>
                <p>Save, curate and share your favourite styles via wishlists.</p>
              </div>
              <div>
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0493/5663/6318/t/291/assets/collect.jpg?v=140545132154803534321674664137" alt="" />
                </span>
              </div>
            </Half>
            <Half>
              <div>
                <h2>Watch & Shop</h2>
                <p>Explore the stories behind the people, the brands and the products.</p>
              </div>
              <div>
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0493/5663/6318/t/291/assets/watchandshop.jpg?v=133474177235185475011674664233" alt="" />
                </span>
              </div>
            </Half>
            <Half>
              <div>
                <h2>Designer History</h2>
                <p>Dive into an extensive back catalogue of designer and luxury sneakers.</p>
              </div>
              <div>
                <span>
                  <img src="https://cdn.shopify.com/s/files/1/0493/5663/6318/t/291/assets/branddesigners.jpg?v=101066747351261189071674664132" alt="" />
                </span>
              </div>
            </Half>
          </Inner>
        </Container>
    </>
  )
}

export default About