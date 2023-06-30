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
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#pc">Products</a></li>
                    
                </ul>
                <div>
                    <img id="navbtn" onClick={show} src="barger.png" alt=""></img>
                </div>
            </div>
            <div id="resgrp" className="resgrp">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Call Now</li>
                </ul>
            </div>

        </section>
    )
}
export default Navbar;