import "../css/contact.css"
function Contact(){
    return(
        <>
            <section id="contact" onMouseOver={()=>{
                document.getElementById('contactimg').classList.add('contactimg')
            }}
            onMouseOut={()=>{
                document.getElementById('contactimg').classList.remove('contactimg')
            }}>
                <div>
                    <h1>
                        Contact Us
                    </h1>
                    <form>
                        <input placeholder="Name*" type="name"></input>
                        <input placeholder="Email*" type="email"></input>
                        <input placeholder="Message*" type="password"></input>
                        <button type="submit">Send</button>
                    </form>

                </div>
                <div id="contactimg">
                    <img src="navicon.png"></img>

                </div>
            </section>
        </>
    )
}
export default Contact;