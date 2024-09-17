import "../pageStyles/contact.css";
import Header2 from "../component/header2";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from "../component/footer";
function Contact() {
    return <>
        <section className="contact-section">
            <div className="contact-header">
                <Header2/>
            </div>
            <div className="contact-body-container">
                <div className="contact-left-section">
                    <h4 className="send-msg-head">
                        SEND A MESSAGE
                    </h4>
                    <p className="msg-to-user">
                        Your email address will not be published. Required fields are marked *
                    </p>
                    <div className="form-container">
                        <form action="/contact">
                            <div className="c-inputs">
                                <input type="text" className="contact-name" placeholder="Name*" required /><br />
                                <input type="text" className="contact-email" placeholder="Email*" required /><br />
                                <textarea name="message" id="c-msg" placeholder="Message*" required></textarea><br />
                                <input type="submit" value="SEND" className="c-snd-msg" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contact-right-section">
                    <h4 className="get-in-touch">
                        GET IN TOUCH
                    </h4>
                    <div className="contact-info-container">
                        <div className="location">
                            <LocationOnIcon className="c-icons"/>
                            <p className="adrs">
                                123 East 22nd Street, California
                            </p>
                        </div>
                        <div className="c-info-email">
                            <EmailIcon className="c-icons"/>
                            <p className="email-adrs">
                                info@royal.com
                            </p>
                        </div>
                        <div className="c-info-phone">
                            <LocalPhoneIcon className="c-icons"/>
                            <p className="phone-num">
                                +33 4544352378
                            </p>
                        </div>
                    </div>
                    <div className="c-r-msg">
                        <p className="r-s-msg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quis. Maxime inventore enim deleniti nobis aliquid aliquam, possimus autem nulla!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, iste.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur natus deserunt quibusdam harum nulla eum.
                        </p>
                    </div>
                    <div className="social-icons">
                        <FacebookIcon className="s-icons" style={{
                            fontSize: "2rem"
                        }}/>
                        <InstagramIcon className="s-icons" style={{
                            fontSize: "2rem"
                        }}/>
                        <XIcon className="s-icons" style={{
                            fontSize: "2rem"
                        }}/>
                        <LinkedInIcon className="s-icons" style={{
                            fontSize: "2rem"
                        }}/>
                    </div>
                </div>
            </div>
        </section>
        <div className="contact-footer">
            <Footer/>
        </div>
    </>
}

export default Contact;