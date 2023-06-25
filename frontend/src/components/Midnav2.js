import 'bootstrap/dist/css/bootstrap.css';

import "../css/midnav2.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Product from './Product';
import Productcard from './Productcard';
function Midnav2() {
    function showpgrp(){
        document.getElementById("pgrp").style.display="block"
    }
    function hidepgrp(){
        document.getElementById("pgrp").style.display="none"
    }

    return (
        <>
            <section id="midnav2">
                <div>
                    <h1>
                        Latest Products
                    </h1>
                    <ul>
                        <li>
                            Sofa
                        </li>
                        <li>
                            Chair
                        </li>
                        <li>
                            Bed
                        </li>
                        <li>
                            Table
                        </li>
                    </ul>
                    <a href="#pgrp"  onClick={showpgrp} >See all Products</a>

                </div>
            </section>
            <Productcard /> 
            <section id="pgrp">
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
                <a href="#midnav2"  onClick={hidepgrp} >Show less</a>
            </section>
            
        </>
    )
}
export default Midnav2;