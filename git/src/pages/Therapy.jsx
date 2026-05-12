import websites from "../data/websites.json";

function Therapy() {

  const therapyWebsites =
    websites["Therapy & Counseling"];

  return (

    <div>

      {/* CSS */}

      <style>{`

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Arial, Helvetica, sans-serif;
        }

        body{
          background:#f4f7fb;
        }

        /* HERO SECTION */

        .therapy-hero{
          height:75vh;

          background-image:url("https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?q=80&w=1400&auto=format&fit=crop");

          background-size:cover;
          background-position:center;

          position:relative;
        }

        .therapy-overlay{
          width:100%;
          height:100%;

          background:rgba(0,0,0,0.55);

          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;

          text-align:center;

          color:white;

          padding:20px;
        }

        .therapy-overlay h1{
          font-size:4rem;
          margin-bottom:20px;
        }

        .therapy-overlay p{
          max-width:800px;
          font-size:1.2rem;
          line-height:1.8;
        }

        /* SECTION */

        .therapy-section{
          padding:70px 50px;
        }

        .therapy-section h2{
          text-align:center;
          margin-bottom:50px;
          font-size:2.5rem;
          color:#222;
        }

        /* GRID */

        .therapy-grid{
          display:grid;

          grid-template-columns:
          repeat(auto-fit, minmax(320px, 1fr));

          gap:30px;
        }

        /* CARD */

        .therapy-card{
          background:white;

          padding:30px;

          border-radius:20px;

          box-shadow:
          0 6px 18px rgba(0,0,0,0.1);

          transition:0.3s ease;
        }

        .therapy-card:hover{
          transform:translateY(-8px);
        }

        .therapy-card h3{
          margin-bottom:18px;
          color:#4c6ef5;
          font-size:1.5rem;
        }

        .therapy-card p{
          color:#555;
          line-height:1.7;
          margin-bottom:25px;
        }

        /* BUTTON */

        .therapy-card a{
          text-decoration:none;

          background:#4c6ef5;

          color:white;

          padding:12px 22px;

          border-radius:12px;

          display:inline-block;

          transition:0.3s;
        }

        .therapy-card a:hover{
          background:#364fc7;
        }

        /* RESPONSIVE */

        @media(max-width:768px){

          .therapy-overlay h1{
            font-size:2.5rem;
          }

          .therapy-overlay p{
            font-size:1rem;
          }

          .therapy-section{
            padding:50px 20px;
          }

        }

      `}</style>

      {/* HERO */}

      <section className="therapy-hero">

        <div className="therapy-overlay">

          <h1>Therapy & Counseling</h1>

          <p>
            Explore trusted therapy platforms,
            counseling resources, emotional support
            communities, and professional mental
            health guidance services.
          </p>

        </div>

      </section>

      {/* WEBSITES */}

      <section className="therapy-section">

        <h2>Recommended Therapy Resources</h2>

        <div className="therapy-grid">

          {therapyWebsites.map((site, index) => (

            <div className="therapy-card" key={index}>

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

export default Therapy;