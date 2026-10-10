import "./Header2.css"


function Header2(){
    return<div className="header2">
        <div className="sub1"> Bienvenid@ a Retro Games Store</div>
        <div className="sub2">
            <h3>La mejor tienda especializada de videojuegos retro</h3>
            <div id="carouselAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./img/carousel6.jpg" className="d-block w-100" alt="retro"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel2.jpg" className="d-block w-100" alt="retro"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel1.jpg" className="d-block w-100" alt="retro"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel3.jpg" className="d-block w-100" alt="retro"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel5.jpg" className="d-block w-100" alt="retro"/>
                    </div>
                    <div className="carousel-item">
                        <img src="./img/carousel7.avif" className="d-block w-100" alt="retro"/>
                    </div>
                </div>
            </div>

            <p> Bienvenidos a la tienda definitiva para coleccionistas y amantes de la nostalgia, donde encontrarás las
                consolas clásicas más icónicas de la historia completamente restauradas, testeadas y listas para jugar.
            </p>
        </div>
    </div>
}

export default Header2