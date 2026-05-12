import websites from "../data/websites.json";
import "./Anxiety.css";

function Anxiety() {

  const anxietyWebsites = websites["Anxiety"];

  return (
    <div className="anxiety-page">

      {/* HERO SECTION */}
      <section className="anxiety-hero">
        <div className="anxiety-overlay">
          <h1>Anxiety Support Resources</h1>
          <p>
            Access reliable tools, coping strategies,
            and professional support for Anxiety management.
          </p>
        </div>
      </section>

      {/* WEBSITES SECTION */}
      <section className="anxiety-websites-section">

        <h2>Recommended Anxiety Websites</h2>

        <div className="anxiety-grid">

          {anxietyWebsites.map((site, index) => (
            <div className="anxiety-card" key={index}>
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

export default Anxiety;