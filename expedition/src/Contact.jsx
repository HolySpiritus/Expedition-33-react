import "./contact.css";
import background from './assets/background-contact.jpg';

function Contact() {
    return (
        <>
        <div className="background-contact"></div>
            <div id="contact"></div>

            <div className="monkey">
                <div className="contact-left">
                    <h1 className="sub-title">Contact if you need support</h1>
                    <p>Email: expeditionsupport@gmail.com</p>
                    <p>Phone number: +37067296366</p>
                </div>
                <div className="contact-right">
                    <form>
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;