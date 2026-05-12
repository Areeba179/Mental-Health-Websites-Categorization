import websites from "../data/websites.json";
import "./OCD.css";

function OCD() {

  const ocdWebsites = websites["OCD"];

  return (

    <div className="ocd-page">

      {/* HERO SECTION */}

      <section className="ocd-hero">

        <div className="ocd-overlay">

          <h1>OCD Support Resources</h1>

          <p>
            Discover trusted websites, awareness platforms,
            and professional support resources for
            Obsessive-Compulsive Disorder.
          </p>

        </div>

      </section>

      {/* WEBSITES SECTION */}

      <section className="ocd-websites-section">

        <h2>Recommended OCD Websites</h2>

        <div className="ocd-grid">

          {ocdWebsites.map((site, index) => (

            <div className="ocd-card" key={index}>

              <h3>{site.name}</h3>

              <p>{site.description}</p>

              <a
                href={site.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>

            </div>

          ))}

        </div>

      </section>

    </div>

  );
}

export default OCD;