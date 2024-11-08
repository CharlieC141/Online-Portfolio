import './App.css';
import backgroundImage from './assets/images/autumnbackground.png';
import logo1 from './assets/images/github 2.png';
import logo2 from './assets/images/facebook2.png';
import logo3 from './assets/images/Youtube2.png';
import logo4 from './assets/images/linkedin2.png';
import logo5 from './assets/images/tiktok.png';

function App() {
  return (
    <div className="App">
      <div
        className="background-container"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          width: '100vw',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <header className="App-header">
          <nav className="navbar">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="welcome-box">
            Welcome to my Online Portfolio
          </div>

          <div className="introduction-text">
            Hi, I am Charlie Columbres,<br /> but I also go by the name Jords.
          </div>

          <div className="short-description">
            I am a dedicated Game Developer, Front-End Web Developer, and Mobile App Developer with
            a passion for creating innovative and immersive digital experiences. With a solid foundation
            in Unity, C#, and various web and app technologies, I am actively seeking opportunities to
            expand my skill set and contribute to exciting projects. I strive to stay ahead of industry
            trends, always looking for fresh ideas and challenges to enhance my technical expertise and
            creativity.
          </div>

          <div className="projects-header">
            <h2>Here are some of my projects</h2>
          </div>

          <div className="button-container">
            <button className="project-button">Shadows Of Valhalla</button>
            <button className="project-button">What?</button>
            <button className="project-button">Spirits Descent</button>
          </div>

          {/* Footer moved inside the header */}
          <footer className="footer">
            <div className="footer-images">
              <a href="https://github.com/CharlieC141" target="_blank" rel="noopener noreferrer">
                <button className="footer-button">
                  <img src={logo1} alt="GitHub" className="footer-logo" />
                </button>
              </a>
              <a href="https://www.facebook.com/charlie.columbres.7" target="_blank" rel="noopener noreferrer">
                <button className="footer-button">
                  <img src={logo2} alt="Facebook" className="footer-logo" />
                </button>
              </a>
              <a href="https://www.youtube.com/@JordsPlays" target="_blank" rel="noopener noreferrer">
                <button className="footer-button">
                  <img src={logo3} alt="YouTube" className="footer-logo" />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/charlie-columbres-482485253/" target="_blank" rel="noopener noreferrer">
                <button className="footer-button">
                  <img src={logo4} alt="LinkedIn" className="footer-logo" />
                </button>
              </a>
              <a href="https://www.tiktok.com/@jords_plays_" target="_blank" rel="noopener noreferrer">
                <button className="footer-button">
                  <img src={logo5} alt="TikTok" className="footer-logo" />
                </button>
              </a>
            </div>
            <div className="footer-info">
              <p>Charlie Columbres | Game Developer | Web Developer | Mobile App Developer</p>
            </div>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
