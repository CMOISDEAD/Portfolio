import Links from "./Links";

function Repos() {
  return (
    <div className="image">
      <div className="container">
        <h1 class="text-center">My web projects</h1>
        <div className="grid">
          <Links
            title="House Cloud"
            description="A functionally Cloud in your house"
          />
          <Links
            title="Todo's"
            description="A ToDo app with a database connection"
          />
          <Links
            title="Lol Tracker"
            description="League of legends games tracker"
          />
        </div>
        <h1 className="text-center">Another Programing projects</h1>
        <div className="grid">
          <Links
            title="Terminal Cloud Client"
            description="A functionally Cloud Client in your terminal"
          />
          <Links
            title="Rust Manager"
            description="A Schedulary wirtten in rust with a lot of features"
          />
          <Links
            title="DropBar"
            description="A faster, customizable, hackable bar for your WM"
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            margin: 15vh 0 15vh 0;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .image {
            background: url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.wallpaperscraft.com%2Fimage%2Fleaves_plant_green_136320_3840x2160.jpg&f=1&nofb=1")
              center center fixed;
            width: 100vw;
            height: auto;
            color: white;
          }
          .text-center {
            text-align: center;
          }
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            // flex-wrap: wrap;
            width: 90vw;
            max-width: 90vw;
            // margin-top: 3rem;
          }
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Repos;
