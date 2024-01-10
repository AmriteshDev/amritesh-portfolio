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
                    <a href='' target={"blank"} >
                        <AiFillLinkedin />
                    </a>
                    <a href='' target={"blank"} >
                        <AiFillGithub />
                    </a>
                </article>

            </aside>
            <a href='#home'><AiOutlineArrowUp /></a>
        </footer>
    )
}

export default Footer