function Links({ title, description, langs, date }) {
  if (langs) {
    return (
      <>
        <a className="card" href="#">
          <img
            className="card-img-top"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fecdiypg9opu21.jpg&f=1&nofb=1"
            alt="punisher"
          />
          <h3 className="pt-1">{title}</h3>
          <div className="card-body pt-0">
            <p>{description}</p>
          </div>
          <div className="card-footer text-center">
            {[
              "langs: ",
              langs.map((lang, key) => (
                <i aria-hidden className={`fab fa-${lang}`} key={key} />
              )),
              " date:",
              date,
            ]}
          </div>
        </a>
        <style jsx>
          {`
            .card {
              margin: 0.5rem 0.5rem;
              padding: 0;
              text-align: center;
              color: inherit;
              text-decoration: none;
              border: 1px solid #eaeaea;
              border-radius: 0;
              background: #eaeaea;
              color: #1d2021;
              transition: color 0.15s ease, border-color 0.15s ease;
            }
            .card-img-top {
              object-fit: cover !important;
              height: 21vh;
              width: auto;
            }
            .card-footer {
              display: inline-block;
            }
            i {
              margin: 0 0.2rem;
            }
            .card:hover,
            .card:focus,
            .card:active {
              color: #83c07c;
              border-color: #83c07c;
            }
            .card h3 {
              text-align: center;
              margin: 0 0 1rem 0;
              font-size: 1.5rem;
            }
            .card p {
              text-align: center;
              margin: 0;
              font-size: 1.25rem;
              line-height: 1.5;
            }
          `}
        </style>
      </>
    );
  } else {
    return <div class="text-center text-warning">Wait</div>;
  }
}

export default Links;
