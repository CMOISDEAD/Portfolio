function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="Nav-Title">
        {`<`}
        <span className="black">camilo</span>
        {`/>`}
      </h1>
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
        .black {
          color: #1d2021;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
