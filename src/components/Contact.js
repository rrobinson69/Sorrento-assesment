import '../styles/Contact.css'
import { Banner } from '../components/Banner'
import BannerImage from '../banners/aaron-burden-cEukkv42O40-unsplash.jpg'

export function Contact(props) {
    return (
        <div className="Contact">
             <Banner image={BannerImage} text="Beach" />
            <h2>Contact</h2>
            <form id="contact form" action="https://example.com/handler"
            method="post"
            >
                {/* name 8*/}
                <label htmlFor="name">Name</label>
                <input id="name" name="name" placeholder="Your Name"></input>
            {/*email */}
            <label htmlFor="email">Email</label>
            <input id="email" type="email"  name="email"
            placeholder="you@domain.com"/>
            {/*message */}
            <label htmlFor="message">Message </label>
            <textarea id="message" rows="5" cols="24"
                placeholder="Hi, howdydoody?"></textarea>
                <button type="reset">Clear</button>
                <button type="submit">Send</button>
            </form>
            <p>
                <h3>Phone number and address</h3>
                <li>ph: 0435 123 456</li>
                <li>42 Holyrood Avenue</li>
                <li>Sorrento VIC 3943</li>

            </p>
        </div>
    )
}

export default Contact