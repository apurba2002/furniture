import "../css/about.css"
function About() {


    return (


        <>
            <section id="about" onMouseOver={function () {
                document.getElementById('aboutimg1').classList.add('aboutimg')
                document.getElementById('aboutimg2').classList.add('aboutimg')
                document.getElementById('aboutimg3').classList.add('aboutimg')
            }} onMouseOut={function () {
                document.getElementById('aboutimg2').classList.remove('aboutimg')
                document.getElementById('aboutimg3').classList.remove('aboutimg')
                document.getElementById('aboutimg1').classList.remove('aboutimg')
            }}>
                <div >
                    <img onClick={()=>{window.location.href="#product1"}} id="aboutimg1" alt="" src='topbaner.jpg' width="100%" height="500px"></img>
                    <img onClick={()=>{window.location.href="#product3"}} id="aboutimg2" alt="" src='bed.jpg' width="100%" height="500px"></img>
                    <img onClick={()=>{window.location.href="#product2"}} id="aboutimg3" alt="" src='is12545-image-kwvyfeo1.jpg' width="100%" height="500px"></img>


                </div>
                <div>
                    <h1>
                        About Us
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos nulla magnam dolor veritatis error! Nobis in ratione nisi nemo velit sint distinctio temporibus ad similique et magni quo consequuntur debitis illum laudantium eaque laboriosam, commodi voluptatem atque? Blanditiis sit dolorem dolore fugiat hic temporibus quis veritatis nulla, commodi explicabo.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis eos nulla magnam dolor veritatis error! Nobis in ratione nisi nemo velit sint distinctio temporibus ad similique et magni quo consequuntur debitis illum laudantium eaque laboriosam, commodi voluptatem atque? Blanditiis sit dolorem dolore fugiat hic temporibus quis veritatis nulla, commodi explicabo.
                    </p>

                </div>
            </section>
        </>
    )
}
export default About;