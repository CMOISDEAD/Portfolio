function About() {
  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7">
            <h1 className="title">About me</h1>
            <div className="aboutMe">
              Adipisicing tenetur quod amet eveniet est fugiat Elit atque ullam
              eaque deserunt eaque! Sunt nam qui nemo sunt debitis? Facere saepe
              iste veritatis consequatur vero. Nobis necessitatibus earum
              provident ex Adipisicing consequuntur exercitationem nesciunt qui
              explicabo modi Eos odio doloremque eligendi cum ipsum deleniti
              quia? Voluptas assumenda odit numquam explicabo asperiores
              Molestiae quaerat impedit voluptatum rem repudiandae Sapiente
              aliquid delaeniti?
            </div>
            <div className="text-center skill">
              <h3 className="title h1">Skills</h3>
              <i aria-hidden className="fab fa-html5">
                <span className="lang-info">html5</span>
              </i>
              <i aria-hidden className="fab fa-css3-alt">
                {" "}
                <span className="lang-info">css3</span>
              </i>
              <i aria-hidden className="fab fa-sass">
                {" "}
                <span className="lang-info">sass</span>
              </i>
              <i aria-hidden className="fab fa-js">
                {" "}
                <span className="lang-info">Javascript</span>
              </i>
              <i aria-hidden className="fab fa-react">
                {" "}
                <span className="lang-info">react</span>
              </i>
              <i aria-hidden className="fab fa-node-js">
                {" "}
                <span className="lang-info">nodejs</span>
              </i>
              <i aria-hidden className="fab fa-git-alt">
                {" "}
                <span className="lang-info">git</span>
              </i>
              <i aria-hidden className="fab fa-github-alt">
                {" "}
                <span className="lang-info">github</span>
              </i>
              <i aria-hidden className="fas fa-terminal">
                {" "}
                <span className="lang-info">terminal</span>
              </i>
              <i aria-hidden className="fab fa-linux">
                {" "}
                <span className="lang-info">linux</span>
              </i>
              <i aria-hidden className="fab fa-npm">
                <span className="lang-info">npm</span>
              </i>
              <h3 className="title h1">Other Skills</h3>
              <div className="row">
                <div className="col">
                  <ul className="text-capitalize">
                    <li>mysql</li>
                    <li>php</li>
                    <li>mongo</li>
                  </ul>
                </div>
                <div className="col">
                  <ul className="text-capitalize">
                    <li>sql</li>
                    <li>rust</li>
                    <li>python</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col text-center mb-2" id="myself">
            <img
              src="https://wallpaperesque.com/wp-content/uploads/plixpapers1503/punisher_wallpaper_background_20257.jpg"
              alt="Punisher"
              className="punisher"
            />
            <img
              className="ddom"
              // src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd13ezvd6yrslxm.cloudfront.net%2Fwp%2Fwp-content%2Fimages%2Fdoctor-doom-movie-e1524160306101.jpg&f=1&nofb=1"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi0.wp.com%2Fmultiversitystatic.s3.amazonaws.com%2Fuploads%2F2019%2F11%2FDMT_DoctorDoom_Featured.jpg%3Ffit%3D1042%252C1000&f=1&nofb=1"
              alt="ddoom"
            />
          </div>
        </div>
      </div>
      <style jsx>{`
        .title {
          text-align: center;
          text-transform: capitalize;
          margin: 2vh 0 2vh 0;
          text-decoration: underline;
        }
        i {
          font-size: 1.8rem;
          margin: 0 1vw 10px 1vw;
        }
        .lang-info {
          display: none;
          transition: all 0.5s ease;
          margin: 0;
        }
        i:hover > * {
          display: block;
          position: absolute;
        }
        #myself > img {
          transition: all 0.5s ease-out;
          width: 30vw;
          max-width: 30vw;
          // height: auto;
          height: 30vh !important;
          filter: grayscale(50%);
          object-fit: cover;
        }
        ul {
          list-style: none;
        }
        .sign {
          text-align: center;
          color: #1d2021;
          text-decoration: none;
          transition: all 0.5s ease;
        }
        i:hover {
          color: #689d6a;
        }
        .sign:hover,
        .lang-info {
          color: #689d6a;
          text-decoration: underline #689d6a;
        }
        #myself > img:hover {
          filter: grayscale(0%);
        }
        @media (max-width: 800px) {
          #myself {
            display: none;
          }
          .row {
            display: block !important;
          }
          .row:first-child {
            min-width: 100vw;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
