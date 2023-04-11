import bektas from "../assets/bektas.jpg"

function HomeSection(){
    return (
    <section className="home">
    <p>.</p>
        <div className="container__1">
            <div className="home__content">
                <div className="home__gallery">
                    <img src={bektas} height="300px" width="300px" alt="me" />
                </div>
                    <h1 class="home__title">HI! <b> I am <div className="red"> Bektas</div> </b>  <b> Front-end-developer</b>
                    </h1>
            </div>
        </div>
    </section>
    )
}

export default HomeSection