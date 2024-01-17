import React from 'react'
import imgSrc from "../assets/logo.png";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
const Footer = () => {
    return (
        <footer>
            <div>
                <img src={imgSrc} alt='Founder' />
                <h2>Amritesh Singh</h2>
                <p>Motivation is temporary, but discipline last forever. </p>

            </div>
            <aside>
                <h2>Social Media</h2>
                <article>
                    <a href='https://www.linkedin.com/in/amritesh-singh-430669216' target={"blank"} >
                        <AiFillLinkedin />
                    </a>
                    <a href='https://github.com/AmriteshDev' target={"blank"} >
                        <AiFillGithub />
                    </a>
                </article>

            </aside>
            <a href='#home'><AiOutlineArrowUp /></a>
        </footer>
    )
}

export default Footer