import websites from "../data/websites.json";
import "./PTSD.css";

function PTSD() {

  const ptsdWebsites = websites["PTSD"];

  return (
    <div className="ptsd-page">

      {/* HERO SECTION */}
      <section className="ptsd-hero">
        <div className="ptsd-overlay">
          <h1>PTSD Support Resources</h1>
          <p>
            Find trusted recovery tools, trauma support,
            and professional guidance for PTSD.
          </p>
        </div>
      </section>

      {/* WEBSITES SECTION */}
      <section className="ptsd-websites-section">

        <h2>Recommended PTSD Websites</h2>

        <div className="ptsd-grid">

          {ptsdWebsites.map((site, index) => (
            <div className="ptsd-card" key={index}>
              <h3>{site.name}</h3>
              <p>{site.description}</p>
              <a href={site.url} target="_blank" rel="noreferrer">
                Visit Website
              </a>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}

export default PTSD;
