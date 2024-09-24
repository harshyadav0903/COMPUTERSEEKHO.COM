import './App.css';
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Home from './Home.jsx';
import CardContainer from './CardContainer.jsx';
import Footer from './Footer.jsx';
import MyNavbar from './MyNavBar';
function App() {
  return (
    <>
<div>
      <h1>Welcome to My React App</h1>
      <p>This is the home page.</p>
      <img
        src="https://example.com/your-image.jpg" // Replace with the URL of your image
        alt="Description of the image"
        style={{ maxWidth: '100%', height: 'auto' }}
        
      />
              <Footer/>

    </div>


      {/* <div >
       
        <h1 className="text-center">Welcome to ComputerSeekho</h1>
        <br />
        <CardContainer />
        <Footer />

        <Outlet></Outlet>
      </div> */}
    </>
  );
}

export default App;
