import React, { useEffect } from 'react'
import styled from 'styled-components';
import $ from 'jquery';

import { CardsElement, Controls, Container, Card, Inner, Image, Tag, Content } from './style/cards.styled';

const Cards = ({ align }) => {
    const data = [
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/upcoming_1eb96977-72e7-448c-a7d1-9590c73e0783_450x450_crop_center@2x.jpg?v=1673100426',
            title: 'releases',
            desc: 'The Upcoming Drops'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/slamjam_450x450_crop_center@2x.jpg?v=1673627155',
            title: 'upcoming',
            desc: 'Nike x Slam Jam'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/kidsuper_6c875125-2d62-4cc4-96c3-98ad2ddcd73d_450x450_crop_center@2x.jpg?v=1673629121',
            title: 'featured',
            desc: 'kidsuper'
        }, 
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/streetstyle-japan_450x450_crop_center@2x.jpg?v=1669910344',
            title: 'film',
            desc: 'Street Style - Fukuoka to Tokyo',
            videoTag: 'watch & shop'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/merrell_fa2acc11-23f5-4ffd-ab4e-1687e1205403_450x450_crop_center@2x.jpg?v=1673373553',
            title: 'sportstyle',
            desc: 'mercell 1TRL'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/casablanca_da1c0dc3-a575-4df2-9c3d-29418af3acef_450x450_crop_center@2x.jpg?v=1673459127',
            title: 'luxury',
            desc: 'casablanca'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/year_of_the_rabbit_7e3fb83c-acea-4fd0-937a-e8ee26e12d18_450x450_crop_center@2x.jpg?v=1673373690',
            title: 'selected',
            desc: 'year of the rabbit'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/collegium_d6cf12a0-4440-4532-859b-aa3633e740b1_450x450_crop_center@2x.jpg?v=1672686901',
            title: 'new gen',
            desc: 'collegium'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/pillowfeet_450x450_crop_center@2x.jpg?v=1672070074',
            title: 'selected',
            desc: 'pillow feet'
        }, 
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/stella_450x450_crop_center@2x.jpg?v=1670256286',
            title: 'luxury',
            desc: 'Stella McCartney'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/iyso-sneakers_4d8ef5c9-f58d-48a8-8229-7ced4b2ff76a_450x450_crop_center@2x.jpg?v=1668609538',
            title: 'Sportstyle',
            desc: 'iyso'
        },
        {
            img: 'https://cdn.shopify.com/s/files/1/0493/5663/6318/files/books_450x450_crop_center_2x_edec2bdc-088b-4d32-8801-f833a29c4127_450x450_crop_center@2x.webp?v=1663437196',
            title: 'books',
            desc: 'Alec Leach'
        }
    ]

    useEffect(() => {
        var leftBTN = document.querySelector('#left-btn');
        leftBTN.disabled = true;
        var rightBTN = document.querySelector('#right-btn');

        function goLeft(event) {
            var scrollAmount = document.querySelector('body').getBoundingClientRect().width * .25 - 2;

            $('#container').animate({
                scrollLeft: `-=${scrollAmount}px`
            }, "fast");
        }

        function goRight(event) {
            var scrollAmount = document.querySelector('body').getBoundingClientRect().width * .25 - 2;
            $('#container').animate({
                scrollLeft: `+=${scrollAmount}px`
            }, "fast");
        }

        leftBTN.addEventListener('click', goLeft);
        rightBTN.addEventListener('click', goRight);

        document.onkeydown = function (e) {
            switch (e.which) {
                case 37: 
                    goLeft();
                    break;
                case 39:
                    goRight();
                    break;
                default:
                    return; 
            }
            e.preventDefault(); 
        };

        var elem = $("#container");

        elem.scroll(function (event) {
            if (event.target.scrollLeft > 0) {
                leftBTN.disabled = false;
            } else {
                leftBTN.disabled = true;
            }

            if (Math.abs((event.target.scrollLeft + elem.width()) - (elem.children()[0].getBoundingClientRect().width * elem.children().length)) < 1) {
                rightBTN.disabled = true;
            } else {
                rightBTN.disabled = false;
            }
        });

        var dragging = false;
        var pos = {
            top: 0,
            left: 0,
            x: 0,
            y: 0
        };

        var mouseDownHandler = function (e) {
            var ele = document.querySelector('#container');
            pos = {
                left: ele.scrollLeft,
                x: e.clientX,
                y: e.clientY,
            };

            ele.style.cursor = 'grabbing';
            ele.style.userSelect = 'none';
            ele.addEventListener('mousemove', mouseMoveHandler);
            ele.addEventListener('mouseup', mouseUpHandler);
            ele.addEventListener('mouseleave', mouseUpHandler);
        };

        var mouseMoveHandler = function (e) {
            var ele = document.querySelector('#container');
            const dx = e.clientX - pos.x;
            const dy = e.clientY - pos.y;
            ele.scrollLeft = pos.left - dx;
        };



        var mouseUpHandler = function (e) {
            var ele = document.querySelector('#container');
            ele.removeEventListener('mousemove', mouseMoveHandler);
            ele.removeEventListener('mouseup', mouseUpHandler);
            ele.removeEventListener('mouseleave', mouseUpHandler);

            ele.style.cursor = 'pointer';
            ele.style.removeProperty('user-select');

            dragging = false;
            if (Math.abs(ele.scrollLeft - pos.left) > 5) {
                dragging = true;

                setTimeout(function () {
                    dragging = false;
                }, 0);
            }
        };

        document.querySelector('#container').addEventListener('mousedown', mouseDownHandler);
        $('#container').on('click', function (e) {
            if (dragging) {
                e.preventDefault();
            }
        });
    }, [])

    return (
        <CardsElement>
            <Controls>
                <button id='left-btn'>
                    <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/282/assets/chevron-left-arrow.svg?v=21978663874862931721661426272" alt="" />
                </button>
                <button id='right-btn'>
                    <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/282/assets/chevron-right-arrow.svg?v=17831087407461201331661426272" alt="" />
                </button>
            </Controls>
            <Container id='container' align={align}>
                {
                    data.map((card, index) => {
                        return (
                            <Card key={index} align={align}>
                                <Inner>
                                    <Image>
                                        {
                                            card.videoTag ?
                                            <Tag>
                                                <div>
                                                    <img src="//cdn.shopify.com/s/files/1/0493/5663/6318/t/282/assets/video-shopping-play.svg?v=61428209253112044641661426371" alt="" />
                                                </div>
                                                Watch & Shop
                                            </Tag>
                                            :
                                            ''
                                        }
                                        <img src={card.img ? card.img : ''} alt="" />
                                    </Image>
                                    <Content>
                                        <div>
                                            <h2>{card.title ? card.title : ''}</h2>
                                            <p>{card.desc ? card.desc : ''}</p>
                                        </div>
                                    </Content>
                                </Inner>
                            </Card>
                        )
                    })
                }
            </Container>
        </CardsElement>
    )
}

export default Cards