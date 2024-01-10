import React, { useState } from 'react';
import vg from "../assets/vg.png";
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [disablebtn, setDisablebtn] = useState(false);
    // const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
    // const changeInputHandler = (e) => {
    //     setInputs({ ...inputs, [e.target.name]: e.target.value })

    // }
    const submitHandler = async (e) => {
        e.preventDefault();
        setDisablebtn(true);
        try {
            await addDoc(collection(db, "contacts"), {
                name, email, message,
            });
            toast.success("Message Sent")
            setDisablebtn(false);
            setEmail("");
            setName("");
            setMessage("");
        }
        catch (error) {
            toast.error("Error");
            console.log(error);
            setDisablebtn(false);
        }
    };

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
                    <input type='text' name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' required />
                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email' required />
                    <input type='text' name='message' value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' required />
                    <motion.button className={disablebtn ? "disableBtn" : ""} disabled={disablebtn} {...animation.button} type='submit' >Send</motion.button>
                </motion.form>
            </section>
            <aside>
                <img src={vg} alt='Graphics' />
            </aside>
        </div>
    )
}

export default Contact