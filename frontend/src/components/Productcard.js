import 'bootstrap/dist/css/bootstrap.css';

import "../css/productcard.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function Productcard() {
    return (
        <>
            <section id="pc">
                <div onClick={function(){
                    window.location.href="#product1"
                }}>
                    <img src="topbaner.jpg" alt=""></img>
                    <h1>Mini sofa</h1>
                    <p>Comfort redefined: Experience luxury with our exquisite sofas.</p>
                    <h1>$200</h1>
                </div>
                <div onClick={function(){
                    window.location.href="#product3"
                }}>
                    <img src="bed.jpg" alt=""></img>
                    <h1>King Bed</h1>
                    <p>Revitalize your sleep with our dreamy, plush beds.</p>
                    <h1>$1400</h1>
                </div>
                <div onClick={function(){
                    window.location.href="#product2"
                }}>
                    <img src="is12545-image-kwvyfeo1.jpg" alt=""></img>
                    <h1>Large sofa</h1>
                    <p>Comfort redefined: Experience luxury with our exquisite sofas.</p>
                    <h1>$400</h1>
                </div>
            </section>
        </>
    )
}
export default Productcard;