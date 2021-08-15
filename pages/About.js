function About() {
  return (
    <div>
      <div className="container">
        <div className="grid">
          <div className="resumen">
            <h1 className="title">About me</h1>
            Adipisicing tenetur quod amet eveniet est fugiat Elit atque ullam
            eaque deserunt eaque! Sunt nam qui nemo sunt debitis? Facere saepe
            iste veritatis consequatur vero. Nobis necessitatibus earum
            provident ex Adipisicing consequuntur exercitationem nesciunt qui
            explicabo modi Eos odio doloremque eligendi cum ipsum deleniti quia?
            Voluptas assumenda odit numquam explicabo asperiores Molestiae
            quaerat impedit voluptatum rem repudiandae Sapiente aliquid
            deleniti?
            <h1 className="title">Skills</h1>
          </div>
          <img
            className="imagen"
            src="https://wallpaperesque.com/wp-content/uploads/plixpapers1503/punisher_wallpaper_background_20257.jpg"
            alt="Punisher"
          />
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: 0 0 2vh 0;
          padding: 0 0.5rem;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .title {
          text-align: center;
          text-transform: capitalize;
          margin: 2vh 0 2vh 0;
          text-decoration: underline;
        }
        .grid {
          display: grid;
          grid-gap: 1vw 1vw;
        }
        .resumen {
          grid-column-start: 1;
          grid-column-start: 2;
        }
        .imagen {
          grid-column-start: 2;
          grid-column-start: 4;
        }
        img {
          transition: all 0.5s ease-out;
          width: 40vw;
          heigth: auto;
          filter: grayscale(50%);
        }
        img:hover {
          filter: grayscale(0%);
        }
      `}</style>
    </div>
  );
}

export default About;
