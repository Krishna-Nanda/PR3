import logo from './logo.svg';
import './App.css';
import Body from './Body'
import React, { useState, useEffect } from "react"
import TabList from './TabList'


function App() {
  const [activeTab, setActiveTab] = useState("Text")
  const [userYPos, setUserYPos] = useState(window.scrollY);

  useEffect(() => {
    function getPosition() {
      var currentlocation = window.scrollY;
      setUserYPos(currentlocation)
    }
    document.addEventListener("scroll", getPosition)

    return () => {
      document.removeEventListener('scroll', getPosition);
    }

  }, []);

  const pageHeight = document.body.scrollHeight;

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <TabList activeTab={activeTab} setActiveTab={setActiveTab} />
      <Body activeTab={activeTab} />
      {userYPos > pageHeight * .25 ? <button onClick={scrollToTop} class="scrolltotopbtn">Back to Top</button> : null}
    </div>
  );
}

export default App;
