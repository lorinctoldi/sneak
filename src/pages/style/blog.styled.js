import styled from 'styled-components'

export const VideoContainer = styled.div`
background: #fff;
display: block;
height: 80vh;
padding: 74px 8px 0;
position: relative;
width: 100%;

a {
  color: #fff;
  bottom: 0;
  left: 0;
  padding: 20px 40px;
  max-width: 430px;
  z-index: 200;
  position: absolute;

  h2:nth-child(1) {
    font-size: 16px;
    font-weight: 400;
    color: white;
    margin-bottom: 2px;
    font-family: Dia-Regular, Arial, Helvetica, sans-serif;
    text-transform: none;
    word-wrap: break-word;
    letter-spacing: 0;
  }

  h2:nth-child(2) {
    font-family: RecklessNeue-Book;
    font-weight: 400;
    font-size: 32px;
    text-transform: unset;
    letter-spacing: 0.2px;
    font-size: 26px;
    margin-top: 0;
  }
}

@media (max-width: 767px) {
  height: 70vh;

  a {
    text-align: center;
    background-image: linear-gradient(rgba(0,0,0,0),#0c0c0c54);
    left: 8px;
    right: 8px;
    border-radius: 6px;
    max-width: none;
  }
}
`

export const Inner = styled.div`
width: calc(100% - 16px);
height: calc(80vh - 8px);
border-radius: 6px;
background: #000;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: fixed;

div {
  background: #f0eeed;
  height: 100%;
  overflow: hidden;
  padding: 0;
  position: relative;
  border-radius: 6px;
  -webkit-mask-image: -webkit-radial-gradient(white, black);    
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

video {
  position: absolute; 
  right: 0; 
  bottom: 0;
  min-width: 100%;
}

@media (max-width: 767px) {
  height: calc(70vh - 8px);

  div {
    background: url(//cdn.shopify.com/s/files/1/0493/5663/6318/t/287/assets/sneak-tv-intro.jpg?v=4421971…);
  }

  video {
    display: none;
  }
}

`

export const Tags = styled.div`
display: block;
position: relative;
padding: 0px 20px 8px 20px;
background: #fff;
overflow: auto;
white-space: nowrap;

@media (max-width: 767px) {
  position: sticky;
  top: 48px;
  z-index: 1;
}
`

export const Tag = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 8px;
  padding: 5px 10px 4px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-size: 11px;
  margin-right: 4px;
  left: -10px;
  background-color: ${props => props.selected ? '#646464' : '#f0eeed'};
  color: ${props => props.selected ? '#fff' : '#3d3d3d'};
`

export const CardContainer = styled.div`
background: white;
position: relative
`