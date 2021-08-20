function About() {
  return (
    <div>
      <div className="">
        <div className="row">
          <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
            <h1 className="title">About me</h1>
            Adipisicing tenetur quod amet eveniet est fugiat Elit atque ullam
            eaque deserunt eaque! Sunt nam qui nemo sunt debitis? Facere saepe
            iste veritatis consequatur vero. Nobis necessitatibus earum
            provident ex Adipisicing consequuntur exercitationem nesciunt qui
            explicabo modi Eos odio doloremque eligendi cum ipsum deleniti quia?
            Voluptas assumenda odit numquam explicabo asperiores Molestiae
            quaerat impedit voluptatum rem repudiandae Sapiente aliquid
            delaeniti?
            <h3 className="title h1">Skills</h3>
            <div className="text-center">
              <i aria-hidden className="fab fa-html5">
                <span className="lang-info">html5</span>
              </i>
              <i aria-hidden className="fab fa-css3-alt">
                {" "}
                <span className="lang-info">css3</span>
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
              <i aria-hidden className="fab fa-python">
                {" "}
                <span className="lang-info">python</span>
              </i>
              <i aria-hidden className="fab fa-rust">
                {" "}
                <span className="lang-info">rust</span>
              </i>
            </div>
          </div>
          <div className="col-sm-4 col-md-5 text-center">
            <img
              id="myself"
              src="https://wallpaperesque.com/wp-content/uploads/plixpapers1503/punisher_wallpaper_background_20257.jpg"
              alt="Punisher"
            />
            <p href="#" className="text-center sign fs-5">
              DMX
            </p>
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
        #myself {
          transition: all 0.5s ease-out;
          width: 39vw;
          heigth: auto;
          filter: grayscale(50%);
        }
        .sign {
          text-align: center;
          color: #1d2021;
          text-decoration: none;
          transition: all 0.5s ease;
        }
        .sign:hover,
        i:hover,
        .lang-info {
          color: #689d6a;
          text-decoration: underline #689d6a;
        }
        #myself:hover {
          filter: grayscale(0%);
        }
      `}</style>
    </div>
  );
}

export default About;
