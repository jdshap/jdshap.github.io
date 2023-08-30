import './App.css';
import './';

import Navbar from './components/navbar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <body className="App-body">
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </body>

      <footer className="App-footer">
        <div style={{"width":"70%"}}>
          <div>
            <a href='https://www.github.com/jdshap/'><img className="Social-icon" src='/assets/images/github-mark-white.svg'/></a>
            <a href="https://www.linkedin.com/in/jdshap/"><img className="Social-icon" src='/assets/images/In-White-26.png'/></a>
          </div>
          <div>
            <a className="Sitemap" href='/'>Home</a>
            <a className="Sitemap" href='/software'>Software</a>
            <a className="Sitemap" href='/printing'>3D Printing</a>
            <a className="Sitemap" href='/about'>About</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
