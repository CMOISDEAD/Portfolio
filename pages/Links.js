function Links({ title, description }) {
  return (
    <>
      <a className="card" href="#">
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
      <style jsx>
        {`
          .card {
            margin: 1rem;
            // flex-basis: 45%;
            padding: 1.5rem;
            text-align: center;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            background: #eaeaea;
            color: #1d2021;
            border-radius: 0px;
            transition: color 0.15s ease, border-color 0.15s ease;
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
}

export default Links;
