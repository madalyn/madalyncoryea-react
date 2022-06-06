import logo from "./logo.svg";
import "./App.css";
import InfoCard from "./components/InfoCard";
import HeaderSection from "./components/HeaderSection";
import Die from "./reusables/Die";

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
      <div className="w-100 d-flex justify-content-center mt-4">
        <div className="page-width">
          <HeaderSection title="Projects">
            <div>
              <InfoCard
                title="Peachplex"
                photo="/images/200x200xpeachplex.png"
                text="Developed in College."
              />
              <InfoCard
                title="Bonko"
                photoSub={
                  <div className="text-center size-100px">
                    <Die currentNumber={3} isDisabled={false} />
                  </div>
                }
                text="Bonko is a dice-rolling card game I play with my inlaws' family over Christmas. We couldn't play during Covid, so I made a virtual version."
              />
              <InfoCard
                title="Venice Bells"
                photo="/images/venice-bells-logo.jpeg"
                text="Developed in College."
              />
              <InfoCard
                title="Github"
                photo="/images/github2.jpeg"
                text="Check out my Github, where you can also find the code for this website."
              />
            </div>
          </HeaderSection>
          <HeaderSection title="Work Experience">
            <div>
              <h2>Grubhub / LevelUp</h2>
              <h2>Vistaprint</h2>
              <h2>Microsoft / Xamarin</h2>
              <h2>LinkedIn</h2>
            </div>
          </HeaderSection>
          <p>photo strip at bottom of page.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
