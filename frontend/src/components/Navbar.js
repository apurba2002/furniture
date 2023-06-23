import 'bootstrap/dist/css/bootstrap.css';

import "../css/navbar.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Navbar() {
    // Selecting elements
   

    return (
        <section id="navbar">
            <nav class="navbar">
                <div class="logo">Logo</div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div class="toggle-button">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

        </section>
    )
}
export default Navbar;