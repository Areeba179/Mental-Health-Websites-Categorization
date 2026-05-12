import websites from "../data/websites.json";
import "./Depression.css";

function Depression() {

  const depressionWebsites = websites["Depression"];

  return (
    <div className="depression-page">

      {/* HERO SECTION */}
      <section className="depression-hero">
        <div className="depression-overlay">
          <h1>Depression Support Resources</h1>
          <p>
            Explore trusted platforms, mental health guidance,
            and professional support resources for Depression.
          </p>
        </div>
      </section>

      {/* WEBSITES SECTION */}
      <section className="depression-websites-section">

        <h2>Recommended Depression Websites</h2>

        <div className="depression-grid">

          {depressionWebsites.map((site, index) => (
            <div className="depression-card" key={index}>
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

export default Depression;