import React from 'react';
import './App.css';

function App() {
  return (

    <div className="App">
      {/* Intro Section */}
      <section className="intro">
        <h1>Winnie Chen</h1>
        <p className="subtitle">Engineering precision, designing with heart</p>
        <div className="contact-info">
          <a href="mailto:your.email@example.com">jhwinniec@u.northwestern.edu</a>
          <a href="https://linkedin.com/in/jhwinniec">LinkedIn</a>
          <a href="https://github.com/Wjiahui22">GitHub</a>
        </div>
      </section>

      

{/* Portfolio Section */}

  <section className="portfolio">
    <div className="portfolio-flow">
      
      <div className="project">
        <div className="project-image">
          <img src="/images/IMG_5652.JPG" alt="ArtRest" style={{maxWidth: '100%', maxHeight: '230px', objectFit: 'cover'}} />
        </div>
        <div className="project-content">
          <h3>ArtRest</h3>
          <p>As part of the Design Thinking and Communication course at Northwestern’s McCormick School of Engineering, our team partnered with a patient at Bridges Adult Transition Center who has spastic quadriplegia and experiences arm fatigue while painting. We designed and prototyped an adjustable armrest to support her creative practice. The device features finger loops for grip stability, height adjustment for ergonomic support, and a sliding rail mechanism to allow fluid arm movement across the canvas.</p>
          <p>Academic Project · Spring 2025</p>
          <a href="/pdfs/ArtRest.pdf" className="view-case-study">View Case Study -{'>'} </a>
          <br></br>
          <div className="project-tags">
            <span className="tag">MechEng</span>
          </div>
        </div>
      </div>

      {/* <div className="project">
        <div className="project-image">
          <img src="/images/capybara-onsen (1).jpg" alt="ArtRest" style={{maxWidth: '100%', maxHeight: '230px', objectFit: 'cover'}} />
        </div>
        <div className="project-content">
          <h3>ArtRest</h3>
          <p>As part of the Design Thinking and Communication course at Northwestern’s McCormick School of Engineering, our team partnered with a patient at Bridges Adult Transition Center who has spastic quadriplegia and experiences arm fatigue while painting. We designed and prototyped an adjustable armrest to support her creative practice. The device features finger loops for grip stability, height adjustment for ergonomic support, and a sliding rail mechanism to allow fluid arm movement across the canvas.</p>
          <p>Academic Project · Spring 2025 - Now</p>
          <a href="#" className="view-case-study">view case study +</a>
          <div className="project-tags">
            <span className="tag">Adobe Photoshop</span>
            <span className="tag">HCI</span>
            <span className="tag">Prototyping</span>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-image">
          <a href="/pdfs/V. Ho and W. Chen Short Project (1).pdf" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/Screenshot 2025-07-03 at 1.33.38 AM.png"
              alt="Model Potato"
              style={{ maxWidth: '100%', maxHeight: '230px', objectFit: 'cover', cursor: 'pointer' }}
            />
          </a>
        </div>
        <div className="project-content">
          <h3>Model Potato (click to read)</h3>
          <p>As part of a storytelling research project, we created a digital animation to explore the emotional effects of the model minority myth on Asian American students, especially those who are FGLI. The short follows a sweet potato character navigating academic pressure and cultural silence around asking for help. Using visual metaphors and simple dialogue, the piece encourages young Asian Americans to seek support, reject harmful expectations, and embrace their full identities.</p>
          <p>Research Project · Fall 2024 - Now</p>
          <a href="#" className="view-case-study">view case study +</a>
          <div className="project-tags">
            <span className="tag">Procreate</span>
            <span className="tag">Character Design</span>
            <span className="tag">Research</span>
          </div>
        </div>
      </div>

      <div className="project">
        <div className="project-image">
          <img src="/images/1738736724206.jpeg" alt="Bloomie" style={{maxWidth: '100%', maxHeight: '230px', objectFit: 'cover'}} />
        </div>
        <div className="project-content">
          <h3>Bloomie-Interactive Educational Plant</h3>
          <p>For our final design project, we created Bloomie, an artificial plant prototype that helps users learn about real plant care through light cues and sensor feedback. We led the concept development together, designed the Bloomie logo, edited a progress video, and built a 3D presentation for the final showcase. The project blends education and interaction to make plant care more accessible and engaging.</p>
          <p>Design Project · Winter 2025 - Now</p>
          <a href="#" className="view-case-study">view case study +</a>
          <div className="project-tags">
            <span className="tag">Procreate</span>
            <span className="tag">Video Editing</span>
            <span className="tag">3D Printing</span>
          </div>
        </div>
      </div> */}
    </div>
  </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>I merge mechanical engineering with design to build efficient, elegant solutions. From microcomponents to big ideas, I make the complex feel accessible.</p>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Let's Connect</h2>
        <p>I'm always excited to work on new projects and collaborate with creative minds. Let's create something amazing together!</p>
        <div className="contact-links">
          <a href="jhwinniec@u.northwestern.edu">Email</a>
          <a href="https://linkedin.com/in/jhwinniec">LinkedIn</a>
          <a href="https://github.com/Wjiahui22">GitHub</a>
        </div>
      </section>
    </div>
  );
}

export default App;