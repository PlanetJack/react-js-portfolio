export default function ContactMe() {
     return (
        <section id="Contact" className="contact--section">
            <div>
                <p className="sub--title">Get In Touch</p>
                <h2>Contact Me</h2>
                <br/>
                <p className="text-lg">I'm excited to explore new opportunities and collaborations!
                    <br/>
                    Whether you're planning a project, looking for a skilled developer to join your team, </p>
                 <p className="text-lg">or simply want to connect, don't hesitate to get in touch</p> 
            </div>
            <form className="contact--form--container">
                <div className="container">
                    <label htmlFor="first-name"
                        className="contact--label">
                        <span className="text-md">First Name</span>
                        <input type="text"
                               className="contact--input text-md"
                               name="first-name"
                               id="first-name"
                               required
                        />
                    </label>
                    <label htmlFor="Last-name"
                        className="contact--label">
                        <span className="text-md">Last Name</span>
                        <input type="text"
                               className="contact--input text-md"
                               name="Last-name"
                               id="Last-name"
                               required
                        />
                    </label>
                    <label htmlFor="email"
                        className="contact--label">
                        <span className="text-md">Email</span>
                        <input type="text"
                               className="contact--input text-md"
                               name="email"
                               id="email"
                               required
                        />
                    </label>
                    <label htmlFor="phone-number"
                        className="contact--label">
                        <span className="text-md">phone-number</span>
                        <input type="number"
                               className="contact--input text-md"
                               name="phone-number"
                               id="phone-number"
                               required
                        />
                    </label>
                </div>
                <label htmlFor="choose topic"
                        className="contact--label">
                        <span className="text-md">Choose a topic</span>
                        <select id="choose-topic" className="contact--input text-md">
                            <option>Select One...</option>
                            <option>Item 1</option>
                            <option>Item 2</option>
                            <option>Item 3</option>
                        </select>
                    </label>
                <label htmlFor="message"
                       className="contact--label">
                        <span className="text-md">Message</span>
                        <textarea 
                            className="contact--input text-md"
                            name="message"
                            rows="8"
                            placeholder="Type your message..."
                        />
                    </label>
                    <label htmlFor="checkbox"
                    className="checkbox--label">
                        <input type="checkbox" required name="checkbox"
                        id="checkbox" />
                        <span className="text-sm">I accept the terms</span>
                    </label>
                    <div>
                        <button className="btn btn-primary contact--form--btn">
                            Submit</button>
                            </div>
            </form>
        </section>
     )
}