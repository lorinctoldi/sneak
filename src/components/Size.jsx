import { useEffect, useState } from 'react'
import { Hover, Container, Inner } from './style/size.styled'
import { useDispatch, useSelector } from 'react-redux'
import { changeSizeDisplay } from '../redux/sizeDisplay'


const Size = () => {
  const { size_display } = useSelector(state => state.size_display);
  const [display, setDisplay] = useState(size_display)
  const dispatch = useDispatch()

  function close() {
    setDisplay(false)
    setTimeout(() => {
      dispatch(changeSizeDisplay())
    }, 500);
  }

  useEffect(() => {
    if(size_display) {
      setDisplay(size_display)
    }
  }, [size_display])

  const sizes = ['35.5','36','36.5','37.5','38','38.5','39','40','40.5','41','42','42.5','43','44','44.5','45','45.5','46','47','47.5','48.5','49.5']

  return (
    <>
      {
        size_display ?
        <Hover displayState={display} onClick={(e) => {if(e.target == e.currentTarget) {close()}}}>
            <Container displayState={display}>
              <Inner>
                {sizes.map(size => {
                  return (
                    <div>
                      EU {size}
                    </div>
                  )
                })}
              </Inner>
            </Container>
        </Hover>
        : 
        ''
      }
    </>
  )
}

export default Size