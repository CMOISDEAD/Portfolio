const Contact = () => {
  return (
    <div className="mb-2">
      <h1 className="title">Contact</h1>
      <div className="row justify-content-between">
        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0 text-center">
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
        <div className="col-sm-4 col-md-5">
          <ul className="links">
            <li className="bg-red">
              <a href="">Mail</a>
            </li>
            <li className="bg-yellow">
              <a href="">Twitter</a>
            </li>
            <li className="bg-orange">
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
        ul > li:hover {
          font-size: 1.2rem;
        }
        ul > li > a {
          text-decoration: none;
          transition: all 0.1s ease;
          text-align: center;
        }
        ul > li > a:hover {
          color: #83c07c;
        }
        .bg-red {
          border: 1px solid #fb4834;
        }
        .bg-yellow {
          border: 1px solid #fabd2f;
        }
        .bg-orange {
          border: 1px solid #fe8019;
        }
        .bg-red:hover {
          background: #fb4934;
        }
        .bg-yellow:hover {
          background: #fabd2f;
        }
        .bg-orange:hover {
          background: #fe8019;
        }
      `}</style>
    </div>
  );
};

export default Contact;
