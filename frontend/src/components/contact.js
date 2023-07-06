import "../css/contact.css"
function Contact() {
    const PostData = async (e) => {
        e.preventDefault()

        let name = document.querySelector("#name").value;
        let email = document.querySelector("#email").value;
        let message = document.querySelector("#des").value;


        const res = await fetch("https://furniture-99782-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,


                })
            })
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#des").value = "";
        alert("Thanks For Your FeedBack")
    }
    return (
        <>
            <section id="contact" onMouseOver={() => {
                document.getElementById('contactimg').classList.add('contactimg')
            }}
                onMouseOut={() => {
                    document.getElementById('contactimg').classList.remove('contactimg')
                }}>
                <div>
                    <h1>
                        Contact Us
                    </h1>
                    <form onSubmit={PostData}>
                        <input placeholder="Name*" id="name" type="name" required></input>
                        <input placeholder="Email*" id="email" type="email" required></input>
                        <input placeholder="Message*" id="des" type="text" required></input>
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