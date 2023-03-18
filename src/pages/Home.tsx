import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import '../styles/home.scss'
import home from '../assets/images/home.jpg'
import logo from '../assets/images/logo.png'
import contact from '../assets/images/contactus.png'
import feedback from '../assets/images/feedback.png'
import visit from '../assets/images/visit.png'
import { Accordion, AccordionTab } from 'primereact/accordion'
import Footer from '../components/Footer/Footer'

const Home = (): JSX.Element => {
  return (
    <div>
      <Navbar />

      <main className="home">
        <div className="hero">
          <div className="hero__left">
            <img src={logo} className="hero__logo" alt="logo" />
            <h1 className="hero__heading display-5 mb-2 mt-4">Cyber Police</h1>
            <p className="hero__description mt-4">
              Welcome to Police Station! Taking stock of your security round the clock! Dial 100 in case of any emergency.
              Help us to help you.
            </p>
          </div>
          <div className="hero__right">
            <img className="hero__banner" src={home} alt="Home img" />
          </div>
        </div>

        <div className="cards">
          <div className="card">
            <div className="card-body">
              <img src={feedback} className="cards-img" alt="" />
              <h5 className="card-title">File E-FIR</h5>
              <p className="card-text">File a FIR electronically without visiting the local police station.</p>
              <NavLink to="/status" className="card-link">
                Click Here
              </NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={visit} className="cards-img" alt="" />
              <h5 className="card-title">Check Status</h5>
              <p className="card-text">You can check the real-time status of your FIR as we keep them updated.</p>
              <NavLink to="#" className="card-link">
                Click Here
              </NavLink>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={contact} className="cards-img" alt="" />
              <h5 className="card-title">Contact Us</h5>
              <p className="card-text">Still not getting it! or being confused either, Don&apos;t Worry Reach out us.</p>
              <NavLink to="#" className="card-link">
                Click Here
              </NavLink>
            </div>
          </div>
        </div>

        <div className="faq">
          <h1 className="hero__heading display-4 d-flex justify-content-center mb-5 mt-4">How can we help you?</h1>
          <Accordion activeIndex={0}>
            <AccordionTab header="What is smart E-FIR?">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab header="How to File a new E-FIR?">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab header="How to check status of my filed E-FIR?">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
                dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius
                modi.
              </p>
            </AccordionTab>
            <AccordionTab header="Why cannot file a E-FIR without registering on the website?">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
                sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Home
