import React, { useState } from 'react'
import "../styles/fir.scss"
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Fir = () => {

    const options = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Pondicherry",]

    const policeStation = [
        "Arey",
        "AgriPada",
        "Airport",
        "Amboli",
        "Andheri",
        "Antop Hill",
        "Azad Maidan",
        "BKC",
        "Bandra"
    ]

    return (
        <div>
            <Navbar />
            <main className="fir">
                <h1 className="hero__heading display-5 d-flex justify-content-center mb-5 mt-4">Online Complaint</h1>

                <div className="disclaimer mb-5">
                    <h4>DISCLAIMER :</h4>
                    <p className="mb-3">As per the prevailing laws, FIR of a major crime (′cognizable crimes like theft, burglary, motor vehicle theft, accident, chain-snatching, assault, rape, murder, attempt to commit murder, robbery, dacoity, extortion etc) can only be registered at a Police Station. Please contact your nearest Police Station for the same.</p>
                    <p>This site shall only entertain complaints about minor crimes (′non-cognizable crimes′).Your complaint shall be referred to the concerned Police Station, where you may be called for further clarification and/or to give statement.</p>
                </div>

                <form>
                    <div className="container1 mb-4">
                        <div className="row">
                            <div className="col-md p-float-label mr-3">
                                <InputText required id="username" placeholder="Eg: Harsh Sunwani" />
                                <label htmlFor="username" className="ml-3">Full Name</label>
                            </div>
                            <div className="col-md p-float-label mr-3">
                                <InputMask id="ssn_input" mask="99999-99999" />
                                <label htmlFor="ssn_input" className="ml-3">Contact Number</label>
                            </div>
                            <div className="col-md p-float-label mr-3">
                                <InputText type='email' id="email" placeholder="example@domain.com" />
                                <label htmlFor="email" className="ml-3">Email</label>
                            </div>
                        </div>
                    </div>

                    <div className="container2 mb-4">
                        <div className="row">
                            <div className="col-md p-float-label mr-3">
                                <InputText id="add1" placeholder="Eg: 1209 street" />
                                <label htmlFor="add1" className="ml-3">Room No. / Street Name</label>
                            </div>
                            <div className="col-md p-float-label mr-3">
                                <InputText id="add2" placeholder="Eg: Sector1, Bandra, Mumbai" />
                                <label htmlFor="add2" className="ml-3">Address</label>
                            </div>
                            <div className="col-md p-float-label mr-3">
                                <InputText id="city" placeholder="Eg: Mumbai" />
                                <label htmlFor="city" className="ml-3">City</label>
                            </div>
                        </div>
                    </div>

                    <div className="container3 mb-4">
                        <div className="row">
                            <div className="col-md p-float-label mr-3">
                                <Dropdown id="dropdown" options={options} placeholder="Eg: Maharashtra." />
                                <label className="ml-3" htmlFor="dropdown">Select State</label>
                            </div>
                            <div className="col-md p-float-label mr-3">
                                <InputText id="add3" placeholder="India" />
                                <label htmlFor="add3" className="ml-3">Country</label>
                            </div>
                        </div>
                    </div>

                    <div className="container4 mb-4">
                        <div className="row">
                            <div className="col-md p-float-label mr-3">
                                <InputMask id="pincode" mask="999999" />
                                <label htmlFor="pincode" className="ml-3">Pin Code</label>
                            </div>
                            <div className="col-md p-float-label mr-3">
                                <Dropdown id="dropdown" options={policeStation} placeholder="Eg: Andheri" />
                                <label className="ml-3" htmlFor="dropdown">Select Police Station</label>
                            </div>
                        </div>
                    </div>

                    <div className="container5 mb-4 p-float-label">
                        <InputTextarea id="complaint" rows={5} cols={30} placeholder='Complaint Description' />
                        <label htmlFor="complaint">Complaint Description</label>
                    </div>

                    <div className="container7 mb-4 d-flex">
                        <Checkbox checked inputId="policy" />
                        <label htmlFor="policy" className="ml-2">
                            I certify that the information provided by me in above form is accurate and correct as per best of my knowledge. I understand that withholding of information or giving false information is a criminal offense and may result in legal action against me.
                        </label>
                    </div>

                    <Button label="Submit" icon="pi pi-check" />
                </form>
            </main>

            <Footer />
        </div>
    )
}

export default Fir