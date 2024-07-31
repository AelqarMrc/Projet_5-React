// App.js
import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import Locations from '../../components/Locations';
import logementsdata from '../../utils/logements.json';
import '../../style.css';


function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    setLogements(logementsdata)
  }, [])

  return (
    <div className="App">
      <Banner />
      <main>
      <Locations logements={logements} />

      </main>
    </div>
  );
}

export default Home;
