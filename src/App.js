import logo from "./logo.svg";
import "./App.css";
import InfoCard from "./components/InfoCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Horizontal Layout</p>
          <p>Vertical Layout</p>
        </div>
        <div className="d-flex flex-fill justify-content-between">
          <div className="flex-1 d-flex w-100 justify-content-center align-items-center">
            <div className="header-photo">photo</div>
          </div>
          <div className="flex-3">
            <h1 className="title mb-4 mt-4">Madalyn Coryea</h1>
            <div className="mt-4 header-width">
              <p>
                I am a Software Engineer based in Boston, MA with over 8 years
                experience. Professionally I've done React, C#/.NET, Android,
                and iOS (but back in the Objective-C days). I'm interested in
                UX/UI design and front-end work.
              </p>
              <p>
                I am a Worcester Polytechnic Institute (WPI) Alum. I was the
                President of Women in Computer Science for two years, and our
                membership quadrupled under my tenure.
              </p>
              <p>
                I also enjoy writing, playing piano and ukelele, gardening,
                mushroom foraging and cooking.
              </p>
            </div>
          </div>
        </div>
      </header>
      <div className="w-100 d-flex justify-content-center">
        <div className="page-width">
          <div className="mt-4">
            <h1>Projects</h1>
            <div>
              <InfoCard title="Peachplex" text="Developed in College." />
              <InfoCard
                title="Bonko"
                text="Bonko is a dice-rolling card game I play with my inlaws' family over Christmas. We couldn't play during Covid, so I made a virtual version."
              />
              <InfoCard title="Venice Bells" text="Developed in College." />
              <InfoCard title="Github" text="Check out my Github" />
            </div>
          </div>
          <div>
            <h1>Work Experience</h1>
            <div>
              <h2>Grubhub / LevelUp</h2>
              <h2>Vistaprint</h2>
              <h2>Microsoft / Xamarin</h2>
              <h2>LinkedIn</h2>
            </div>
          </div>
          <p>photo strip at bottom of page.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
