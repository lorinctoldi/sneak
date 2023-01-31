import { useState } from 'react'
import { Hover, Inner, CloseIcon, Form, Header, InputContainer, InputRow,Warning, Button, Consent, OutlineButton } from './style/register.styled'


const Register = ({ registerStatus, setRegisterStatus }) => {

    const handleClick = (e) => {
        if(e.currentTarget == e.target) {
            setRegisterStatus(false)
        }
    }

    const [male, setMale] = useState(true)

    const [fillers, setFillers] = useState({
      'Name': false,
      'Surname': false,
      'Email': false,
      'Password': false
    })

    const [warnings, setWarnings] = useState({
      'Name': true,
      'Surname': true,
      'Email': true,
      'Password': true
    })

    const handleInput = (e) => {
      let value = e.target.value.length > 0 ? true : false
      setFillers(prevState => ({
        ...prevState,
        [e.target.getAttribute('data-tag')]: value
      }))
      setWarnings(prevState => ({
        ...prevState,
        [e.target.getAttribute('data-tag')]: value
      }))
    }

    const [consent, setConsent] = useState({'company': false, privacy: false, newsletter: false})

  return (
    <>
      <Hover onClick={(e) => handleClick(e)} style={{zIndex: registerStatus ? 10000 : -1, opacity: registerStatus ? 1 : 0, visibility: registerStatus ? 'inherit' : 'hidde'}}>
        <Inner>
          <CloseIcon onClick={() => setRegisterStatus(false)}>
            <div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M0.646447 0.465294C0.841709 0.270032 1.15829 0.270032 1.35355 0.465294L9 8.11174L16.6464 0.465294C16.8417 0.270032 17.1583 0.270032 17.3536 0.465294C17.5488 0.660556 17.5488 0.977139 17.3536 1.1724L9.70711 8.81885L17.3536 16.4653C17.5488 16.6606 17.5488 16.9771 17.3536 17.1724C17.1583 17.3677 16.8417 17.3677 16.6464 17.1724L9 9.52596L1.35355 17.1724C1.15829 17.3677 0.841709 17.3677 0.646447 17.1724C0.451184 16.9771 0.451184 16.6606 0.646447 16.4653L8.29289 8.81885L0.646447 1.1724C0.451184 0.977139 0.451184 0.660556 0.646447 0.465294Z" fill="#292929"></path>
              </svg>
            </div>
          </CloseIcon>
          <Form>
          <Header>
            <h2>Create Account</h2>
          </Header>
            <InputContainer>
              <div onClick={() => setMale(false)}>
                <label>
                  <p/>
                  <i style={{opacity: !male ? 1 : 0, transform: !male ? 'scale(1)' : 'scale(0)'}}></i>
                  <span>Female</span>
                </label>
              </div>
              <div onClick={() => setMale(true)}>
                <label>
                  <p/>
                  <i style={{opacity: male ? 1 : 0, transform: male ? 'scale(1)' : 'scale(0)'}}></i>
                  <span>Male</span>
                </label>
              </div>
            </InputContainer>
            {
              Object.keys(fillers).map(obj => {
                return (
                  <InputRow filled={fillers[obj]}>
                    <div>
                      <input type={obj.toLowerCase()} onChange={(e) => handleInput(e)} data-tag={obj} required="" />
                      <label>{obj}</label>
                    </div>
                    {
                      warnings[obj] ?
                      ''
                      :
                      <Warning>This field is required</Warning>
                    }
                  </InputRow>
                )
              })
            }
            <Button>Create Account</Button>
            <OutlineButton>Log In</OutlineButton>
          </Form>
        </Inner>
      </Hover>
    </>
  )
}

export default Register