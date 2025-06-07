import './contact.css'
import { TbMailFilled } from "react-icons/tb";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import doneAnimation from '../../animations/done.json'
import contactAnimation from '../../animations/contact.json'

const Contact = () => {
    const [state, handleSubmit] = useForm("mwpbvbak");

    return (
        <section className="contact-us" id='contact'>
            <h1 className="title">
                <span className="icon-envelope"><TbMailFilled /> </span>
                Contact us
            </h1>
            <p className="sub-title">
                Contact us for more information and Get notified when I publish
                something new.
            </p>

            <div style={{ justifyContent: "space-between" }} className="flex">
                <form onSubmit={handleSubmit}>
                    <div className="flex">
                        <label htmlFor="email">Email Address:</label>
                        <input id="email" type="email" name="email" required autoComplete='off' />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>

                    <div className="flex" style={{ marginTop: "24px" }}>
                        <label htmlFor="message">Your message:</label>
                        <textarea id="message" name="message" required />
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>

                    <button className="submit" type="submit" disabled={state.submitting}>
                        {(state.submitting ? "Submitting ..." : "Submit")}
                    </button>

                    {state.succeeded && (

                        <p className='succeeded-msg'>
                            <Lottie loop={false} style={{ height: 55 }} animationData={doneAnimation} />
                            Your message has been sent successfully 👌

                        </p>
                    )}
                </form>
                <div className="animation">
                    <Lottie style={{ height: 350 }} animationData={contactAnimation} />

                </div>
            </div>
        </section>
    );
}

export default Contact;
