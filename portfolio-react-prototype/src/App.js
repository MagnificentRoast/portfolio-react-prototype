import React, { useState } from 'react';
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/resume";
import Nav from "./components/Nav"
import Footer from "./components/Footer";

function App() {

  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <header>
        <Nav
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
