import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "../css/navbar.css"
function Navbar() {
    return (
        <section id="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

                <div className="container-fluid">

                    <a className="navbar-brand tittle" href="index.html"><span><img alt="" src="image/navicon.png" className="navimg" ></img></span>Furniture</a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 center ">

                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Contact Us
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="https://www.youtube.com/channel/UCA9Ldta-rMmrNTBfc_J--wA" target="_blank" >Youtube</a></li>
                                    <li><a className="dropdown-item" href="https://www.facebook.com/apurba.debnathapu/" target="_blank" >Facebook</a></li>
                                    <li><hr className="dropdown-divider"></hr></li>
                                    <li><a className="dropdown-item" href="https://www.instagram.com/apurba.debnathapu/?hl=en" target="_blank" >Instagram</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Search items
                                </a>
                                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                                    <form>
                                        <li><input type="search" className=" input" placeholder="Search here " required></input></li>

                                        <li><input type="submit" value="Search" className="button btn btn-primary "></input></li>
                                    </form>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="tel:+4733378901" tabindex="-1" >Call us now</a>
                            </li>

                        </ul>


                    </div>
                </div>
            </nav>
        </section>
    )
}
export default Navbar;