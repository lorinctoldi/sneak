import { useEffect, useState } from "react"
import { AccountContainer, CloseIcon, Button, OutlineButton } from "./style/account.styled"
import Register from "./Register"

const Account = ({accountStatus, setAccountStatus}) => {

    useEffect(() => {
        if(accountStatus) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [accountStatus])

    const [registerStatus, setRegisterStatus] = useState(false)

  return (
    <>
        <Register registerStatus={registerStatus} setRegisterStatus={setRegisterStatus} />
        <AccountContainer  style={{transform: !accountStatus ? 'translate(435px)' : 'translate(0px)'}}>
            <CloseIcon onClick={() => setAccountStatus(!accountStatus)}>
                <div>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.465294C0.841709 0.270032 1.15829 0.270032 1.35355 0.465294L9 8.11174L16.6464 0.465294C16.8417 0.270032 17.1583 0.270032 17.3536 0.465294C17.5488 0.660556 17.5488 0.977139 17.3536 1.1724L9.70711 8.81885L17.3536 16.4653C17.5488 16.6606 17.5488 16.9771 17.3536 17.1724C17.1583 17.3677 16.8417 17.3677 16.6464 17.1724L9 9.52596L1.35355 17.1724C1.15829 17.3677 0.841709 17.3677 0.646447 17.1724C0.451184 16.9771 0.451184 16.6606 0.646447 16.4653L8.29289 8.81885L0.646447 1.1724C0.451184 0.977139 0.451184 0.660556 0.646447 0.465294Z" fill="#292929"></path>
                    </svg>
                </div>
            </CloseIcon>
            <article>
                <h2>Log in</h2>
                <h3>Enter your email and password to enter</h3>
                <form action="">
                    <input type="email" placeholder="Email address*" />
                    <input type="password" placeholder="Password*" />
                </form>
                <p>Forgotten your password?</p>
                <Button>Log in</Button>
                <h3>Don't have an account?</h3>
                <OutlineButton onClick={() => setRegisterStatus(true)}>Create Account</OutlineButton>
            </article>
        </AccountContainer>
    </>
  )
}

export default Account