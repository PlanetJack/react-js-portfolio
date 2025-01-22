import React, { useState, useEffect } from "react";

export default function HeroSection() {
    const titles = ["Full Stack Developer", "Robotics Developer"];
    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hello, I'm Jack</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            {titles[currentTitle]}
                        </span>
                    </h1>
                    <p className="hero--section-description">
                        A software developer currently residing in Calgary, Canada
                    </p>
                </div>
                <button
                className="btn btn-primary"
                onClick={() => window.open("/resume/Jack-Resume_20250120.pdf", "_blank")}
                >
                View My Resume
                </button>
            </div>
            <div className="hero--section--img">
                <img src="./img/profile_resized.png" alt="Hero Section" />
            </div>
        </section>
    );
}