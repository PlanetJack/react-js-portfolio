export default function HeroSection () {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title"> Hello, I'm Jack</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full
                            Stack</span> {" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                    A software developer currently residing in Calgary, Canada
                        <br />
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/profile_resized.png" alt="Hero Section" />
            </div>
        </section>
    );
}