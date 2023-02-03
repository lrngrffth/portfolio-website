import React from 'react';
import './App.css';
import Header from './header';
import headshot from './headshot.png'
import welcome from './welcome.gif'

function App() {
  return (
    <div className="App">
      <h1 className="site-name">Lauren Griffith</h1>
      <Header 
        currentPage='AboutMe'/>
      <div className='cover-page'>
        <div className="my-info">
          <img className="welcome" src={welcome} alt="welcome gif" />
          <p>Welcome to my page! My name is Lauren and I am a third year undergraduate student at OSU, feel free to explore to learn more about me and view some of my projects.</p>
          <div className='major-info'><p>The Ohio State University: Main campus
            Computer Science and Engineering Major- Information and Computation Assurance Specialization
            </p><p>Aviation - Social and Behavioral Science Minor</p></div>
          <p>My Github: {<a href="https://github.com/lrngrffth">https://github.com/lrngrffth </a>}</p>
        </div>
        <img className="headshot" src={headshot} alt="My headshot" />
      </div>
    </div>
  );
}

export default App;
