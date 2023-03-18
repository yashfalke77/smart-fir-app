import './footer.scss'
import logo from '../../assets/images/logo.png'

const Footer = (): JSX.Element => {
  const contacts = [
    'Traffic WhatsApp Helpline : 8454999999',
    'Citizen Wall : 103',
    'Control Room : 100',
    'Elder Line : 1090'
  ]

  return (
    <footer>
      <footer className="footer">
        <div className="footer__left">
          <div className="contacts">
            <ul className="contacts__list">
              {contacts.map((contact, index) => (
                <li className="contacts__items" key={index}>
                  {contact}
                </li>
              ))}
            </ul>
          </div>
          <div className="copyright">
            <ul className="copyright__list">
              <li className="copyright__item">Copyright © 2022 Mumbai Police | Developed By : Dreamcare Developers</li>
            </ul>
          </div>
        </div>
        <div className="footer__right">
          <img className="footer__image" src={logo} alt="" />
          <h2>Cyber Police</h2>
        </div>
      </footer>
    </footer>
  )
}

export default Footer
