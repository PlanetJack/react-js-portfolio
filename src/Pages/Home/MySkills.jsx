import data from "../../data/index.json";

export default function MySkills(){
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <p className="section--title">My Skills</p>
                <h2 className="skills--section--heading">My Expertise</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index}
                    className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt="Product Chain" />
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">
                                {item.title}</h3>
                                <p className="skills--section--description" style={{whiteSpace: "pre-line"}}> {/* Make space on description */}
                                    {item.description}
                                </p>
                                {/* Language mapping */}
                                <div className="skills--languages">
                                    {(item.languages || []).slice(0, 5).map((lang, langIndex) => ( 
                                        <div key={langIndex} className="skills--language">
                                            <img src={lang.icon} alt={lang.name} className="skills--language--icon" />
                                            <span className="skills--language--name">{lang.name}</span>
                                            </div>
                                    ))}
                                {/* Language Row */}
                                <div className="skills--languages-row">
                                    {(item.languages || []).slice(5).map((lang,index) => (
                                        <div key={index} className="skills--language">
                                            <img src={lang.icon} alt={lang.name} className="skills--language--icon" />
                                            <span className="skills--language--name">{lang.name}</span>
                                            </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}