// App.js
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
