import './App.css';
import Main from './components/Main';
import Skills from './components/Skills'
import Navbar from './components/Navbar';
import Education from './components/Education';

function App() {
  return (
    <>
      <Navbar/>
      <div className='main--body'>
        <Main />
      </div>
      <div className='main--deta'>
        <Skills />
      </div>
      <Education />
    </>
  );
}

export default App;
