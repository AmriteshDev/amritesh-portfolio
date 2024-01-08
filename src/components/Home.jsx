import React, { useRef } from 'react'
import { motion, animate } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png"
const Home = () => {

    const clientCount = useRef(null);
    const projectCount = useRef(null);
    const animationClientConnt = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
        }
        )
    }
    const animationProjectConnt = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
        }
        )
    }
    const animations = {
        h1: {
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
            }
        }
    };

    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        Hi, I am <br /> Amritesh Singh
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["A Full Stack Developer"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara"
                    }} />
                    <div>
                        <a href="mailto:amriteshsingh2000n@gmail.com"> Hire Me</a>
                        <a href='#work'>Projects <BsArrowUpRight /></a>
                    </div>
                    <article>
                        <p>
                            +<motion.span ref={clientCount} whileInView={animationClientConnt} >100</motion.span>
                        </p>
                        <span>Clients Worldwide</span>
                    </article>
                    <aside>
                        <article>
                            <p>
                                +<motion.span ref={projectCount} whileInView={animationProjectConnt}>500</motion.span>
                            </p>
                            <span>Project Made</span>
                        </article>
                        <article data-special>
                            <p>
                                Contact
                            </p>
                            <span>amriteshsingh2000n@gmail.com</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt='Amritesh' />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home