import React, { useState } from 'react';
import vg from "../assets/vg.png";
import toast from 'react-hot-toast';
import { motion } from "framer-motion"

const Contact = () => {
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");
    const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
    const changeInputHandler = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })

    }
    const submitHandler = (e) => {
        e.preventDefault();
        toast.success("Message Sent")
    }

    const animation = {
        form: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },
        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1,
            },
            transition: {
                delay: 0.5,
            }
        },
    };
    return (
        <div id='contact'>
            <section>
                <motion.form {...animation.form} onSubmit={submitHandler}>
                    <h2>Contact Me</h2>
                    <input type='text' name="name" value={inputs.name} onChange={changeInputHandler} placeholder='Your Name' required />
                    <input type='email' name='email' value={inputs.email} onChange={changeInputHandler} placeholder='Your Email' required />
                    <input type='text' name='message' value={inputs.message} onChange={changeInputHandler} placeholder='Your Message' required />
                    <motion.button {...animation.button} type='submit'>Send</motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt='Graphics' />
            </aside>
        </div>
    )
}

export default Contact