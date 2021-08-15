function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="Nav-Title">
        {`<`}
        <span className="black">camilo</span>
        {`/>`}
      </h1>
      <ul className="links">
        <li>
          <a href="#">{`> Home`}</a>
        </li>
        <li>
          <a href="#">{`> Youtube`}</a>
        </li>
        <li>
          <a href="#">{`> Twitter`}</a>
        </li>
      </ul>
      <style jsx>{`
        .Navbar {
          padding: 1vw;
          width: 100vw;
          height: auto;
          border-bottom: solid 1px #28282815;
        }
        .Navbar * {
          display: inline;
        }
        .Nav-Title {
          text-transform: ;
          margin-top: 1vh;
          color: #689d6a;
          font-size: 1.5rem;
        }
        .links {
          lilst-style-type: none;
          padding: 0;
        }
        li {
          text-transform: capitalize;
          font-weight: bold;
          display: inline;
          margin: 0.5vw;
        }
        li > a {
          text-decoration: none;
          color: #282828;
          margin: 1vw;
        }
        li > a:hover {
          color: #689d6a;
          text-decoration: underline #689d6a;
        }
        .black {
          color: #1d2021;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
