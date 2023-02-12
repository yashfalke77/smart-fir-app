import React from 'react'
import "./footer.scss";

const Footer = () => {

    const contacts = [
        "Traffic WhatsApp Helpline : 8454999999",
        "Citizen Wall : 103",
        "Control Room : 100",
        "Elder Line : 1090"
    ]

    return (
        <footer>
            <footer className='footer'>
                <hr />
                <div className="contacts">
                    <ul className='contacts__list'>
                        {contacts.map((contact, index) => <li key={index}>{contact}</li>)}
                    </ul>
                </div>
                <hr />

                <div className='copyright'>
                    <ul className='copyright__list'>
                        <li className='copyright__item'>Copyright © 2022 Mumbai Police | Developed By : Dreamcare Developers</li>
                        <li className='copyright__item'>Last Update On: 02-Feb-2023 23:20:57 </li>
                    </ul>
                </div>
            </footer>
        </footer>
    )
}

export default Footer