function Navbar() {
  return (
    <div className="Navbar">
      <h1 className="Nav-Title fw-bold">DOOM </h1>
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
          width: 100vw !important;
          height: auto;
        }
        .black {
          color: #1d2021;
        }
      `}</style>
    </div>
  );
}

export default Navbar;
