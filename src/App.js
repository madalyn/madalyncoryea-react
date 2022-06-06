import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="d-flex flex-fill justify-content-between">
          <div className="flex-1 d-flex w-100 justify-content-center align-items-center">
            <div className="header-photo">photo</div>
          </div>
          <div className="flex-3">
            <h1 className="title mb-4">Madalyn Coryea</h1>
            <div className="mt-4 header-width">
              <p>
                I am a Software Engineer with over 8 years experience.
                Professionally I've done React, C#/.NET, Android, and iOS (but
                back in the Objective-C days). I'm interested in UX/UI design
                and front-end work.
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
      <div>
        <h1>Projects</h1>
        <div>
          <h2>Peachplex</h2>
          <h2>Bonko</h2>
          <h2>Github</h2>
        </div>
        <p>photo strip at bottom of page.</p>
      </div>
    </div>
  );
}

export default App;
