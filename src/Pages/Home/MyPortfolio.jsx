import React, { useState } from "react";
import data from "../../data/index.json";

export default function MyPortfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalStyle, setModalStyle] = useState({});

  // Open Modal function
  const openModal = (project, event) => {
    const buttonRect = event.target.getBoundingClientRect();
    const centerX = buttonRect.left + buttonRect.width / 2;
    const centerY = buttonRect.top + buttonRect.height / 2;

    setModalStyle({
      top: `${centerY}px`,
      left: `${centerX}px`,
      transform: "scale(0)",
      opacity: 0,
    });

    setSelectedProject(project);
    setIsModalOpen(true);

    setTimeout(() => {
      setModalStyle({
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%) scale(1)",
        opacity: 1,
      });
    }, 100);
  };

  // Close Modal function
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setModalStyle({});
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
      </div>

      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="portfolio--section--card--content">
              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md">{item.description}</p>
              <div className="portfolio-links">
                {item.links.map((link, idx) => (
                  <button
                    key={idx}
                    className="btn"
                    onClick={(e) =>
                      link.text === "Detail"
                        ? openModal(item, e)
                        : window.open(link.url, "_blank")
                    }
                  >
                    {link.text}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal" style={modalStyle}>
          <div className="modal-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <button className="btn-close" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}