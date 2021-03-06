import TypeIt from "typeit-react"

function Presentation() {
  return (
    <div className="main">
      <h1 className="title">
        Welcome to my <span className="green">Portfolio</span>
      </h1>

      <p className="description">
        Here you can see my 
        <br />
          <span className="green">Projects/Code/Motivations</span>
      </p>
      <div className="arrow-down">&darr;</div>

      <style jsx>
        {`
          .main {
            margin: 30vh 0 0 0;
          }
          .title a {
            color: #0070f3;
            text-decoration: none;
          }
          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
          .title,
          .description,
          .arrow-down {
            text-align: center;
          }
          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
          .arrow-down {
            font-size: 3rem;
            margin: 14vh 0 14vh 0;
            color: #689d6a;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
          .green {
            color: #689d6a;
          }
        `}
      </style>
    </div>
  );
}

export default Presentation;
