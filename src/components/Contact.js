import '../styles/Contact.css'

export function Contact(props) {
    return (
        <div className="Contact">
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
        </div>
    )
}

export default Contact