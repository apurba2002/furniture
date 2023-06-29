import "../css/product2.css"
function Product2() {
    return (
        <>

            <div id="product2">
                
                <div onMouseOver={function () {
                    document.getElementById("p2img").classList.add("addani2")
                }} onMouseOut={function () {
                    document.getElementById("p2img").classList.remove("addani2")
                }} >
                    <p>Minimal Design</p>
                    <h1>The eye catching designed sofa will fit in any corner</h1>
                    <p>"Introducing the ultimate comfort companion for your living space! Our exquisite sofa combines sleek design with unparalleled coziness, ensuring a truly luxurious experience. Immerse yourself in its plush cushions, crafted with the finest materials, and discover a world of relaxation. Upgrade your home with our irresistible sofa and indulge in unrivaled comfort today!"</p>
                    <p id="readmore2">
                        Indulge in the ultimate comfort experience with our exquisite sofa. Carefully crafted with a meticulous attention to detail, it seamlessly combines sleek design with unparalleled coziness, creating a truly luxurious seating option for your living space.

                        Sink into the plush cushions, meticulously tailored and filled with the finest materials, offering unrivaled support and relaxation. The sumptuous upholstery adds an extra layer of opulence, enveloping you in a world of comfort.

                        Designed for both style and practicality, our sofa effortlessly complements any interior decor, whether it be modern, contemporary, or traditional. Its versatile design allows it to blend seamlessly with your existing furniture, while still making a bold statement.

                        Not only does our sofa provide a comfortable retreat, but it also serves as a centerpiece that exudes elegance and sophistication. Its sleek lines, exquisite craftsmanship, and attention to detail make it a focal point of your living room, attracting admiring glances from guests.

                        Upgrade your home with our irresistible sofa and transform your living space into a haven of relaxation and refinement. Whether you're enjoying a movie night with loved ones or simply seeking a moment of solitude, our sofa offers the perfect sanctuary for you to unwind and recharge.

                        Experience the epitome of luxury and elevate your everyday life with our exceptional sofa. Invest in quality, style, and unparalleled comfort and create a living space that truly reflects your exquisite taste and desire for the finer things in life. Treat yourself to the ultimate comfort companion and redefine the way you relax at home.
                    </p>
                    <button id="p2readmore" onClick={function () {
                        document.getElementById("readmore2").style.display = "block";

                        document.getElementById("p2readmore").style.display = "none";
                        document.getElementById("p2readless").style.display = "block";

                    }}>Read More</button>
                    <button id="p2readless" onClick={function () {
                        document.getElementById("readmore2").style.display = "none";

                        document.getElementById("p2readmore").style.display = "block";
                        document.getElementById("p2readless").style.display = "none";
                        window.location.href="#product2"

                    }}>Show Less</button>
                </div>
                <img id="p2img" src="is12545-image-kwvyfeo1.jpg" alt=""></img>
            </div>

        </>
    )
}
export default Product2;