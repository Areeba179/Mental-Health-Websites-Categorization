import websites from "../data/websites.json";

function SuicidePrevention() {

  const suicideWebsites =
    websites["Crisis Support & Suicide Prevention"];

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

        .hero{
          height:75vh;

          background-image:url("https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1400&auto=format&fit=crop");

          background-size:cover;
          background-position:center;

          position:relative;
        }

        .overlay{
          width:100%;
          height:100%;

          background:rgba(0,0,0,0.6);

          display:flex;
          flex-direction:column;
          justify-content:center;
          align-items:center;

          text-align:center;

          padding:20px;

          color:white;
        }

        .overlay h1{
          font-size:4rem;
          margin-bottom:20px;
        }

        .overlay p{
          max-width:800px;
          line-height:1.8;
          font-size:1.2rem;
        }

        /* SECTION */

        .section{
          padding:70px 50px;
        }

        .section h2{
          text-align:center;
          margin-bottom:50px;
          font-size:2.5rem;
          color:#222;
        }

        /* GRID */

        .grid{
          display:grid;

          grid-template-columns:
          repeat(auto-fit, minmax(320px, 1fr));

          gap:30px;
        }

        /* CARD */

        .card{
          background:white;

          padding:30px;

          border-radius:20px;

          box-shadow:
          0 6px 18px rgba(0,0,0,0.1);

          transition:0.3s ease;
        }

        .card:hover{
          transform:translateY(-8px);
        }

        .card h3{
          margin-bottom:18px;
          color:#d62828;
          font-size:1.5rem;
        }

        .card p{
          color:#555;
          line-height:1.7;
          margin-bottom:25px;
        }

        /* BUTTON */

        .card a{
          text-decoration:none;

          background:#d62828;

          color:white;

          padding:12px 22px;

          border-radius:12px;

          display:inline-block;

          transition:0.3s;
        }

        .card a:hover{
          background:#a4161a;
        }

        /* RESPONSIVE */

        @media(max-width:768px){

          .overlay h1{
            font-size:2.5rem;
          }

          .overlay p{
            font-size:1rem;
          }

          .section{
            padding:50px 20px;
          }

        }

      `}</style>

      {/* HERO */}

      <section className="hero">

        <div className="overlay">

          <h1>Crisis Support & Suicide Prevention</h1>

          <p>
            Access trusted crisis support resources,
            suicide prevention helplines, emotional
            support services, and mental health
            emergency assistance platforms.
          </p>

        </div>

      </section>

      {/* WEBSITES */}

      <section className="section">

        <h2>Support & Prevention Resources</h2>

        <div className="grid">

          {suicideWebsites.map((site, index) => (

            <div className="card" key={index}>

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

export default SuicidePrevention;