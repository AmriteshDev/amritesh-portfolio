import React from 'react';
import vg from "../assets/vg.png";
const Contact = () => {
    return (
        <div id='contact'>
            <section>
                <form>
                    <h2>Contact Me</h2>
                    <input type='text' placeholder='Your Name' required />
                    <input type='email' placeholder='Your Email' required />
                    <input type='text' placeholder='Your Message' required />
                    <button type='submit'>Send</button>
                </form>
            </section>
            <aside>
                <img src={vg} alt='Graphics' />
            </aside>
        </div>
    )
}

export default Contact