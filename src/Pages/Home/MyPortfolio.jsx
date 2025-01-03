import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github"
                  onClick={() => window.open("https://github.com/PlanetJack", "_blank")}
                  >
          <svg xmlns="http://www.w3.org/2000/svg"
               width="32"
               height="32"
               viewBox="0 0 1024 1024"
               fill="none"
               style={{ marginRight: '8px' }}>
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 512C8 238.117 238.117 8 512 8s504 230.117 504 504c0 222.11-144.236 410.13-344.432 476.425-24.392 4.538-33.164-10.56-33.164-23.487 0-11.578.403-42.22.621-82.852 140.055 30.471 169.641-67.496 169.641-67.496 22.167-56.328 54.117-71.369 54.117-71.369 44.275-30.288-.336-29.699-.336-29.699-49.013 3.457-74.822 50.394-74.822 50.394-43.504 74.533-114.187 53.003-142.077 40.518-4.402-31.524-17.027-53.012-30.964-65.177 111.817-12.764 229.448-55.915 229.448-249.004 0-55.008-19.643-99.997-51.835-135.239 5.181-12.758 22.45-64.148-4.933-133.772 0 0-42.266-13.526-138.54 51.68-40.211-11.17-83.365-16.74-126.288-16.94-42.912.2-86.095 5.771-126.325 16.94-96.253-65.205-138.454-51.68-138.454-51.68-27.425 69.644-10.156 120.994-4.976 133.772-32.211 35.243-51.84 80.233-51.84 135.239 0 193.679 117.481 236.118 229.224 248.723-15.038 13.01-28.47 38.731-33.466 74.865-29.929 13.407-106.965 37.007-154.632-44.145 0 0-27.751-50.224-80.32-53.744 0 0-51.242-.683-3.67 32.14 0 0 34.357 16.116 58.314 76.679 0 0 30.827 94.84 176.912 63.201.371 40.392.648 72.36.648 84.102 0 12.99-8.903 28.046-33.282 23.443C152.327 922.161 8 734.109 8 512Z"
                fill="currentColor"/>
          </svg>
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}