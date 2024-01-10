import React from 'react';
import { AiOutlineMenu } from "react-icons/ai"


const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            <nav>
                <NavContent setMenuOpen={setMenuOpen} />

            </nav>
            <button className='navBtn' onClick={() => setMenuOpen(!menuOpen)} >
                <AiOutlineMenu />
            </button>
        </>
    )
}

const NavContent = ({ setMenuOpen }) => (
    <>
        <h2>Amritesh</h2>
        <div>
            <a href='#home' onClick={() => setMenuOpen(false)} >Home</a>
            <a href='#work' onClick={() => setMenuOpen(false)}  >Work</a>
            <a href='#experience' onClick={() => setMenuOpen(false)} >Experience</a>
            <a href='#contact' onClick={() => setMenuOpen(false)} >Contact</a>
        </div>
        <a href="mailto:amriteshsingh2000n@gmail.com">
            <button>
                Email
            </button>
        </a>
    </>
)

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`} >
            <NavContent setMenuOpen={setMenuOpen} />
        </div>
    )
}

export default Header;