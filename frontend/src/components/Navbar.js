import 'bootstrap/dist/css/bootstrap.css';

import "../css/navbar.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Navbar() {



    function show() {
        const menuBtn = document.querySelector('#navbtn');
        const menu = document.querySelector('#resgrp');
        menu.classList.toggle('show')



    }


    return (
        <section id="navbar" className="fixed-top">
            <div className="navgrp">
                <h1>Furnituaria</h1>
                <ul className="navlink">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#midnav2">Products</a></li>

                </ul>
                <div className="berger">
                    <img id="navbtn" onClick={show} src="barger.png" alt=""></img>
                </div>
            </div>
            <div id="resgrp" className="resgrp">
                <ul>
                    
                    <li onClick={show}><a href="index.html">Home</a></li>
                    <li onClick={show}><a href="#contact">Contact</a></li>
                    <li onClick={show}><a href="#about">About</a></li>
                    <li onClick={show}><a href="#midnav2">Products</a></li>
                </ul>
            </div>

        </section>
    )
}
export default Navbar;