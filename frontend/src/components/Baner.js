import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/baner.css"
import { Button } from 'bootstrap';
function Baner() {
    return (
        <>
            <section id="baner">
                <h1 className="tittle" >Discover the best furnitures</h1>
                <p>"Discover exquisite furniture at unbeatable prices on our top-rated online furniture store!"</p>
                <img alt="" src="topbaner.jpg"></img>
                <div>
                    <button style={{ marginRight: '10%' }} >Order Now</button>
                    <button>Explore more</button>
                </div>
            </section>
        </>
    )
}
export default Baner;