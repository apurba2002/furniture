import "../css/productcard.css"
import Midnav2 from "./Midnav2";
import Productcard from "./Productcard";

function Product() {
    function showpgrp(){
        document.getElementById('pgrp').style.display="block";
    }
    return (
        <>  
           
            <Productcard />
            <section id="pgrp">
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
            </section>
        </>
    )
}
export default Product;