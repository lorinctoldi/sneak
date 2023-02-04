import { Section, Header, SearchBar, Results, Inner, Row, InnerRow, CloseIcon } from './style/search.styled'

const Search = ({ searchStatus, setSearchStatus }) => {
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

  return (
    <>
        <Section style={{height: searchStatus ? '100%' : '0'}}>
            <CloseIcon onClick={() => setSearchStatus(false)}>
                <div>
                <svg height="1em" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 10,10 L 90,90"></path>
                    <path d="M 90,10 L 10,90"></path>
                </svg>
                </div>
            </CloseIcon>
            <Header>
                <SearchBar>
                    <svg height='24px' width='24px' viewBox="0 0 32 32" style={{fill: '#292929'}}>
                        <path d="M19.4271164,20.4271164 C18.0372495,21.4174803 16.3366522,22 14.5,22 C9.80557939,22 6,18.1944206 6,13.5 C6,8.80557939 9.80557939,5 14.5,5 C19.1944206,5 23,8.80557939 23,13.5 C23,15.8472103 22.0486052,17.9722103 20.5104077,19.5104077 L26.5077736,25.5077736 C26.782828,25.782828 26.7761424,26.2238576 26.5,26.5 C26.2219324,26.7780676 25.7796227,26.7796227 25.5077736,26.5077736 L19.4271164,20.4271164 L19.4271164,20.4271164 Z M14.5,21 C18.6421358,21 22,17.6421358 22,13.5 C22,9.35786417 18.6421358,6 14.5,6 C10.3578642,6 7,9.35786417 7,13.5 C7,17.6421358 10.3578642,21 14.5,21 L14.5,21 Z" stroke='#292929'></path>
                    </svg>
                    <div>
                        <input type="text" placeholder='Enter what you are searching for' maxLength={64} inputMode='search' />
                    </div>
                </SearchBar>
            </Header>
            <Results>
                <aside></aside>
                <main>
                    <aside></aside>
                    {
                        data.map((row, index) => {
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
                        })
                    }
                </main>
            </Results>
        </Section>
    </>
  )
}

export default Search