import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import CoursePage from "./CoursePage";
import Header from "../common/Header";

function App() {
  const route = window.location.pathname;
  function getPage() {
    if (route === "/courses") return <CoursePage />;
    if (route === "/about") return <AboutPage />;
    return <HomePage />;
  }
  return (
    <div className="container">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
