import React from 'react'
import { useState } from 'react'
import { MenuContainer, MenuInner, Left, LeftTop, LeftTopOptions, LeftBottom, LeftBottomOptions, Right, RightTop, RightBottom} from './style/menu.styled'

const Menu = () => {

    const data = [
        {
            title: 'men new in', 
            options: []
        },
        {
            title: 'men collection', 
            options: [
                {title: 'Jackets and Puffers'},
                {title: 'Leather Jackets'},
                {title: 'Blazers and Overshirts'},
                {title: 'Sweaters'},
                {title: 'Cardigans'},
                {title: 'Shirts'},
                {title: 'Poolo Shirts & T-Shirts'},
                {title: 'Trousers'},
                {title: 'Jeans'},
                {title: 'Formal wear'},
                {title: 'Formal shirts'},
                {title: 'Shoes'},
                {title: 'Accessories'},
                {title: 'Pyjamas & Underwear'},
                {title: 'Perfumes & Body Care'},
                {title: 'Join Life'},
            ]
        },
        {
            title: 'men sale', 
            options: [
                {title: 'Up to -60%'},
                {title: 'Coats & Jackets'},
                {title: 'Blazers'},
                {title: 'Jumpers & Cardigans'},
                {title: 'Shirts'},
                {title: 'Polo Shirts & T-Shirts'},
                {title: 'Trousers'},
                {title: 'Suits'},
                {title: 'Footwear, Accessories and Homewear'},
            ]
        },
        {
            title: 'men new in', 
            options: []
        },
        {
            title: '',
            options: []
        }
    ]
    const [choosen, setChoosen] = useState(0)
    const [animation, setAnimation] = useState(1)

    function changeOptions(index) {
        if(choosen === index) {
            setChoosen(data.length - 1)
        } else {
            setAnimation('hideCategoryList')
            setTimeout(() => {
                setChoosen(index)
                setAnimation('showCategoryList')
            }, 300);
        }
    }

  return (
    <>
        <MenuContainer>
            <MenuInner>
                <Left>
                    <LeftTop>
                        <button>
                            <span>
                                <div>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.465294C0.841709 0.270032 1.15829 0.270032 1.35355 0.465294L9 8.11174L16.6464 0.465294C16.8417 0.270032 17.1583 0.270032 17.3536 0.465294C17.5488 0.660556 17.5488 0.977139 17.3536 1.1724L9.70711 8.81885L17.3536 16.4653C17.5488 16.6606 17.5488 16.9771 17.3536 17.1724C17.1583 17.3677 16.8417 17.3677 16.6464 17.1724L9 9.52596L1.35355 17.1724C1.15829 17.3677 0.841709 17.3677 0.646447 17.1724C0.451184 16.9771 0.451184 16.6606 0.646447 16.4653L8.29289 8.81885L0.646447 1.1724C0.451184 0.977139 0.451184 0.660556 0.646447 0.465294Z" fill="#292929"></path>
                                </svg>
                                </div>
                            </span>
                        </button>
                        <div>
                            <LeftTopOptions>
                                <div>
                                    Women
                                </div>
                                <div>
                                    Men
                                    <span />
                                </div>
                            </LeftTopOptions>
                        </div>
                    </LeftTop>
                    <LeftBottom>
                        <ul>
                            {
                                data.map((obj, index) => {
                                    return (
                                        <div 
                                            key={index} 
                                            onClick={
                                                obj.options.length > 0 
                                                ? 
                                                () => changeOptions(index)
                                                : 
                                                () =>  window.location.replace('https://hu.wikipedia.org/wiki/Public_relations')}
                                        >
                                            <li>
                                                    {obj.title}
                                                    <span style={{width: choosen == index ? '100%' : '0px'}}></span>
                                            </li>
                                            <LeftBottomOptions style={{maxHeight: choosen == index ? 'max-content' : 0}}>
                                                <ul>
                                                    {data[choosen].options.map(obj => {
                                                        return (
                                                            <li>
                                                                {obj.title}
                                                            </li>
                                                        )}
                                                    )}  
                                                </ul>
                                            </LeftBottomOptions>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </LeftBottom>
                </Left>
                <Right>
                    <RightTop>
                        <div>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.41658 1.5C4.13384 1.5 1.5 4.07393 1.5 7.21585C1.5 10.3578 4.13384 12.9317 7.41658 12.9317C10.6993 12.9317 13.3332 10.3578 13.3332 7.21585C13.3332 4.07393 10.6993 1.5 7.41658 1.5ZM0.5 7.21585C0.5 3.49193 3.61176 0.5 7.41658 0.5C11.2214 0.5 14.3332 3.49193 14.3332 7.21585C14.3332 10.9398 11.2214 13.9317 7.41658 13.9317C3.61176 13.9317 0.5 10.9398 0.5 7.21585ZM12.3215 12.4055C12.5137 12.2072 12.8302 12.2022 13.0286 12.3943L15.3475 14.6407C15.5459 14.8329 15.5509 15.1494 15.3588 15.3477C15.1666 15.5461 14.8501 15.5511 14.6518 15.359L12.3328 13.1125C12.1344 12.9204 12.1294 12.6039 12.3215 12.4055Z" fill="#292929"></path>
                            </svg>
                            <input type="search" placeholder='What are you looking for?' />
                        </div>
                    </RightTop>
                    <RightBottom style={{animationName: animation}}>
                        <div>
                            <ul>
                                {data[choosen].options.map(obj => {
                                    return (
                                        <li>
                                            {obj.title}
                                        </li>
                                    )}
                                )}  
                            </ul>
                        </div>
                    </RightBottom>
                </Right>
            </MenuInner>
        </MenuContainer>
    </>
  )
}

export default Menu