import { useState, useRef, useEffect } from 'react'
import { Section, Header, SearchBar, Container, Inner, Row, InnerRow, CloseIcon, FilterContainer, DesktopFilter, SearchOption, Results, HeaderMobile, CloseIconSmall } from './style/search.styled'

const Search = ({ searchStatus, setSearchStatus }) => {
    useEffect(() => {
        if(searchStatus) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [searchStatus])

    const [searchVal, setSearchVal] = useState('')

    const data = [
        [
            {
                img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0910/306/712/0910306712_1_1_16.jpg'
            },
            {
                img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/2405/160/401/2405160401_1_1_16.jpg'
            },
            {
                img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0104/304/526/0104304526_1_1_16.jpg'
            },
            {
                img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0101/301/600/0101301600_1_1_16.jpg'
            },
            {
                img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0751/290/250/0751290250_1_1_16.jpg'
            },
            {
                img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0187/447/390/0187447390_1_1_16.jpg'
            }, 
            {
                img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0971/420/700/0971420700_1_1_16.jpg'
            },
            {
                img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/2415/125/802/2415125802_1_1_16.jpg'
            },
            {
                img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0755/292/508/0755292508_1_1_16.jpg'
            },
            {
                img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0940/312/250/0940312250_1_1_16.jpg'
            }
        ],
        [
            {
                img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0910/306/712/0910306712_1_1_16.jpg'
            }
        ],
        [
            {
                img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0910/306/712/0910306712_1_1_16.jpg'
            }
        ],
    ]

    const [filterData, setFilterData] = useState([
        {
            title: 'section',
            options: [
                {title: 'WOMEN', selected: true},
                {title: 'MEN', selected: false}
            ],
            hidden: true
        },
        {
            title: 'color',
            options: [
                {title: 'BLACK', selected: false},
                {title: 'CREAM', selected: false},
                {title: 'KHAKI', selected: false},
                {title: 'NAVY BLUE', selected: false},
                {title: 'WHITE', selected: false},
                {title: 'GREEN', selected: false},
                {title: 'BROWN', selected: false},
                {title: 'ORANGE', selected: false},
                {title: 'GOLD', selected: false},
                {title: 'BEIGE', selected: false},
                {title: 'BURGRUNDY', selected: false},
                {title: 'BLUE', selected: false},
                {title: 'DEEP BLUE', selected: false},
                {title: 'GOLDEN', selected: false},
                {title: 'FUCHSIA', selected: false},
                {title: 'DARK BLUE', selected: false},
                {title: 'DARK GREEN', selected: false},
            ],
            hidden: true
        },
        {
            title: 'size',
            options: [
                {title: '32', selected: false},
                {title: '34', selected: false},
                {title: '35', selected: false},
                {title: '36', selected: false},
                {title: '37', selected: false},
                {title: '38', selected: false},
                {title: '39', selected: false},
                {title: '40', selected: false},
                {title: '41', selected: false},
                {title: '42', selected: false},
                {title: '44', selected: false},
                {title: '46', selected: false},
                {title: '48', selected: false},
                {title: 'XS', selected: false},
                {title: 'S', selected: false},
                {title: 'M', selected: false},
                {title: 'L', selected: false},
                {title: 'XL', selected: false},
                {title: 'XXL', selected: false},
                {title: 'XS / 65cm', selected: false},
                {title: 'XS / 75cm', selected: false},
                {title: 'S / 70cm', selected: false},
                {title: 'S / 80cm', selected: false},
                {title: 'M / 75cm', selected: false},
                {title: 'M / 85cm', selected: false},
                {title: 'L / 80cm', selected: false},
                {title: 'L / 90cm', selected: false},
                {title: 'M-L', selected: false},
                {title: 'XS-S', selected: false},
            ],
            hidden: true
        }
    ])

    const showMore = (i) => {
        const updateFilterData = [...filterData]
        updateFilterData[i].hidden = !updateFilterData[i].hidden
        setFilterData(updateFilterData)
    }

    const searchResults = [
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0053/036/405/0053036405_1_1_16.jpg?t=1675412426243&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0056/090/405/0056090405_1_1_16.jpg?t=1675328544323&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/2038/687/401/2038687401_1_1_16.jpg?t=1675077369795&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0146/446/406/0146446406_1_1_16.jpg?t=1675848108312&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0053/035/712/0053035712_1_1_16.jpg?t=1666864450476&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0039/026/401/0039026401_1_1_16.jpg?t=1666016338406&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0039/026/710/0039026710_1_1_16.jpg?t=1666016338406&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0057/027/401/0057027401_1_1_16.jpg?t=1669042220634&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0057/027/250/0057027250_1_1_16.jpg?t=1669042220634&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0052/025/802/0052025802_1_1_16.jpg?t=1669042172618&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0052/025/805/0052025805_1_1_16.jpg?t=1669042172618&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0040/040/250/0040040250_1_1_16.jpg?t=1669046562431&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0040/040/500/0040040500_1_1_16.jpg?t=1669046562431&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0024/041/802/0024041802_1_1_16.jpg?t=1674736127605&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0024/041/401/0024041401_1_1_16.jpg?t=1674736127605&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0024/041/715/0024041715_1_1_16.jpg?t=1674736127605&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0024/041/250/0024041250_1_1_16.jpg?t=1674736127605&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0023/040/405/0023040405_1_1_16.jpg?t=1674055296335&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0054/037/802/0054037802_1_1_16.jpg?t=1673437091615&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0056/051/405/0056051405_1_1_16.jpg?t=1668759438088&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2022/I/0/2/p/0057/051/405/0057051405_1_1_16.jpg?t=1661779787516&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0057/090/405/0057090405_1_1_16.jpg?t=1672749262270&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0058/091/250/0058091250_1_1_16.jpg?t=1674746238045&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0059/091/712/0059091712_1_1_16.jpg?t=1674747611572&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0046/026/800/0046026800_1_1_16.jpg?t=1670233155031&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0046/026/505/0046026505_1_1_16.jpg?t=1670233155031&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0046/026/401/0046026401_1_1_16.jpg?t=1670233155031&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0043/033/405/0043033405_1_1_16.jpg?t=1668694703552&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0045/025/800/0045025800_1_1_16.jpg?t=1673883906459&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        },
        {
            img: 'https://static.massimodutti.net/3/photos/2023/V/0/2/p/0044/034/712/0044034712_1_1_16.jpg?t=1668009647508&impolicy=massimodutti-itxmediumhigh&imwidth=300',
            title: 'RELAXED FIT DIRTY STONE JEANS',
            price: '22,995 Ft'
        }
    ]

    const [resultIndex, setResultIndex] = useState(1)

    const ref = useRef(null);

    const [headerPosition, setHeaderPosition] = useState(0)
    const [closePosition, setClosePosition] = useState(0)
    const [prevScrollpos, setPrevScrollpos] = useState(0)

    function handleScroll() {
        if(ref.current) {
            let element = ref.current
            if(Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 1) {
                setResultIndex(resultIndex + 1)
            }
        }

        
        if(window.innerWidth <= 1024) {
            var currentScrollPos = ref.current.scrollTop;
            if (prevScrollpos > currentScrollPos) {
                setHeaderPosition(0)
                setClosePosition(5)
            } else {
                setHeaderPosition(-100)
                setClosePosition(-50)
            }
            setPrevScrollpos(currentScrollPos)
        }
    }

    function handleSearch(e) {
        console.log(e.target.value)
        if(e.target.value.length > 0) {
            setSearchVal(e.target.value)
        } else {
            setSearchVal(e.target.value)
        }
    }
    


  return (
    <>
            <Section style={{height: searchStatus ? '100%' : '0'}}>
        {
            searchStatus ? 
            <>
                {
                    searchVal.length == 0 ?
                    <CloseIcon onClick={() => setSearchStatus(false)}>
                        <div>
                        <svg height="1em" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 10,10 L 90,90"></path>
                            <path d="M 90,10 L 10,90"></path>
                        </svg>
                        </div>
                    </CloseIcon>
                    : ''
                }
                    <Header style={{marginTop: `${headerPosition}px`}}>
                        <SearchBar>
                            <svg height='24px' width='24px' viewBox="0 0 32 32" style={{fill: '#292929'}}>
                                <path d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z" stroke='#292929'></path>
                            </svg>
                            <div>
                                <input value={searchVal} type="text" placeholder='Enter what you are searching for' maxLength={64} inputMode='search' onChange={(e) => handleSearch(e)} />
                                {
                                    searchVal.length > 0 ?
                                    <button value={''} onClick={(e) => handleSearch(e)}>
                                        delete
                                    </button>
                                    :
                                    ''
                                }
                            </div>
                        </SearchBar>

                        {
                            searchVal.length > 0 ?
                            <CloseIconSmall style={{top: closePosition ? `${closePosition}px` : ''}} onClick={() => setSearchStatus(false)}>
                                <div>
                                <svg height="1em" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M 10,10 L 90,90"></path>
                                    <path d="M 90,10 L 10,90"></path>
                                </svg>
                                </div>
                            </CloseIconSmall>
                            :
                            ''
                        }
                    </Header>
                    {
                        searchVal.length > 0 ?
                        <HeaderMobile>
                            <div>
                                <button>
                                    <span>
                                        Sort by
                                    </span>
                                </button>
                            </div>
                            <div onClick={() => setSearchVal('')}>
                                <button>
                                    <span>
                                        Delete
                                    </span>
                                </button>
                            </div>
                        </HeaderMobile>
                        :
                        ''
                    }
                <Container>
                    <aside>
                            <FilterContainer style={{width: searchVal.length > 0 ? '100%' : '0px'}}>
                                <DesktopFilter>
                                    {
                                        filterData.map((filterCategory, i) => {
                                            return (
                                                <article key={i}>
                                                    <h1>
                                                        <span>{filterCategory.title}</span>
                                                        <svg width="30px" height="30px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><path d="M5.59550562,5.59550562 L15,15" id="Path" stroke="currentColor" fillRule="nonzero"></path><path d="M24.4044944,5.59550562 L15,15" id="Path" stroke="currentColor" fillRule="nonzero"></path></g></svg>
                                                    </h1>
                                                    <ul>
                                                        {
                                                            filterCategory.options.map((option, index) => {
                                                                return (
                                                                    <li key={index} style={{maxHeight: index > 5 && filterCategory.hidden ? 0 : '15px', marginBottom: index > 5 && filterCategory.hidden ? 0 : '15px'}}>
                                                                        <button>
                                                                            <SearchOption selected={option.selected}>{option.title}</SearchOption>
                                                                        </button>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                        {
                                                            filterCategory.options.length > 5 ?
                                                            <button onClick={() => showMore(i)}>{filterCategory.hidden ? '+ Show more' : '- Show less'}</button>
                                                            :
                                                            ''
                                                        }
                                                    </ul>
                                                </article>
                                            )
                                        })
                                    }
                                </DesktopFilter>
                            </FilterContainer>
                    </aside>
                    <main style={{overflowY: searchVal.length > 0 ? 'hidden' : 'scroll'}}>
                        <aside></aside>
                        {
                            searchVal.length > 0 ?
                            <>
                                <Results onScroll={handleScroll} ref={ref}>
                                    {
                                        searchResults.map((object, index) => {
                                            if(index < 12 * resultIndex) {
                                                return (
                                                    <article style={{animationDelay: `${((index + 1) % 12) * 100 + 300}ms`}} key={index}>
                                                        <div>
                                                            <a href="">
                                                                <section>
                                                                    <img src={object.img} alt="" />
                                                                </section>
                                                                <h1>{object.title}</h1>
                                                                <div>
                                                                    <div>
                                                                        <strong>{object.price}</strong>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </article>
                                                )
                                            }
                                        })
                                    }
                                </Results>
                            </>
                            :
                            <div style={{opacity: searchVal.length > 0 ? 0 : 1, transition: 'all .3s ease-out'}} >
                                {data.map((row, index) => {
                                    return (
                                        <Inner key={index} style={{opacity: searchStatus ? 1 : 0, transitionDelay: searchStatus ? `${300 * (index + 1)}ms` : `${100 * index}ms`}}>
                                            <aside>
                                                <header>
                                                    <h1>Top trend searches</h1>
                                                </header>
                                                <Row>
                                                    <aside>
                                                        <InnerRow>
                                                            <div>
                                                                {
                                                                    row.map((res, index) => {
                                                                        return (
                                                                            <article key={index}>
                                                                                <section>
                                                                                    <img alt='' src={res.img} />
                                                                                </section>
                                                                                <h1>Mock neck knit sweater with a zip</h1>
                                                                                <div>
                                                                                    <strong>27,995 Ft</strong>
                                                                                    <div>
                                                                                        <strong>17,995 Ft</strong>
                                                                                    </div>
                                                                                </div>
                                                                            </article>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </InnerRow>
                                                    </aside>
                                                </Row>
                                            </aside>
                                        </Inner>
                                    )
                                })}
                            </div>
                        }
                    </main>
                </Container>
                </>
            :
            ''
        }
            </Section>
    </>
  )
}

export default Search