// import React, { useState } from 'react';
// import './App.css'
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import Resume from "./components/resume";
// import Nav from "./components/Nav"
// import Footer from "./components/Footer";

// function App() {

//   const [currentPage, setCurrentPage] = useState("About");

//   const renderPage = () => {
//     if (currentPage === "About") {
//       return <About />;
//     }
//     if (currentPage === "Portfolio") {
//       return <Portfolio />;
//     }
//     if (currentPage === "Contact") {
//       return <Contact />;
//     }
//     return <Resume />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div className="App">
//       <header>
//         <Nav
//         currentPage={currentPage}
//         handlePageChange={handlePageChange}>
//         </Nav>
//       </header>
//       <main>
//         {renderPage()}
//       </main>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;

// updated code using original react app code

import React, { useState } from "react";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  
  const [currentPage, setCurrentPage] = useState('About');

  // conditionals to decide the render on the page

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  // handler for page change with onClick event for any navbar links
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div className="App">
      <header className="App-header">
        <Nav
          className=""
          currentPage={currentPage}
          handlePageChange={handlePageChange}>
          </Nav>
      </header>
      <main>
        {renderPage()}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
