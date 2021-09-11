import Head from "next/head";
import Navbar from "./Navbar";
import Presentation from "./Presentation";
import Repos from "./Repos";
import About from "./About";
import Contact from "./Contact";
import Banner from "./Banner";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.2/css/all.css"
          integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Portafolio</title>
      </Head>

      <Navbar />
      <Banner />
      <main className="container">
        <section className="section1">
          <Presentation />
        </section>
        <section className="section2 spikes">
          <hr />
          <About />
        </section>
        <section className="section3">
          <Repos />
        </section>
        <section className="section4">
          <Contact />
        </section>
      </main>

      <footer>
        <p>
          Made with <span className="green">❤️ </span>& coffe,{" "}
          <a
            href="https://github.com/CMOISDEAD"
            target="_blank"
            rel="noopener noreferrer"
          >
            See my Github.
          </a>
        </p>
      </footer>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .green {
          color: #689d6a;
        }
        footer {
          width: 100vw;
          height: auto;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          /* display: flex;
          justify-content: center;
          align-items: center; */
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        @media (max-width: 600px) {
        }
       }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
