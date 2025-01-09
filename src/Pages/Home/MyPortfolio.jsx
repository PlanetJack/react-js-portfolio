import React, { useState } from "react";
import data from "../../data/index.json";

export default function MyPortfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Open Modal function
  const openModal = (project) => {
    document.body.style.overflow = "hidden";
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Close Modal function
  const closeModal = () => {
    document.body.style.overflow = "auto";
    setIsModalOpen(false);
    setSelectedProject(null);
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
                    onClick={() =>
                      link.text === "Detail"
                        ? openModal(item)
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

      {isModalOpen && selectedProject && (
        <>
          <div className="modal-overlay open" onClick={closeModal}></div>
          <div className="modal open">
            <div className="modal-content">
              <h2>{selectedProject.title}</h2>
              {selectedProject.modalDescription.map((content, index) =>
                typeof content === "string" ? (
                  <p key={index}>{content}</p>
                ) : (
                  <img
                    key={index}
                    src={content.src}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                )
              )}
              <button className="btn-close" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}