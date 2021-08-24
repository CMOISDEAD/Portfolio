const Contact = () => {
  return (
    <div className="mb-2">
      <h1 className="title">Contact</h1>
      <div className="row justify-content-between">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-7 col-xxl-7">
          <div>
            Adipisicing dolore quo expedita nostrum repudiandae Incidunt et vel
            quaerat asperiores mollitia Distinctio cupiditate alias
            reprehenderit perferendis officiis Odit totam ea quidem officia
            aperiam. Necessitatibus cupiditate saepe ratione eos ex.
          </div>
          <br />
          <div>
            Lorem suscipit suscipit tempore adipisci qui. Earum assumenda quis
            delectus nemo aliquid ipsa. Rerum nesciunt veniam quas laudantium
            nisi! Illo nisi quos amet quod accusamus voluptatibus, est? Delectus
            quaerat excepturi.
          </div>
        </div>
        <div className="col">
          <ul className="links">
            <li className="bg-red">
              <i aria-hidden className="fab fa-mailchimp" />
              <a href="">Mail</a>
            </li>
            <li className="bg-blue">
              <i aria-hidden className="fab fa-twitter" />
              <a href="">Twitter</a>
            </li>
            <li className="bg-dark-blue">
              <i aria-hidden className="fab fa-linkedin" />
              <a href="">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .container {
          margin: 0 2vw 0 2vw;
        }
        .title {
          text-align: center;
        }
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        ul > li {
          padding: 1.2rem;
          transition: all 0.1s ease;
        }
        ul > li:hover > * {
          padding: 1vh;
          color: #1d2021 !important;
        }
        ul > li > a {
          text-decoration: none;
          transition: all 0.1s ease;
          text-align: center;
        }
        ul > li > a:hover {
          color: #83c07c;
        }
        i {
          margin: 0 0.5rem;
        }
        .bg-red {
          border: 1px solid #fb4834;
        }
        .bg-blue {
          border: 1px solid #1da1f2;
        }
        .bg-dark-blue {
          border: 1px solid #0e76a8;
        }
        .bg-red:hover {
          background: #fb4934;
        }
        .bg-blue:hover {
          background: #1da1f2;
        }
        .bg-dark-blue:hover {
          background: #0e76a8;
        }
      `}</style>
    </div>
  );
};

export default Contact;
