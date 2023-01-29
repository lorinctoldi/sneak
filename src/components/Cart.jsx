import { useState } from "react"
import { CartContainer, CloseIcon, TopUl, Inner, CartElement, CartUpper, CartBottom, SavedElement, SavedUpper, SavedBottom } from "./style/cart.styled"

const Cart = ({cartStatus, setCartStatus}) => {

    const [choosen, setChoosen] = useState(0)

  return (
    <>
        <CartContainer style={{transform: !cartStatus ? 'translate(435px)' : 'translate(0px)'}}>
            <CloseIcon onClick={() => setCartStatus(!cartStatus)}>
                <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.465294C0.841709 0.270032 1.15829 0.270032 1.35355 0.465294L9 8.11174L16.6464 0.465294C16.8417 0.270032 17.1583 0.270032 17.3536 0.465294C17.5488 0.660556 17.5488 0.977139 17.3536 1.1724L9.70711 8.81885L17.3536 16.4653C17.5488 16.6606 17.5488 16.9771 17.3536 17.1724C17.1583 17.3677 16.8417 17.3677 16.6464 17.1724L9 9.52596L1.35355 17.1724C1.15829 17.3677 0.841709 17.3677 0.646447 17.1724C0.451184 16.9771 0.451184 16.6606 0.646447 16.4653L8.29289 8.81885L0.646447 1.1724C0.451184 0.977139 0.451184 0.660556 0.646447 0.465294Z" fill="#292929"></path>
                    </svg>
                </div>
            </CloseIcon>
            <div>
                <div>
                    <article>
                        <div>
                            <TopUl>
                                <li style={{opacity: choosen ? .6 : 1, borderBottom: choosen ? '1.5px solid transparent' : '1.5px solid rgb(42,42,42)', fontFamily: choosen ? 'dutti-daily-regular' : 'dutti-daily-bold'}} onClick={() => setChoosen(0)}>
                                    <span>
                                    Basket (0)
                                    </span>
                                </li>
                                <li style={{opacity: !choosen ? .6 : 1, borderBottom: !choosen ? '1.5px solid transparent' : '1.5px solid rgb(42,42,42)', fontFamily: !choosen ? 'dutti-daily-regular' : 'dutti-daily-bold'}} onClick={() => setChoosen(1)}>
                                    <span>
                                    Wish list
                                    </span>
                                </li>
                            </TopUl>
                        </div>
                        <Inner>
                            {
                                choosen == 0 ?
                                    <CartElement>
                                        <section>
                                            <CartUpper>
                                                <div>
                                                    <div>
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65628 1.77402C7.08185 1.59323 7.53842 1.5 7.99983 1.5C8.46124 1.5 8.91782 1.59323 9.34339 1.77402C9.76893 1.95481 10.1547 2.21943 10.4792 2.55216C10.8035 2.88486 11.0602 3.27915 11.2351 3.7122C11.3376 3.96603 11.4109 4.2304 11.454 4.5H12.1092C13.3955 4.5 14.4719 5.47616 14.5973 6.75641L15.1751 12.659C15.3766 14.7169 13.7596 16.5 11.6918 16.5H4.30788C2.24011 16.5 0.623061 14.7169 0.824538 12.659L1.40241 6.75641C1.52775 5.47617 2.60415 4.5 3.89052 4.5H4.54566C4.58877 4.2304 4.66206 3.96603 4.76458 3.7122C4.93947 3.27915 5.19613 2.88486 5.52051 2.55216C5.84492 2.21943 6.23074 1.95481 6.65628 1.77402ZM4.49983 5.5V7C4.49983 7.27614 4.72369 7.5 4.99983 7.5C5.27598 7.5 5.49983 7.27614 5.49983 7V5.5H10.4998V7C10.4998 7.27614 10.7237 7.5 10.9998 7.5C11.276 7.5 11.4998 7.27614 11.4998 7V5.5H12.1092C12.881 5.5 13.5268 6.0857 13.602 6.85385L14.1799 12.7564C14.3238 14.2264 13.1688 15.5 11.6918 15.5H4.30788C2.8309 15.5 1.67587 14.2264 1.81978 12.7564L2.39765 6.85385C2.47286 6.0857 3.1187 5.5 3.89052 5.5H4.49983ZM10.4364 4.5H5.5633C5.59472 4.35904 5.63766 4.22076 5.69181 4.08667C5.81845 3.7731 6.00374 3.489 6.23651 3.25026C6.46926 3.01155 6.74487 2.82289 7.04729 2.69441C7.34968 2.56595 7.67331 2.5 7.99983 2.5C8.32636 2.5 8.64999 2.56595 8.95238 2.69441C9.25479 2.82289 9.53041 3.01155 9.76315 3.25026C9.99592 3.489 10.1812 3.7731 10.3079 4.08667C10.362 4.22076 10.4049 4.35904 10.4364 4.5Z" fill="#292929"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </CartUpper>
                                            <CartBottom>
                                                <div>
                                                    <p>Your shopping basket is empty</p>
                                                    <p>See if your favourites are in your basket or add items from the new collection</p>
                                                    <button>See new collection</button>
                                                </div>
                                            </CartBottom>
                                        </section>
                                    </CartElement> 
                                :
                                    <SavedElement>
                                        <section>
                                            <SavedUpper>
                                                <div>
                                                    <div>
                                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1.81885C2.5 1.54271 2.72386 1.31885 3 1.31885H13C13.2761 1.31885 13.5 1.54271 13.5 1.81885V15.8188C13.5 16.0111 13.3898 16.1862 13.2166 16.2695C13.0434 16.3528 12.8377 16.3294 12.6877 16.2093L8 12.4592L3.31235 16.2093C3.16226 16.3294 2.95664 16.3528 2.78341 16.2695C2.61017 16.1862 2.5 16.0111 2.5 15.8188V1.81885ZM3.5 2.31885V14.7785L7.68765 11.4284C7.87026 11.2823 8.12974 11.2823 8.31235 11.4284L12.5 14.7785V2.31885H3.5Z" fill="#292929"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </SavedUpper>
                                            <SavedBottom>
                                                <div>
                                                    <p>Do you want to see your wishlist?</p>
                                                    <span>Sign up </span>
                                                    <span> or </span>
                                                    <span> Log in</span>
                                                </div>
                                            </SavedBottom>
                                        </section>
                                    </SavedElement>
                            }
                        </Inner>
                    </article>
                </div>
            </div>
        </CartContainer>
    </>
  )
}

export default Cart