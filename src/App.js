import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import './css/stylish-portfolio.min.css';
import jQuery from 'jquery';


function App() {
  document.title = 'sspacio'
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
