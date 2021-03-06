import Links from "./Links";

function Repos() {
  return (
    <div className="image">
      <div className="container">
        <h1 className="text-center">My web projects</h1>
        <div className="card-group mb-2">
          <Links
            title="House Cloud"
            description="A functionally Cloud in your house"
            langs={["html5", "css3", "js", "node-js", "github"]}
            date="today"
            className="card"
          />
          <Links
            title="Todo's"
            description="A ToDo app with a database connection"
            langs={[
              "html5",
              "css3",
              "js",
              "react",
              "node-js",
              "sass",
              "github",
            ]}
            date="today"
            className="card"
          />
          <Links
            title="Lol Tracker"
            description="League of legends games tracker"
            langs={["html5", "css3", "js", "react", "github"]}
            date="today"
            className="card"
          />
        </div>
        <h1 className="text-center">Another Programing projects</h1>
        <div className="card-group mb-2">
          <Links
            title="Terminal Cloud Client"
            description="A functionally Cloud Client in your terminal"
            langs={["node-js", "js"]}
            date="today"
            className="card"
          />
          <Links
            title="Rust Manager"
            description="A Schedulary wirtten in rust with a lot of features"
            langs={["rust"]}
            date="today"
            className="card"
          />
          <Links
            title="DropBar"
            description="A faster, customizable, hackable bar for your WM"
            langs={["rust", "python"]}
            date="today"
            className="card"
          />
        </div>
      </div>
      <style jsx>
        {`
          .image {
            background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpaperscraft.com%2Fimage%2Fleaves_plant_green_136320_3840x2160.jpg&f=1&nofb=1")
              center center fixed;
            width: 100vw;
            height: auto;
            color: white;
            padding: 1rem;
          }
          .text-center {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}

export default Repos;
