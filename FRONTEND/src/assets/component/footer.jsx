import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import "../componentStyles/common.css";
import "../componentStyles/footer.css";
function Footer() {
    return <>
        <section className="footer-section">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="\images\logo-no-background-removebg-preview.png" alt="logo" className="logo"/>
                </div>
                <div className="f-contacts-container">
                    <div className="location-adrs f-contacts">
                        <LocationOnIcon style={{
                            marginRight: "0.8vw"
                        }}/>
                        <p className="adrs">
                            123 East 22nd Street, California
                        </p>
                    </div>
                    <div className="f-mail f-contacts">
                        <MailIcon style={{
                            marginRight: "0.8vw"
                        }}/>
                        <p className="f-c-mail">
                            info@royal.com
                        </p>
                    </div>
                    <div className="phone f-contacts">
                        <LocalPhoneIcon style={{
                            marginRight: "0.8vw"
                        }}/>
                        <p className="f-c-phone">
                            +33 4544352378
                        </p>
                    </div>
                </div>
                <div className="f-links-container">
                    <ul>
                        <li className='footer-links f-reserv'>
                            Reservation
                        </li>
                        <li className='footer-links'>
                            Career
                        </li>
                        <li className='footer-links'>
                            About Us
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
}

export default Footer;