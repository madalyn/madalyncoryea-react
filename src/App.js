import react, { useState } from "react";
import "./App.css";
import InfoCard from "./components/InfoCard";
import HeaderSection from "./components/HeaderSection";
import Die from "./reusables/Die";
import MathUtil from "./helpers/MathUtil";

function App() {
  const [dieOneNumber, updateDieOneNumber] = useState(
    MathUtil.getRandomInt(1, 7)
  );
  const currentYear = new Date().getFullYear();
  const currentExperience = currentYear - 2012;

  return (
    <div className="App">
      <header className="App-header">
        <div className="d-none">
          <p>Horizontal Layout</p>
          <p>Vertical Layout</p>
        </div>
        <div className="d-flex flex-fill justify-content-between">
          <div className="flex-1 d-flex w-100 justify-content-center align-items-center">
            <div className="header-photo">
              <img
                className="w-100 h-100 round-style border-green"
                src="/images/headshot.jpg"
                alt={"Madalyn Coryea"}
              />
            </div>
          </div>
          <div className="flex-3">
            <h1 className="title mb-4 mt-4">Madalyn Coryea</h1>
            <div className="mt-4 header-width">
              <p>
                I am a Software Engineer based in Boston, MA with over{" "}
                {currentExperience} years experience. Professionally I've done
                React, C#/.NET, Android, and iOS (but back in the Objective-C
                days). I'm interested in UX/UI design and front-end work.
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
                text="Social visual bookmarking website. No longer maintained 
                (but our parents still use it!). Developed in College, VanillaJS and Django/Python."
              />
              <InfoCard
                title="Bonko"
                photoSub={
                  <div className="text-center size-100px">
                    <Die currentNumber={dieOneNumber} isDisabled={false} />
                  </div>
                }
                text="Bonko is a dice-rolling card game I play with my inlaws' family over Christmas. 
                We couldn't play during Covid, so I made a virtual version. Created with React and Firebase."
              />
              <InfoCard
                title="Venice Bells"
                photo="/images/venice-bells-logo.jpeg"
                text="I lived in Venice for 3 months in 2012 as part of a project to preserve the audio recordings of the campanile. 
                Venice Bells was the website (only hosted locally now) I developed for this project."
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
          <p className="d-none">photo strip at bottom of page.</p>
          <p>madalyncoryea.com &copy; {currentYear}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
