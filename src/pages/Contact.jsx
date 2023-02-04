import { Page } from './style/contact.styled'
import { Navbar } from '../components'

const Contact = () => {
  return (
    <>
      <Navbar />
      <Page>
          <div>
              <h1>Contact</h1>
              For any questions or inquiries contact us at - contact@<span>sneakinpeace.com</span> <br />
              or send a message via the <b>Live Chat</b> below.
          </div>
      </Page>
    </>
  )
}

export default Contact